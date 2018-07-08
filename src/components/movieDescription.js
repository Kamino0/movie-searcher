import React from 'react';

import Genres from './genres';

import { IMG_W342_URL } from '../config';

const MovieDescription = ({
  movie
}) => {

  const handleImageEror = (e) => {
    e.target.src = './img/noImage.jpg'
  }

  return (
    <div className='movie-details'>
      <div className='movie-details__poster-wrap'>
        <img width='342' height='513' src={`${IMG_W342_URL}${movie.poster_path}`} onError={handleImageEror} alt={movie.original_title} />
      </div>
      <div className='movie-details__description'>
        <h3 className='movie-details__title'>{movie.original_title}</h3>
        <p><b>Rating:</b> {movie.vote_average}</p>
        <p><b>Tagline:</b> <span className='movie-details__tagline'>{movie.tagline}</span></p>
        <p><b>Release date:</b> {movie.release_date}</p>
        <Genres genres={movie.genres}/>
        <b>Overview:</b>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieDescription;
