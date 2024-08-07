import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsFillGearFill } from 'react-icons/bs';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' />
      </div>
      <div className='header-left'>
        <div className='search-container'>
          <BsSearch className='search-icon' />
          <input type='text' placeholder='Search...' className='search-input' />
        </div>
      </div>
      <div className='header-right'>
        <BsFillEnvelopeFill className='icon' />
        <BsFillGearFill className='icon' />
        <BsFillBellFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  )
}

export default Header