import React, { Component } from 'react'

export class SignIn extends Component {
    state = {
        userName: ''
    }
    render() {
        const { userName } = this.state
        return (
            <div className='row'>
                <div className='col-lg-7 offset-lg-3'>
                    <div class="card mt-5 text-center">
                        <div className='card-header'>
                            <h3>Welcome to the Would You Rather App!</h3>
                            <h6>Please sign in to continue!</h6>
                        </div>
                        <div className='card-body'>
                            <h3>Sign In</h3>
                            <form>
                                <div className='form-group'>
                                    <select name='userName' className='form-control' value={userName}>
                                        <option value=''>Select a user</option>
                                    </select>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
