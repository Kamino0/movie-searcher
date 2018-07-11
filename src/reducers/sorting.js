import { genres } from '../config';

const initialSort = {
  sortType: 'popularity',
  movies: [],
  nextPage: 2,
  fetching: false,
  fetchingScroll: false,
  endScrolling: false,
  buttons: {
    popularAsc: false,
    voteAsc: false,
    revenueAsc: false,
  },
  genreList: genres.map(genre => ({
    ...genre,
    active: false
  }))
}
const sorting = (state = initialSort, action) => {
  switch (action.type) {
    case 'REQUEST_SORT':
      if (action.isScrolling) {
        return {
          ...state,
          fetchingScroll: true
        }
      } else {
        return {
          ...state,
          fetching: true,
          endScrolling: false
        }
      }
    case 'RECIEVE_SORT':
      if (action.isScrolling) {
        return {
          ...state,
          movies: [...state.movies, ...action.movies],
          fetchingScroll: false,
          nextPage: state.nextPage + 1,
          endScrolling: action.endScrolling
        }
      } else {
        return {
          ...state,
          movies: action.movies,
          fetching: false,
          nextPage: 2
        }
      }
    case 'EDIT_GENRE':
      const index = state.genreList.findIndex(genre => genre.name === action.genre);
      const newGenre = {
        ...state.genreList[index],
        active: !state.genreList[index].active
      }

      const newGenreList = [
        ...state.genreList.slice(0, index),
        newGenre,
        ...state.genreList.slice(index + 1)
      ]
      return {
        ...state,
        endScrolling: false,
        genreList: newGenreList
      }
    case 'EDIT_BUTTON':
      let newBtnState;
      switch (action.buttonName) {
          case 'popularity':
            newBtnState = {popularAsc: !state.buttons.popularAsc}
            break;
          case 'vote_average':
            newBtnState = {voteAsc: !state.buttons.voteAsc}
            break;
          case 'revenue':
            newBtnState = {revenueAsc: !state.buttons.revenueAsc}
            break;
      }
      return {
        ...state,
        sortType: action.buttonName,
        endScrolling: false,
        buttons: {
          ...state.buttons,
          ...newBtnState
        }
      }
    default:
      return state
  }
}

export default sorting;
