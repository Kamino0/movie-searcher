import React from 'react';
import { Link } from 'react-router-dom';

import { IMG_W154_URL } from '../config';

const Recommendation = ({
  movie
}) => {
  return(
  <Link to={`/movie${movie.id}`} className='recommendations__movie'>
    <img width='154' height='231' src={`${IMG_W154_URL}${movie.poster_path}`} alt={movie.original_title} />
    <b className='recommendations__title'>{movie.original_title}</b>
  </Link>
)}

export default Recommendation;
