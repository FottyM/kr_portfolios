import React from 'react'
import { Link } from 'react-router-dom'


const Jumbotron = () => {
  return (
    <div className="container">
      <div className="jumbotron mt-3">
        <h1 className="display-4">My Wallet!</h1>
        <p className="lead">Manage your Kryptos</p>
        <hr className="my-4" />
        <Link to='/login' className="btn btn-primary btn-lg" href="#" role="button"> Login </Link> {'    '}
        <Link to='/register' className="btn btn-success btn-lg" href="#" role="button"> Register </Link>
      </div>
    </div>
  )
}

export default Jumbotron