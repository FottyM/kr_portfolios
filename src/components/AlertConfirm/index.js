import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { confirmAlert } from 'react-confirm-alert'

export class AlertConfinrm extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['primary', 'success'])
  }

  popUp = () => {

  }

  render() {
    const { type } = this.props
    return (
      <button className={`btn btn-${type}`} onClick={() => this.popUp()}>{this.props.children} </button>
    )
  }
}
