import React from 'react'
import { Link } from 'react-router-dom'

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">My Wallet!</h1>
      <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-4" />
      <p>It uses utility  for typography and spacing to space content out within the larger container.</p>
      <Link to='/login' className="btn btn-primary btn-lg" href="#" role="button"> Login </Link>
      <Link to='/register' className="btn btn-success btn-lg" href="#" role="button"> Register </Link>
    </div>
  )
}

export default Jumbotron