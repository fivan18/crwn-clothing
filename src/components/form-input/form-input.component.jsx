import React from 'react';

import PropTypes from 'prop-types';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    {// eslint-disable-next-line react/jsx-props-no-spreading
      <input className="form-input" onChange={handleChange} {...otherProps} />
    }

    {// eslint-disable-next-line jsx-a11y/label-has-associated-control
    label ? (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null
}
  </div>
);

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormInput;
