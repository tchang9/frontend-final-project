import React from 'react'
import { connect } from 'react-redux'
import {DropdownButton, Dropdown} from 'react-bootstrap'
import {logout} from '../actions'
import { withRouter } from 'react-router'
import Button from 'react-bootstrap/Button'
import EditEventForm from './EditEventForm'
var moment = require('moment');

class Header extends React.Component {

    state = {
        editEventModal: false
    }

    handleClick = () => {
        localStorage.removeItem("token")
        this.props.logout()
        this.props.history.push('/login')
    }

    editEvent = () => {
        this.setState({
            editEventModal: true
        })
    }

    render () {
        let editModalClose = () => this.setState({ editEventModal: false });

        return (
            <>
                {this.props.event ? 
                <>
                    
                    <h1 className="eventName">{this.props.event.name}</h1>
                    <p className="eventDate">
                        {moment(this.props.event.start_date).format('MMMM Do')} - {moment(this.props.event.end_date).format('MMMM Do YYYY')}
                    </p>
                    <p className="eventLocation">{this.props.event.location}</p>
                    <Button 
                        variant="outline-info" 
                        size="sm"
                        onClick={this.editEvent} 
                        className="editEvent" 
                        variant="outline-info">
                    Edit Event
                    </Button>
                    <DropdownButton 
                        className="user" 
                        id="dropdown-item-button" 
                        title={this.props.currentUser.first_name ? this.props.currentUser.first_name : "loading"}
                        size="lg"
                        variant="outline-info"
                        >
                    <Dropdown.Item as="button">Profile</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.handleClick}>Logout</Dropdown.Item>
                    </DropdownButton>

 
                    {this.state.editEventModal ? 
                    <EditEventForm 
                        show={this.state.editEventModal}
                        onHide={editModalClose}
                        eventid={this.props.activeEventId}
                    />
                    :
                    null
                    }
                </>
                :
                <p> loading </p>
                }
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        event: state.events[state.activeEventId],
        currentUser: state.currentUser,
        activeEventId: state.activeEventId

    }
}

export default connect(mapStateToProps, {logout})(withRouter(Header))
