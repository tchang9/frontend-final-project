import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = (props) => {
    return (
        <>
            <p className="topic"><Link to={`/profile/events/${props.currentEvent}/topics`}>Topic</Link></p>
            <p className="schedule"><Link to='/profile/event1/schedule'>Schedule</Link></p>
            <p className="attendees">Attendees</p>
        </>
    )
}

function mapPropsToState(state) {
    return {
        currentEvent: state.currentEvent
    }
}

export default connect(mapPropsToState)(Nav)
