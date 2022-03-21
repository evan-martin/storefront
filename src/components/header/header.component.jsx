import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/' style={{ textDecoration: "none" }}>
      <h1 className='logo'>pants etc. </h1>
    </Link>
    <div className='menu' >
      <Link className='menu-item' style={{ textDecoration: "none" }} to='/checkout'>
        Cart
        <CartIcon />
      </Link>
    </div>

  </div>
);

const mapStateToProps = createStructuredSelector({
  
});

export default connect(mapStateToProps)(Header);
