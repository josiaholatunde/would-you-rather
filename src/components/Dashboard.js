import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
    state = {
        key: 'unanswered'
    }
    setCurrentTab = key => {
        this.setState({ key })
    }

    render() {
        const { key } = this.state
        const { answeredQuestions, unansweredQuestions } = this.props
        return (
            <div className='mt-5'>
                <Tabs id='questions-tab' activeKey={key} onSelect={this.setCurrentTab}>
                    <Tab eventKey='unanswered' title='Unanswered Questions' >
                        {
                            unansweredQuestions && unansweredQuestions.map(question => (<Question id={question} key={question} />))
                        }
                    </Tab>
                    <Tab eventKey='answered' title='Answered Questions' >
                        {
                            answeredQuestions &&
                            (answeredQuestions.length === 0 ?
                                (<h4 className='text-center mt-5'>You have not answered any poll questions</h4>) : (
                                    answeredQuestions.map(question => (<Question id={question} key={question} />))

                                ))}
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
    const answeredQuestions = Object.keys(users[authedUser].answers)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    return {
        answeredQuestions,
        unansweredQuestions: Object.keys(questions).filter(question => !answeredQuestions.includes(question))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}
export default connect(mapStateToProps)(Dashboard)
