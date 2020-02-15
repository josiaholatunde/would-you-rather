import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
export class Questions extends Component {
    state = {
        key: 'unanswered'
    }
    setCurrentTab = key => {
        this.setState({ key })
    }
    render() {
        const { key } = this.state
        return (
            <div className='mt-5'>
                <Tabs id='questions-tab' bsClass='text-black' activeKey={key} onSelect={this.setCurrentTab}>
                    <Tab eventKey='unanswered' title='Unanswered Questions' >
                        Yo
                </Tab>
                    <Tab eventKey='answered' title='Answered Questions' >
                        Ya
                </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Questions
