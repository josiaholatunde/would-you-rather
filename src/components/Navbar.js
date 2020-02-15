import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../actions/usersActions'
const Navbar = ({ loggedInUser }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger text-white sticky-top" >
            <div className='container'>
                <Link className="navbar-brand" to="/">Would You Rather</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/question/add'>New Question</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/leaderboard'>Leaderboard
                        </Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav nav-right'>
                        { loggedInUser ? (
                            <Fragment>
                                <li className="nav-item d-flex align-items-center">
                                   Hello {loggedInUser.name}
                                   <div style={{ height: '2rem', width: '2rem'}} className='ml-2'>
                                   <img src={loggedInUser.avatarURL} className='img-rounded img-fluid'  />
                                   </div>
                                </li>
                                <li className="nav-item ml-3">
                                    <Link className="nav-link" to='/logout' >Logout</Link>
                                </li>
                            </Fragment>
                        ) : (
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="nav-link" to='/login' >Login</Link>
                                </li>
                            )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        loggedInUser: authedUser ? users[authedUser] && users[authedUser] : null
    }
}

export default connect(mapStateToProps)(Navbar)
