import React from 'react';

import PropTypes from 'prop-types';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem: {
    name, imageUrl, price, quantity,
  },
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CheckoutItem;
