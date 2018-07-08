const initialSearch = {
  searchText: '',
  movies: [],
  fetching: false
}
const search = (state = initialSearch, action) => {
  switch (action.type) {
    case 'REQUEST_SEARCH':
      return {
        ...state,
        searchText: action.text,
        fetching: true
      }
    case 'RECIEVE_SEARCH':
      return {
        ...state,
        movies: action.movies,
        fetching: false
      }
    case 'EMPTY_SEARCH':
      return {
        ...state,
        fetching: false
      }
    default:
      return state
  }
}

export default search;
