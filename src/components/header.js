import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='main-header'>
      <div className='main-header__container'>
        <Link className='main-header__link' to='/'>Home</Link>
        <Link className='main-header__link' to='/about'>About</Link>
      </div>
    </header>
  )
}

export default Header;
