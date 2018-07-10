import axios from 'axios';

import {
  API_KEY,
  URL,
  DISCOVER_URL,
  SEARCH_URL,
  VOTE_COUNT
} from '../config';

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

export const editButton = (buttonName) => (dispatch, getState) => {
  dispatch({
    type: 'EDIT_BUTTON',
    buttonName
  })

  dispatch(requestSort())
}

export const requestSort = (isScrolling) => (dispatch, getState) => {
  const state = getState().sorting;

  if ((isScrolling && state.fetchingScroll) || state.endScrolling) return;

  const genres = [];
  state.genreList.forEach(genre => { if (genre.active) genres.push(genre.id) })

  let btnState;
  const sortType = state.sortType;

  switch (sortType) {
    case 'popularity':
      btnState = state.buttons.popularAsc;
      break;
    case 'vote_average':
      btnState = state.buttons.voteAsc;
      break;
    case 'revenue':
      btnState = state.buttons.revenueAsc;
      break;
  }

  const sortDirection = btnState ? 'asc' : 'desc';

  dispatch({
    type: 'REQUEST_SORT',
    isScrolling
  })

  const nextPage = isScrolling ? state.nextPage : 1;
  let request;
  if (genres.length > 0) {
    request = `${DISCOVER_URL}${API_KEY}&sort_by=${sortType}.${sortDirection}${VOTE_COUNT}&with_genres=${genres.join(',')}&page=${nextPage}`
  } else {
    request = `${DISCOVER_URL}${API_KEY}&sort_by=${sortType}.${sortDirection}${VOTE_COUNT}&page=${nextPage}`
  }

  axios(request)
  .then(res => {
    if (res.data.results.length < 20) {
      dispatch({
        type: 'RECIEVE_SORT',
        movies: res.data.results,
        isScrolling,
        endScrolling: true
      })
    } else {
      dispatch({
        type: 'RECIEVE_SORT',
        movies: res.data.results,
        isScrolling,
        endScrolling: false
      })
    }
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

export const search = (isScrolling) => (dispatch, getState) => {
  dispatch({
    type: 'REQUEST_SEARCH',
    text
  })

  const state = getState();
  const text = state.search.searchText

  if (text === '') {
    dispatch({
      type: 'EMPTY_SEARCH',
      isScrolling
    })
  } else {
    const nextPage = isScrolling ? state.search.nextPage : 1;
    axios(`${SEARCH_URL}${API_KEY}&query=${text}&page=${nextPage}`)
    .then(res => {
      console.log(res.data.results)
      dispatch({
        type: 'RECIEVE_SEARCH',
        movies: res.data.results,
        isScrolling
      })
    })
  }
}

export const editSearchText = (text) => (dispatch) => {
  dispatch({
    type: 'EDIT_TEXT',
    text
  })

  dispatch(search())
}

export const editGenre = genre => dispatch => {
  dispatch({
    type: 'EDIT_GENRE',
    genre
  })

  dispatch(requestSort());
}
