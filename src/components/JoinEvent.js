import React from 'react'
import {Button} from 'react-bootstrap'
import {post, get} from '../adapters'
import AddUserForm from './AddUserForm'
import Login from './Login'
var moment = require('moment');

// import { get } from 'http';

class JoinEvent extends React.Component{

    state = {
        createAccountModal: false,
        loginModal: false,
        showButtons : false,
        error: false,
        event: {}
    }

    handleJoinEvent = () => {
        const eventId = atob(this.props.match.params.eventId)
        post(`http://localhost:3000/join-event/${eventId}`)
        .then(response => {
            if (response.message) {
                this.props.history.push(`/profile/events/`)
            } else {
                this.setState({
                    showButtons: true
                })
            }
        })
    }

    componentDidMount() {
        try {
            const eventId = atob(this.props.match.params.eventId)
            get(`http://localhost:3000/events/${eventId}`)
            .then(event => {
                this.setState({
                    event: event
                })
            })
        }
        catch(error) {
            this.setState({
                error: true
            })
        }
        
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

            <div className="join-event">
                <div className="joinEventName">
                    {this.state.error 
                    ? 
                    <h2>You Shouldn't Be Here</h2> 
                    : 
                    <>
                        <h2>{this.state.event.name}</h2>
                        <h4>{moment(this.state.event.start_date).format('MMMM Do')} - {moment(this.state.event.end_date).format('MMMM Do YYYY')}</h4>
                        {this.state.showButtons ? null :
                        <Button onClick={this.handleJoinEvent} variant="secondary">Join Event</Button>}
                    </>
                    }
                </div>
                <div className="joinButtons">
                    {this.state.showButtons ? 
                        <div>
                            <Button 
                                name="loginModal" 
                                onClick={this.handleClick} variant="secondary"
                                style={{marginRight: "1em"}}
                            >
                                Login
                            </Button>
                            <Button style={{marginLeft: "1em"}} name="createAccountModal" onClick={this.handleClick} variant="secondary">Create Account</Button>
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
                </div>
            </div>

        )
    }
}

export default JoinEvent
