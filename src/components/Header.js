import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {DropdownButton, Dropdown} from 'react-bootstrap'
import {logout} from '../actions'
import { withRouter } from 'react-router'

const Header = (props) => {

    const handleClick = () => {
        localStorage.removeItem("token")
        props.logout()
        props.history.push('/login')
    }

    return (
        <>
            {props.event ? 
            <>
                <p className="eventName">{props.event.name}</p>
                <p className="eventDate">{props.event.start_date} - {props.event.end_date}</p>
                <p className="eventLocation">{props.event.location}</p>
                <Link to={`/profile/events/edit/${props.event.id}`} >
                    <button className="editEvent">Edit Event</button>
                </Link>
            </>
            :
            <p> loading </p>
            }
            <DropdownButton className="user" id="dropdown-item-button" title={props.currentUser.first_name ? props.currentUser.first_name : "loading"}>
                <Dropdown.Item as="button">Profile</Dropdown.Item>
                <Dropdown.Item as="button" onClick={handleClick}>Logout</Dropdown.Item>
            </DropdownButton>
        </>
    )
}

function mapStateToProps(state) {
    return {
        event: state.events[state.activeEventId],
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {logout})(withRouter(Header))
