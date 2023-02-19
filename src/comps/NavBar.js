import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../pages/logo.jpg';

const NavBar = () => {
  return (
    <div className='navbar'>
      <nav>
          <div>
            <img className="logo-home" src={logo} alt="logo"/>
          </div>
          <ul>
              <div className='li_ele'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collage">Collage</Link></li>
              <li><Link to="/slider">Carousel</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              </div>
          </ul>
          <div className='li_but'>
          </div>
      </nav>
    </div>
  );
}

export default NavBar;