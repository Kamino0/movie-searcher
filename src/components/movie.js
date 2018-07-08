import React from 'react';

import MovieDescription from './movieDescription';
import Recommendation from './recommendation';
import Placeholder from './placeholder';

class Movie extends React.Component {

  componentDidMount() {
    this.props.requestMovie();
    this.props.requestRecomendations();
    window.scrollTo(0,0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.requestMovie();
      this.props.requestRecomendations();
      window.scrollTo(0,0);
    }
  }

  render() {
    const { movie, recommendations, fetching } = this.props
    return (
      <div>
        { fetching ? <div className='movie-placeholder-wrap'><Placeholder /></div> :
          <MovieDescription movie={movie} />
        }
        <div className='recommendations'>
          {recommendations.map(movie => (
            <Recommendation movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default Movie;
