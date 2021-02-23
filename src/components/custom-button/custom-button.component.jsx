import React from 'react';

import PropTypes from 'prop-types';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading, react/button-has-type
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.func.isRequired,
  isGoogleSignIn: PropTypes.bool.isRequired,
};

export default CustomButton;
