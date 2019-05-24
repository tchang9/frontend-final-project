import React from 'react'
import { connect } from 'react-redux'
import {DropdownButton, Dropdown} from 'react-bootstrap'
import {logout} from '../actions'
import { withRouter } from 'react-router'
import Button from 'react-bootstrap/Button'
import EditEventForm from './EditEventForm'

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
                    <p className="eventName">{this.props.event.name}</p>
                    <p className="eventDate">{this.props.event.start_date} - {this.props.event.end_date}</p>
                    <p className="eventLocation">{this.props.event.location}</p>
                    <Button 
                        onClick={this.editEvent} className="editEvent" 
                        variant="outline-info">
                        Edit Event
                    </Button>
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
                <DropdownButton className="user" id="dropdown-item-button" title={this.props.currentUser.first_name ? this.props.currentUser.first_name : "loading"}>
                    <Dropdown.Item as="button">Profile</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={this.handleClick}>Logout</Dropdown.Item>
                </DropdownButton>
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
