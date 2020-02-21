import React from 'react'
import {  Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { showNotification } from '../utils/showNotification'

const PrivateRoute = ({ authedUser, component: Component, ...rest}) => {

    if (!authedUser) {
        showNotification('danger', 'You are not authorized to access this route')
    }
    return (
        <Route {...rest} render={props => {
           return !!authedUser ? (
                <Component { ...props}  />
            ) : (
                <Redirect to={{
                    pathname: '/login', state: props.location
                }} />  
            )
        }}/>
    )
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser
})
export default connect(mapStateToProps)(PrivateRoute)
