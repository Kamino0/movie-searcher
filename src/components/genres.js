import React from 'react';

const Genres = ({
  genres
}) => (
  <div className='genres'>
    <b>Genres:</b> 
    {genres && genres.map((genre) => (
        <div className='genres__genre' key={genre.id}>{genre.name}</div>
      ))}
  </div>
)

export default Genres;
