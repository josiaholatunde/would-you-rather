import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSavePollAnswer } from '../actions/shared'

class VoteExistingPoll extends Component {

    state = {
        answer: ''
    }

    handleChange = ({ target: { value } }) => this.setState({ answer: value })

    handleSubmit = e => {
        e.preventDefault();
        const { id, handleSavePollAnswer } = this.props
        const { answer } = this.state
        handleSavePollAnswer({ qid: id, answer })
    }

    render() {
        const { answer } = this.state
        const { question } = this.props
        return (
            <form className='mt-3' onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <input type='radio' name='answer' id='optionOne' value='optionOne' checked={ answer === 'optionOne' } onChange={this.handleChange} />
                    <label htmlFor='optionOne' className='ml-3 pointer'>  {question.optionOne.text} </label>
                </div>
                <div className='form-group'>
                    <input type='radio' name='answer' id='optionTwo' value='optionTwo' checked={ answer === 'optionTwo' }  onChange={this.handleChange} />
                    <label htmlFor='optionTwo' className='ml-3 pointer'>  {question.optionTwo.text} </label>
                </div>
                <div className='form-group'>
                    <input type='submit' name='submit' value='Vote' disabled={!answer.trim()} className='btn btn-md btn-danger pointer' />
                </div>
            </form>
        )
    }
}


export default connect(null, { handleSavePollAnswer })(VoteExistingPoll)
