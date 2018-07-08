const initialSort = {
  sorting: false,
  sortType: 'popularity',
  popularAsc: false,
  voteAsk: false,
  movies: [],
  nextPage: 2,
  scrolling: false,
  fetching: false,
  fetchingScroll: false
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
    default:
      return state
  }
}

export default sorting;
