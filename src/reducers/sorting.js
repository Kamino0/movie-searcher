import { genres } from '../config';

const initialSort = {
  sorting: false,
  sortType: 'popularity',
  popularAsc: false,
  voteAsc: false,
  revenueAsc: false,
  movies: [],
  nextPage: 2,
  scrolling: false,
  fetching: false,
  fetchingScroll: false,
  genreList: genres.map(genre => ({
    ...genre,
    active: false
  }))
}
const sorting = (state = initialSort, action) => {
  switch (action.type) {
    case 'REQUEST_SORT':
      return {
        ...state,
        sorting: true,
        sortType: action.sortType,
        fetching: true,
        ...action.newBtnState
      }
    case 'RECIEVE_SORT':
      return {
        ...state,
        sorting: false,
        movies: action.movies,
        fetching: false,
      }
    case 'REQUEST_SCROLL':
      return {
        ...state,
        scrolling: true,
        fetchingScroll: true
      }
    case 'RECIEVE_SCROLL':
      return {
        ...state,
        scrolling: false,
        movies: [...state.movies, ...action.movies],
        nextPage: state.nextPage + 1,
        fetchingScroll: false
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
        genreList: newGenreList
      }
    default:
      return state
  }
}

export default sorting;
