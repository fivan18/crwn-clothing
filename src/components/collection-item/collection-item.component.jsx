import React from 'react';

import PropTypes from 'prop-types';

import './collection-item.styles.scss';

const CollectionItem = ({
  id, name, price, imageUrl,
}) => (
  <div className="collection-item" ivancito={id}>
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

CollectionItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CollectionItem;
