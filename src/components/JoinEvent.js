import React from 'react'
import {Button} from 'react-bootstrap'
import {post} from '../adapters'
import AddUserForm from './AddUserForm'
import Login from './Login'

class JoinEvent extends React.Component{

    state = {
        createAccountModal: false,
        loginModal: false,
        showButtons : false
    }

    handleJoinEvent = () => {
        const eventId = atob(this.props.match.params.eventId)
        post(`http://localhost:3000/join-event/${eventId}`)
        .then(response => {
            if (response.message) {
                this.props.history.push(`/profile/events/`)
            } else {
                // props.history.push(`/signup?redirect=join-event/${response.id}`)
                this.setState({
                    showButtons: true
                })
            }
        })
    }

    handleClick = (e) => {
        this.setState({
            [e.target.name]: true
        })
    }

    render() {
        let createAccountModalClose = () => this.setState({ createAccountModal: false });
        let loginModalClose = () => this.setState({ loginModal: false });
        return (
            <>
                <p>Join Event</p>
                <Button onClick={this.handleJoinEvent} variant="secondary">Join Event</Button>
                {this.state.showButtons ? 
                    <div>
                        <Button name="loginModal" onClick={this.handleClick} variant="secondary">Login</Button>
                        <Button name="createAccountModal" onClick={this.handleClick} variant="secondary">Create Account</Button>
                    </div>
                :
                null
                }
                {this.state.createAccountModal ? 
                    <AddUserForm 
                    show={this.state.createAccountModal}
                    onHide={createAccountModalClose}
                    />
                :
                null
                }
                {this.state.loginModal ? 
                    <Login 
                    show={this.state.loginModal}
                    onHide={loginModalClose}
                    />
                :
                null
                }
            </>
        )
    }
}

export default JoinEvent
