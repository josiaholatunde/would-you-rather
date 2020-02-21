import React, { Fragment, Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/authedActions'


class Navbar extends Component {

     handleLogOut = e => {
         const { history } = this.props;
        this.props.logOutUser(history)
   }

    render() {
        const { loggedInUser } = this.props

        return (
           
                <nav className="navbar navbar-expand-lg navbar-light bg-danger text-white sticky-top" >
                <div className='container'>
                    <Link className="navbar-brand" to="/">
                        <i className='fa fa-poll'></i>
                        Would You Rather
                        </Link>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {loggedInUser && (
                            <ul className="navbar-nav mr-auto">
                                 <li className="nav-item">
                                    <Link className="nav-link" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/add'>New Question</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/leaderboard'>Leaderboard
                                    </Link>
                                </li>
                            </ul>
                        )}
                        <ul className='navbar-nav ml-auto'>
                            {loggedInUser ? (
                                <Fragment>
                                    <li className="nav-item d-flex align-items-center">
                                        Hello {loggedInUser.name}
                                        <div style={{ height: '2rem', width: '2rem' }} className='ml-2'>
                                            <img src={loggedInUser.avatarURL} className='rounded-circle img-fluid' alt='Logged in user avatar' />
                                        </div>
                                    </li>
                                    <li className="nav-item ml-3">
                                        <button  type='button' className='btn btn-outline-light' onClick={this.handleLogOut} >Logout</button>
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
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        loggedInUser: authedUser ? users[authedUser] && users[authedUser] : null,
    }
}

export default connect(mapStateToProps, { logOutUser })(
    withRouter(Navbar))
