import axios from 'axios';

import {
  API_KEY,
  URL,
  DISCOVER_URL,
  SEARCH_URL,
  VOTE_COUNT
} from '../config';

export const requestScroll = () => (dispatch, getState) => {
  const state = getState().sorting;

  dispatch({
    type: 'REQUEST_SCROLL'
  })

  const currentSortType = state.sortType;

  let btnState;
  switch (currentSortType) {
    case 'popularity':
      btnState = state.popularAsc;
      break;
    case 'vote_average':
      btnState = state.voteAsc;
      break;
    case 'revenue':
      btnState = state.revenueAsc;
      break;
  }

  const sortDirection = btnState ? 'asc' : 'desc';
  axios(`${DISCOVER_URL}${API_KEY}&sort_by=${currentSortType}.${sortDirection}${VOTE_COUNT}&page=${state.nextPage}`)
  .then(res => {
    dispatch({
      type: 'RECIEVE_SCROLL',
      movies: res.data.results
    })
  })
}

export const requestMovie = id => dispatch => {
  dispatch({
    type: 'REQUEST_MOVIE'
  })
  axios(`${URL}${id}${API_KEY}`)
  .then(res => {
    dispatch({
      type: 'RECIEVE_MOVIE',
      movie: res.data
    })
  })
}

export const requestSort = (sortType, isFirstRequest) => (dispatch, getState) => {
  let btnState;
  let newBtnState = {};
  let sortDirection;
  const state = getState().sorting;

  if (sortType === false) sortType = state.sortType

  const genres = [];
  state.genreList.forEach(genre => { if (genre.active) genres.push(genre.id) })

  if (isFirstRequest) {
    sortType = state.sortType;
    newBtnState = null;
    sortDirection = btnState ? 'asc' : 'desc';
  } else {
    switch (sortType) {
      case 'popularity':
        btnState = state.popularAsc;
        newBtnState = {
          popularAsc: !btnState
        }
        break;
      case 'vote_average':
        btnState = state.voteAsc;
        newBtnState = {
          voteAsc: !btnState
        }
        break;
      case 'revenue':
        btnState = state.revenueAsc;
        newBtnState = {
          revenueAsc: !btnState
        }
        break;
    }
    sortDirection = !btnState ? 'asc' : 'desc';
  }

  dispatch({
    type: 'REQUEST_SORT',
    sortType,
    newBtnState
  })

  let request;
  if (genres.length > 0) {
    request = `${DISCOVER_URL}${API_KEY}&sort_by=${sortType}.${sortDirection}${VOTE_COUNT}&with_genres=${genres.join(',')}&page=1`
  } else {
    request = `${DISCOVER_URL}${API_KEY}&sort_by=${sortType}.${sortDirection}${VOTE_COUNT}&page=1`
  }

  axios(request)
  .then(res => {
    dispatch({
      type: 'RECIEVE_SORT',
      movies: res.data.results
    })
  })
}

export const requestRecomendations = id => dispatch => {
  dispatch({
    type: 'REQUEST_RECOMMENDATIONS'
  })
  axios(`${URL}${id}/recommendations${API_KEY}`)
  .then(res => {
    dispatch({
      type: 'RECIEVE_RECOMMENDATIONS',
      recommendations: res.data.results
    })
  })
}

export const search = text => dispatch => {
  dispatch({
    type: 'REQUEST_SEARCH',
    text
  })
  if (text === '') {
    dispatch({
      type: 'EMPTY_SEARCH'
    })
  } else {
    axios(`${SEARCH_URL}${API_KEY}&query=${text}`)
    .then(res => {
      dispatch({
        type: 'RECIEVE_SEARCH',
        movies: res.data.results
      })
    })
  }
}

export const editGenre = genre => dispatch => {
  dispatch({
    type: 'EDIT_GENRE',
    genre
  })

  dispatch(requestSort(false));
}
