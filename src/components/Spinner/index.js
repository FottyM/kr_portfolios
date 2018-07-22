import React, { Fragment } from 'react'
import { FulfillingBouncingCircleSpinner } from 'react-epic-spinners'
import PropTypes from 'prop-types'

const Spinner = ({ loading, children }) => {
  return (
    <Fragment>
      {
        loading ?
          <div
            className="d-flex w-100 justify-content-center align-items-center flex-column"
            style={{ height: '50vh' }}>
            <FulfillingBouncingCircleSpinner color='rgb(209, 38, 49)' className='text-center' />
          </div>
          :
          children
      }
    </Fragment>
  )
}

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}
export default Spinner
