import React from 'react';

import PropTypes from 'prop-types';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={`${inverted ? 'inverted' : ''}
  ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
  // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.func.isRequired,
  isGoogleSignIn: PropTypes.bool.isRequired,
  inverted: PropTypes.string,
};

CustomButton.defaultProps = {
  inverted: undefined,
};

export default CustomButton;
