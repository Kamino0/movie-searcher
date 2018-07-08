import React from 'react';
import { Link } from 'react-router-dom';

import { IMG_W185_URL } from '../config';

const stringDelimiter = (str, limit) => {
  return str.split(' ').slice(0, limit).join(' ') + '...';
}

const MovieCard = ({movie}) => {

  const handleImageEror = (e) => {
    e.target.src = './img/noImage.jpg'
  }

  const overview = stringDelimiter(movie.overview, 15);
  return (
    <Link to={`/movie${movie.id}`}>
      <div className='movie-card'>
        <div className='movie-card__img-wrap'>
            <img width='185' height='278' src={`${IMG_W185_URL}${movie.poster_path}`} onError={handleImageEror} alt={movie.original_title} />
        </div>
        <div className='movie-card__description'>
          <h3 className='movie-card__title'>{movie.original_title}</h3>
          <p>Rating {movie.vote_average}</p>
          <p>{overview}</p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard;
