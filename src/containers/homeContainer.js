import { connect } from 'react-redux';

import { requestSort, search, editGenre } from '../actions';
import Home from '../components/home';

let movies, asMovies, fetching, fetchingScroll;

const wat = (state) => {
  if(state.search.searchText !== '') {
    movies = state.search.movies
    asMovies = 'search'
    fetching = state.search.fetching
    fetchingScroll = state.search.fetchingScroll
  } else {
    movies = state.sorting.movies
    asMovies = 'sorting'
    fetching = state.sorting.fetching
    fetchingScroll = state.sorting.fetchingScroll
  }
}

const mapStateToProps = (state) => {

  wat(state);

  return {
    movies,
    asMovies,
    fetching,
    fetchingScroll,
    genreList: state.sorting.genreList
  }
};

const mapDispatchToProps = {
  requestSort,
  search,
  editGenre
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
