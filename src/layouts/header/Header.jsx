import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/Logo.svg';
import menuIcon from '../../assets/images/menu.svg';

const navRoutes = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'Product' },
  { id: 3, name: 'Team' },
  { id: 4, name: 'Blog' },
  { id: 5, name: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header id='header'>
      <nav className='container'>
        <ul>
          <li>
            <img
              src={logo}
              alt='logo'
            />
          </li>
          <div className='desktop-menubar'>
            <div className='menu-container'>
              <div className='nav-item'>
                {navRoutes.map((route) => (
                  <li key={route.id}>{route?.name}</li>
                ))}
              </div>
              <li className='signup-button'> Sign Up</li>
            </div>
          </div>
          <button
            className='responsive-menubar-button'
            type='button'
            onClick={() => setOpen(!open)}
          >
            <img
              height='16'
              src={menuIcon}
              alt=''
            />
          </button>
        </ul>

        {open && (
          <div className='responsive-navbar'>
            {navRoutes.map((route) => (
              <li key={route.id}>{route?.name}</li>
            ))}
            <li className='signup-button'> Sign Up</li>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
