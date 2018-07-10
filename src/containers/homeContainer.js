import { connect } from 'react-redux';

import { requestSort, search } from '../actions';
import Home from '../components/home';

let movies, asMovies;

const wat = (state) => {
  if(state.search.searchText !== '') {
    movies = state.search.movies,
    asMovies = 'search'
  } else {
    movies = state.sorting.movies,
    asMovies = 'sorting'
  }
}

const mapStateToProps = (state) => {

  wat(state);

  return {
    movies,
    asMovies,
    scrolling: state.sorting.scrolling,
    fetching: state.sorting.fetching,
    fetchingScroll: state.sorting.fetchingScroll,
    fetchingSearch: state.search.fetching
  }
};

const mapDispatchToProps = {
  requestSort,
  search
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
