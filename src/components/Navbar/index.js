import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout } from '../../utils/logout'

const Navbar = ({ auth, history }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/dashboard">Project Kr</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/dashboard">Home </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/login"> Login </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/register"> Register </Link>
          </li>
          <li className="nav-item active">
            <button
              className='btn btn-outline-danger'
              onClick={() => logout(history.push)}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)