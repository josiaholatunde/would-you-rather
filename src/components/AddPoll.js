import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleSavePollQuestion } from '../actions/shared'

class AddPoll extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
    }

    handleChange = ({target: { name, value}}) => this.setState({[name]: value})

    addPoll = e => {
        e.preventDefault()
        const { optionOne: optionOneText, optionTwo: optionTwoText } = this.state
        const { history } = this.props
        this.props.handleSavePollQuestion({ optionOneText, optionTwoText }, history)
    }

    isPollFormInValid = e => {
        return (!this.state.optionOne && this.state.optionOne.trim() === '') 
        || (!this.state.optionTwo && this.state.optionTwo.trim() === '')
    }

    render() {
        const { optionOne, optionTwo  } = this.state
        return (
            <div className='row'>
                <div className='col-lg-7 offset-lg-3'>
                    <div className ="card mt-5 text-center">
                        <div className='card-header'>
                            <h3>Create New Question!</h3>
                        </div>
                        <div className='card-body'>
                            <h3>Would you Rather...</h3>
                            <form onSubmit={this.addPoll} className='mt-3'>
                                <div className='form-group'>
                                    <input type='text' name='optionOne' value={optionOne} className='form-control' onChange={this.handleChange} />
                                </div>
                                <div className='form-group d-flex'>
                                    <hr style={{ width: '30%' }} />
                                    <span>OR</span>
                                    <hr style={{ width: '30%' }} />
                                </div>
                                <div className='form-group'>
                                <input type='text' name='optionTwo' value={optionTwo} className='form-control' onChange={this.handleChange} />
                                </div>
                                <div className='form-group'>
                                    <input type='submit' 
                                    disabled={this.isPollFormInValid()}
                                    className='btn btn-lg btn-block btn-danger' value='Submit' />
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
export default connect(mapStateToProps, {  handleSavePollQuestion })(
    withRouter(AddPoll)
)
