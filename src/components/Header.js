import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = (props) => {
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
            <button className="user">Tony Chang</button>
        </>
    )
}

function mapStateToProps(state) {
    return {
        event: state.events[state.activeEventId]
    }
}

export default connect(mapStateToProps)(Header)
