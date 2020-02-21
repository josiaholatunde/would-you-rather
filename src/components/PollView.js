import React from 'react'

export default function PollView({ optionOnePercentage, question, answer,
    optionOne, optionTwo, totalVotes, optionTwoPercentage }) {
    return (
        <ol type='A'>
            <li className='my-3'>
                {question.optionOne.text} {answer === 'optionOne' && (<span>
                    - your answer
                                </span>)}
                <div className='progress'>
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${optionOnePercentage}%` }} >
                    </div>
                </div>
                <div>  {optionOne} out of {totalVotes}  {totalVotes === 1 ? 'vote' : 'votes'} </div>
            </li>
            <li className='my-3'>
                {question.optionTwo.text} {answer === 'optionTwo' && (<span>
                    - your answer
                                </span>)}
                <div className='progress'>
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${optionTwoPercentage}%` }} >

                    </div>
                </div>
                <div>  {optionTwo} out of {totalVotes}  {totalVotes === 1 ? 'vote' : 'votes'} </div>
            </li>
        </ol>
    )
}
