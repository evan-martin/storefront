import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function CartIcon( {itemCount}) {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={itemCount} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
  });
  
  export default connect(mapStateToProps)(CartIcon);