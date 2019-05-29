import React from 'react'
import { connect } from 'react-redux'
import {DropdownButton, Dropdown} from 'react-bootstrap'
import {logout, selectEvent} from '../actions'
import { withRouter } from 'react-router'
import EditEventForm from './EditEventForm'
var moment = require('moment');

class Header extends React.Component {

    state = {
        editEventModal: false
    }

    handleClick = () => {
        localStorage.removeItem("token")
        this.props.logout()
        this.props.history.push('/welcome')
    }

    editEvent = () => {
        this.setState({
            editEventModal: true
        })
    }

    deleteEventRedirect = (eventId) => {
        this.props.history.push('/profile/events')
        if (Object.keys(this.props.events)[0] === eventId) {
            this.props.selectEvent(Object.keys(this.props.events)[1])
        } else {
            this.props.selectEvent(Object.keys(this.props.events)[0])
        }
    }

    render () {
        let editModalClose = () => this.setState({ editEventModal: false });

        return (
            <>
                {this.props.event ? 
                <>
                    <div className="eventDetails">
                        <h1 className="eventName">{this.props.event.name}</h1>
                        <p className="eventDate">
                            {moment(this.props.event.start_date).format('MMMM Do')} - {moment(this.props.event.end_date).format('MMMM Do YYYY')}
                        </p>
                        <p className="eventLocation">{this.props.event.location}</p>
                        <button onClick={this.editEvent} type="button" className="btn btn-primary editEvent btn-sm">Edit Event</button>
                    </div>

                    <div className="headerButtons">
                        <DropdownButton 
                            className="user" 
                            id="dropdown-item-button" 
                            title={this.props.currentUser.first_name ? this.props.currentUser.first_name : "loading"}
                            size="lg"
                            variant="btn-primary"
                            >
                        <Dropdown.Item as="button" onClick={this.handleClick}>Logout</Dropdown.Item>
                        </DropdownButton>
                    </div>

 
                    {this.state.editEventModal ? 
                    <EditEventForm 
                        show={this.state.editEventModal}
                        onHide={editModalClose}
                        eventid={this.props.activeEventId}
                        deleteEventRedirect={this.deleteEventRedirect}
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
        activeEventId: state.activeEventId,
        events: state.events
    }
}

export default connect(mapStateToProps, {logout, selectEvent})(withRouter(Header))
