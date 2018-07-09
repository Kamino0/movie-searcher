import { connect } from 'react-redux';

import { search, requestSort, editGenre } from '../actions';

import Search from '../components/search';

const mapStateToProps = (state) => ({
  searchText: state.search.searchText,
  popularAsc: state.sorting.popularAsc,
  voteAsc: state.sorting.voteAsc,
  revenueAsc: state.sorting.revenueAsc,
  sortType: state.sorting.sortType,
  genreList: state.sorting.genreList
})

const mapDispatchToProps = {
  search,
  requestSort,
  editGenre
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
