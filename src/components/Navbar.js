import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
                    <Link className="nav-item d-flex align-items-center">
                        Hello Olatunde
                    </Link>
                    <li className="nav-item ml-3">
                        <Link className="nav-link" >Logout</Link>
                    </li>
                </ul>
            </div>
           </div>
        </nav>
    )
}

export default Navbar
