import { connect } from 'react-redux';

import { search, requestSort } from '../actions';

import Search from '../components/search';

const mapStateToProps = (state) => ({
  searchText: state.search.searchText,
  popularAsc: state.sorting.popularAsc,
  voteAsk: state.sorting.voteAsk,
  sortType: state.sorting.sortType
})

const mapDispatchToProps = (dispatch) => ({
  search: (text) => dispatch(search(text)),
  requestSort: (sortType, isFirstRequest) => dispatch(requestSort(sortType, isFirstRequest))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
