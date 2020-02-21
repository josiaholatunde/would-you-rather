import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

 class Question extends Component {
    render() {
        const { question, questionAuthor } = this.props
        return (

            <div className='card'>
                <div className='card-header'>
                    { questionAuthor.name } asks :
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-3' style={{ borderRight: '1px solid black' }}>
                            <img src={ questionAuthor.avatarURL} alt='avatar' className='img-fluid rounded-circle' />
                        </div>
                        <div className='ml-5 d-flex flex-column justify-content-center align-items-center'>
                            <h4 className='pl-0 align-self-start'> Would you rather </h4>
                            <ol className='pl-3 w-100' type='A'>
                                <li className='my-3'>
                                    { question.optionOne.text }
                                </li>
                                <li className='my-3'>
                                    {  question.optionTwo.text }
                                </li>
                            </ol>

                            <Link to={`/questions/${question.id}`} className='mt-2 align-self-start'>
                                <button className='btn btn-md btn-danger pointer' type='button'>View Poll</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users, questions, authedUser }, { id }) => {
    const question = questions[id];
    const questionAuthor = users[question.author]
    return {
        question,
        questionAuthor
    }
}

export default connect(mapStateToProps)(Question)
