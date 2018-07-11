import React from 'react';

import SearchContainer from '../containers/searchContainer';
import MovieCard from './movieCard';
import Placeholder from './placeholder';
import GenreFilter from './genreFilter';

class Home extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { asMovies, fetching, fetchingScroll } = this.props;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const pageHeight = document.body.clientHeight;
    if (pageOffset >= pageHeight - 100 && (!fetching || !fetchingScroll)) {
      if (asMovies === 'sorting') this.props.requestSort(true)
      else if (asMovies === 'search') this.props.search(true)
    }
  }

  render = () => {
    const { movies, fetching, fetchingScroll, genreList, editGenre } = this.props;
    console.log(fetching)
    return (
      <div>
        <SearchContainer />
        <div className='main-content__row'>
          <GenreFilter genreList={genreList} editGenre={editGenre} />
            <div className='movie-cards'>
              {
              fetching ? <Placeholder /> :
              movies.map((movie, i) => <MovieCard key={i} movie={movie} />)
              }
              {fetchingScroll && <Placeholder />}
            </div>
        </div>
      </div>
    )
  }

}

export default Home;
