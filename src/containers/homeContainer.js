import { connect } from 'react-redux';

import { requestScroll } from '../actions';
import Home from '../components/home';

const wat = (state) => {
  if(state.search.searchText !== '') {
    return state.search.movies
  } else {
    return state.sorting.movies
  }
}

const mapStateToProps = (state) => ({
  movies: wat(state),
  scrolling: state.sorting.scrolling,
  fetching: state.sorting.fetching,
  fetchingScroll: state.sorting.fetchingScroll,
  fetchingSearch: state.search.fetching
});

const mapDispatchToProps = {
  requestScroll
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
