import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={{ backgroundColor: '#e3f2fd;'}}>
           <div className='container'>
           <a className="navbar-brand" href="#">Would You Rather</a>
            <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >New Question</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Leaderboard</a>
                    </li>
                </ul>
                <ul className='navbar-nav nav-right'>
                    <li className="nav-item">
                        <a className="nav-link" >Hello Olatunde</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Logout</a>
                    </li>
                </ul>
            </div>
           </div>
        </nav>
    )
}

export default Navbar
