import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ id, type, name, value, onChange, label, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="form-control"
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value} />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
}

export default Input 