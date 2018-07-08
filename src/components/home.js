import React from 'react';

import SearchContainer from '../containers/searchContainer';
import MovieCard from './movieCard';
import Placeholder from './placeholder';

class Home extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { scrolling } = this.props;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const pageHeight = document.body.clientHeight;
    if (pageOffset === pageHeight && !scrolling) {
      this.props.requestScroll()
    }
  }

  render = () => {
    const { movies, fetching, fetchingScroll, fetchingSearch } = this.props;
    return (
      <div>
        <SearchContainer />
        {
          fetching || fetchingSearch ? <Placeholder /> :
          <div className='movie-cards'>
            { movies.map((movie, i) => <MovieCard key={i} movie={movie} />) }
          </div>
        }
        {
          fetchingScroll && <Placeholder />
        }
      </div>
    )
  }

}

export default Home;
