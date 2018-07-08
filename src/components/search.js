import React from 'react';

class Search extends React.Component {

  componentDidMount() {
    const { requestSort } = this.props;
    requestSort('popularity', true)
  }

  searchHandler = (e) => {
    const text = e.target.value;
    this.props.search(text);
  }

  popularArrow = () => {
    const { popularAsc, sortType } = this.props;

    if (sortType === 'popularity') {
      return popularAsc ? '⇑' : '⇓';
    } else {
      return null
    }
  }

  voteArrow = () => {
    const { voteAsk, sortType } = this.props;
    if (sortType === 'vote_average') {
      return voteAsk ? '⇑' : '⇓';
    } else {
      return null
    }
  }

  render() {
    const { requestSort } = this.props;
    return (
      <div className='search'>
        <div className='search__sort'>
          <button onClick={() => requestSort('popularity')}>Popular{this.popularArrow()}</button>
          <button onClick={() => requestSort('vote_average')}>Vote{this.voteArrow()}</button>
        </div>
        <input placeholder='Search' type='text' value={this.props.searchText} onChange={this.searchHandler}/>
      </div>
    )
  }
}

export default Search;
