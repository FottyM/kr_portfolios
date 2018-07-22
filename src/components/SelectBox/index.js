import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

const SelectBox = ({ id, label, options, onChange, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select className="form-control" id={id} onChange={onChange} {...rest}>
        {
          !isEmpty(options) && options.map(
            (option, index) => <option key={index} value={option.key}>{option.value}</option>
          )
        }
      </select>
    </div>
  )
}

SelectBox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
}

export default SelectBox