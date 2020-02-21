import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleRegisterUser } from '../actions/authedActions'
import { redirectUserBackToHomeIfLoggedIn } from '../utils/api'

 class Register extends Component {
    state = {
        userName: '',
        fullName: ''
    }

    handleChange = ({target: { name, value}}) => this.setState({[name]: value})

    registerUser = e => {
        e.preventDefault()
        const {userName, fullName } = this.state
        const { history, handleRegisterUser } = this.props
        handleRegisterUser({ userName, fullName }, history)
    }

    componentDidMount() {
        const { history } = this.props
        redirectUserBackToHomeIfLoggedIn(history);
    }

    isRegisterationFormInvalid = e => {
        return (!this.state.userName && this.state.userName.trim() === '' ) || 
        (!this.state.fullName && this.state.fullName.trim() === '' )
    }

    render() {
        const { userName, fullName } = this.state
        return (
            <div className='row'>
                <div className='col-lg-7 offset-lg-3'>
                    <div className ="card mt-5">
                        <div className='card-header text-center'>
                            <h3>Welcome to the Would You Rather App!</h3>
                        </div>
                        <div className='card-body'>
                            <h3 className='text-center'>Register</h3>
                            <form onSubmit={this.registerUser}>
                                <div className='form-group'>
                                    <label htmlFor='userName'> Username </label>
                                    <input type='text' name='userName' value={userName} id='userName' className='form-control' 
                                    onChange={this.handleChange}
                                    placeholder='Enter your preferred username ?' />
                                </div>
                                <div className='form-group'>
                                <label htmlFor='fullName'> Full Name </label>
                                    <input type='text' name='fullName' value={fullName} id='fullName' className='form-control' 
                                    onChange={this.handleChange}
                                    placeholder='Enter your full name ?' />
                                </div>
                                <div className='form-group'>
                                    <input type='submit' 
                                    disabled={this.isRegisterationFormInvalid()}
                                    className='btn btn-lg btn-block btn-danger' value='Register' />
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null, {  handleRegisterUser })(
    withRouter(Register)
)
