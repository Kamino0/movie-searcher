import React from 'react';

const GenreFilter = ({genreList, editGenre}) => {

  const handleClick = (e) => {
    editGenre(e.target.value)
  }

  return (
    <div className='genre-filter'>
      <b className='genre-filter__title'>Genres</b>
      <ul>
        { genreList.map(genre => (
          <li key={genre.id}>
            <input type='checkbox' name='genre' checked={genre.active} onChange={handleClick} value={genre.name} id={`genre-filter__${genre.name}`}/>
            <label htmlFor={`genre-filter__${genre.name}`}>{genre.name}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GenreFilter;
