import React, { Component } from 'react'
import { connect } from 'react-redux'


class Leaderboard extends Component {

    render() {
        const { users } = this.props
        return (
            <div className='card mt-5' >
                <div className='card-header'>
                    <h3 className='text-center display-4'>Leaderboard!</h3>
                </div>
                <div className='card-body'>
                    {users ? users.map(user => (
                        <div className='card mt-3' key={user.id}>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-lg-3' style={{ borderRight: '1px solid black' }}>
                                        <img src={user.avatarURL} alt='avatar' className='img-fluid rounded-circle' />
                                    </div>
                                    <div className='col-lg-5 d-flex flex-column align-items-center justify-content-center' style={{ borderRight: '1px solid black' }} >
                                        <h4 className='text-left'>  {user.name} </h4>
                                        <div className='d-flex justify-content-between my-3 w-100'>
                                            <span> Answered Questions</span>
                                            <span> {Object.keys(user.answers).length} </span>
                                        </div>
                                        <div className='d-flex justify-content-between my-3 w-100'>
                                            <span> Created Questions</span>
                                            <span> {user.questions.length} </span>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 d-flex align-items-center justify-content-center' >
                                        <div className='card text-center'>
                                            <div className='card-header'>Score</div>
                                            <div className='card-body d-flex justify-content-center'>
                                                <div className='bg-danger rounded-circle d-flex justify-content-center align-items-center' style={{ width: '4rem', height: '4rem', color: '#fff' }}>
                                                    {user.score}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (<div>Loading...</div>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    console.log('Uio', users)
    const usersArray = Object.values(users).map(user => {
        const score = Object.keys(user.answers).length + user.questions.length
        return { ...user, score }
    })

    usersArray.sort((a, b) => (b.score - a.score))
    console.log('Uiop', usersArray)
    return {
        users: usersArray
    }
}
export default connect(mapStateToProps)(Leaderboard)
