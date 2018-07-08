import axios from 'axios';

import {
  API_KEY,
  URL,
  DISCOVER_URL,
  SEARCH_URL
} from '../config';

export const requestScroll = (dispatch, getState) => {
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
      btnState = state.voteAsk;
      break;
  }

  const sortDirection = btnState ? 'asc' : 'desc';
  axios(`${DISCOVER_URL}${API_KEY}&sort_by=${currentSortType}.${sortDirection}&page=${state.nextPage}`)
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
        btnState = state.voteAsk;
        newBtnState = {
          voteAsk: !btnState
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

  axios(`${DISCOVER_URL}${API_KEY}&sort_by=${sortType}.${sortDirection}&page=1`)
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
