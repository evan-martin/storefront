import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <h1 className='logo'> Storefront </h1>
    </Link>
    <div className='options'>
      <Link className='option' to='/'>
        HOME
      </Link>
      <Link className='option' to='/about'>
        ABOUT
      </Link>

      <Link className='option' to='/checkout'>
        <CartIcon />
      </Link>


    </div>

  </div>
);

const mapStateToProps = createStructuredSelector({
  
});

export default connect(mapStateToProps)(Header);
