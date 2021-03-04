import React from 'react';

import PropTypes from 'prop-types';

import './cart-item.styles.scss';

const CartItem = ({
  item: {
    imageUrl, price, name, quantity,
  },
}) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity}
        {' '}
        x $
        {price}
      </span>
    </div>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
