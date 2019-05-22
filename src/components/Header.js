import React from 'react'
import { connect } from 'react-redux'

const Header = (props) => {
    return (
        <>
            {props.event ? 
            <div>
                <p className="eventName">{props.event.name}</p>
                <p className="eventDate">{props.event.start_date} - {props.event.end_date}</p>
                <p className="eventLocation">{props.event.location}</p>
            </div>
            :
            <p> loading </p>
            }
            <button className="editEvent">Edit Event</button>
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
