import React from 'react'
import {Button} from 'react-bootstrap'
import {post} from '../adapters'
import AddUserForm from './AddUserForm'

class JoinEvent extends React.Component{

    state = {
        createAccountModal: false
    }

    handleClick = () => {
        const eventId = atob(this.props.match.params.eventId)
        post(`http://localhost:3000/join-event/${eventId}`)
        .then(response => {
            if (response.message) {
                this.props.history.push(`/profile/events/`)
            } else {
                // props.history.push(`/signup?redirect=join-event/${response.id}`)
                this.setState({
                    createAccountModal: true
                })
            }
        })
    }

    render() {
        let createAccountModalClose = () => this.setState({ createAccountModal: false });
        console.log(this.props)
        return (
            <>
                <p>Join Event</p>
                <Button onClick={this.handleClick} variant="secondary">Join Event</Button>
                {this.state.createAccountModal ? 
                    <AddUserForm 
                    show={this.state.createAccountModal}
                    onHide={createAccountModalClose}
                    />
                :
                null
                }
            </>
        )
    }
}

export default JoinEvent
