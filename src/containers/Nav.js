import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Nav} from 'react-bootstrap'

const Navbar = (props) => {

    const handleClick = (e) => {
        props.history.push(`/profile/events/${props.activeEventId}/${e.target.name}`)
    }

    return (
            <div>
            <Nav className="nav nav-tabs" fill variant="tabs" defaultActiveKey="/profile">
                <Nav.Item>
                    <Nav.Link name="topics" onClick={handleClick} eventKey="link-1">Topics</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link name="schedule" onClick={handleClick} eventKey="link-2">Schedule</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link name="participants" onClick={handleClick} eventKey="link-3">Participants</Nav.Link>
                </Nav.Item>
            </Nav>
            </div>
    )
}

function mapPropsToState(state) {
    return {
        activeEventId: state.activeEventId
    }
}

export default connect(mapPropsToState)(withRouter(Navbar))

