import React, { useState } from 'react';
import { BsFillHouseFill, BsFillFileTextFill, BsFillGearFill, BsFillGrid3X3GapFill, BsFillPeopleFill, BsFillPassFill } from 'react-icons/bs';
import './Sidebar.css';

function Sidebar() {
    const [active, setActive] = useState('home');

    return (
      <aside className='sidebar'>
        <div className='logo'>
          <BsFillGrid3X3GapFill className='icon' />
        </div>
        <div 
          className={`sidebar-icon ${active === 'home' ? 'active' : ''}`} 
          onClick={() => setActive('home')}
        >
          <BsFillHouseFill className='icon' />
        </div>
        <div 
          className={`sidebar-icon ${active === 'reports' ? 'active' : ''}`} 
          onClick={() => setActive('reports')}
        >
          <BsFillFileTextFill className='icon' />
        </div>
        <div 
          className={`sidebar-icon ${active === 'people' ? 'active' : ''}`} 
          onClick={() => setActive('settings')}
        >
          <BsFillPeopleFill className='icon' />
        </div>
        <div 
          className={`sidebar-icon ${active === 'pass' ? 'active' : ''}`} 
          onClick={() => setActive('settings')}
        >
          <BsFillPassFill className='icon' />
        </div>
        <div 
          className={`sidebar-icon ${active === 'settings' ? 'active' : ''}`} 
          onClick={() => setActive('settings')}
        >
          <BsFillGearFill className='icon' />
        </div>
      </aside>
    );
  }

export default Sidebar