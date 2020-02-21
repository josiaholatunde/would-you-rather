import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { handleLoginUser } from '../actions/authedActions'

export class SignIn extends Component {
    state = {
        userName: ''
    }

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

    loginUser = e => {
        e.preventDefault()
        const { userName } = this.state
        const { history, location } = this.props
        this.props.handleLoginUser(userName, { history, location })
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.props.history.push('/');
        }
    }

        isLoginFormInvalid = e => {
            return !this.state.userName && this.state.userName.trim() === ''
        }

        render() {
            const { userName } = this.state
            const { users } = this.props
            return (
                <div className='row'>
                    <div className='col-lg-7 offset-lg-3'>
                        <div className="card mt-5 text-center">
                            <div className='card-header'>
                                <h3>Welcome to the Would You Rather App!</h3>
                                <h6>Please sign in to continue!</h6>
                            </div>
                            <div className='card-body'>
                                <h3>Sign In</h3>
                                <form onSubmit={this.loginUser}>
                                    <div className='form-group'>
                                        <select name='userName' className='form-control' value={userName} onChange={this.handleChange}>
                                            <option value=''>Select a user</option>
                                            {
                                                users.map(user => (<option value={user.id} key={user.id}> {user.name} </option>))
                                            }
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <input type='submit'
                                            disabled={this.isLoginFormInvalid()}
                                            className='btn btn-lg btn-block btn-danger' value='Sign in' />
                                    </div>
                                    <p>Are you a new user ?
                                   <Link to='/register'>
                                            <span className='text-danger'> Create new account</span>
                                        </Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const mapStateToProps = state => {
        const users = state.users
        return {
            users: Object.values(users)
        }
    }
    export default connect(mapStateToProps, { handleLoginUser })(
        withRouter(SignIn)
    )
