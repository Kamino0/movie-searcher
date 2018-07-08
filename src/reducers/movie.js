const initialMovie = {
  fetching: false,
  description: {}
}
const movie = (state = initialMovie, action) => {
  switch (action.type) {
    case 'REQUEST_MOVIE':
      return {
        fetching: true,
        description: {}
      }
    case 'RECIEVE_MOVIE':
      return {
        fetching: false,
        description: action.movie
      }
    default:
      return state
  }
}

export default movie;
