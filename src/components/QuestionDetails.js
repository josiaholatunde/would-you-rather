import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import VoteExistingPoll from './VoteExistingPoll'
import PollView from './PollView'
class QuestionDetails extends Component {

  


    render() {
        const { question, questionAuthor, answer,
            match: { params: { id } } } = this.props
        return (
            !question ? (<Redirect to='/page-not-found' />) : (
                <div className='card mt-5'>
                    <div className='card-header'>
                        {questionAuthor.name} asks :
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-3' style={{ borderRight: '1px solid black' }}>
                                <img src={questionAuthor.avatarURL} alt='avatar' className='img-fluid rounded-circle' />
                            </div>
                            <div className='ml-5 d-flex flex-column justify-content-center align-items-center'>
                                <h4> Would you rather </h4>
                                {answer ? (
                                    <PollView {...this.props} />
                                ) : (
                                        <VoteExistingPoll id={id} question={question} />
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }
}

const mapStateToProps = ({ users, questions, authedUser }, { match, history }) => {
    const { id } = match.params
    const question = questions[id];

    if (!question) {
        history.push('/page-not-found');
        return {
            question: null
        };
    }
    const questionAuthor = users[question.author]
    const answer = users[authedUser].answers[id];
    const optionOne = Number(question.optionOne.votes.length)
    const optionTwo = Number(question.optionTwo.votes.length)

    const totalVotes = Number(optionOne + optionTwo)

    return {
        question,
        questionAuthor,
        answer,
        optionOne,
        optionTwo,
        totalVotes,
        optionOnePercentage: (optionOne / totalVotes) * 100,
        optionTwoPercentage: (optionTwo / totalVotes) * 100
    }
}

export default connect(mapStateToProps)(QuestionDetails)
