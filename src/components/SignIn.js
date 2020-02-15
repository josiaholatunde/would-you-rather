import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleGetUsers, handleLoginUser } from '../actions/usersActions'
export class SignIn extends Component {
    state = {
        userName: ''
    }

    handleChange = ({target: { name, value}}) => this.setState({[name]: value})

    loginUser = e => {
        e.preventDefault()
        const {userName } = this.state
        const { history } = this.props
        this.props.handleLoginUser(userName, history)
    }

    isLoginFormInvalid = e => {
        return !this.state.userName && this.state.userName.trim() === '' 
    }

    componentDidMount() {
        this.props.handleGetUsers()
    }
    render() {
        const { userName } = this.state
        const { users } = this.props
        return (
            <div className='row'>
                <div className='col-lg-7 offset-lg-3'>
                    <div className ="card mt-5 text-center">
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
                                            users.map(user => (<option value={user.id} key={user.id}> { user.name } </option>))
                                        }
                                    </select>

                                </div>
                                <div className='form-group'>
                                    <input type='submit' 
                                    disabled={this.isLoginFormInvalid()}
                                    className='btn btn-lg btn-block btn-danger' value='Sign in' />
                                </div>
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
export default connect(mapStateToProps, { handleGetUsers, handleLoginUser })(
    withRouter(SignIn)
)
