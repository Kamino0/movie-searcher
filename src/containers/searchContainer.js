import { connect } from 'react-redux';

import { requestSort, editGenre, editButton, editSearchText } from '../actions';

import Search from '../components/search';

const mapStateToProps = (state) => ({
  searchText: state.search.searchText,
  popularAsc: state.sorting.buttons.popularAsc,
  voteAsc: state.sorting.buttons.voteAsc,
  revenueAsc: state.sorting.buttons.revenueAsc,
  sortType: state.sorting.sortType,
  genreList: state.sorting.genreList
})

const mapDispatchToProps = {
  requestSort,
  editGenre,
  editButton,
  editSearchText
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
