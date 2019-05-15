import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { setEvent } from '../actions'

const Sidebar = (props) => {
    
    const renderEvents = () => {
        return props.events.map(event => {
            return(
                <div onClick={() => handleClick(event.id)} key={event.id}>
                    <Link to={`/profile/events/${event.id}`}>
                        <button className="item">
                            {event.name}
                        </button>
                    </Link>
                </div>
            )
        })
    }

    const handleClick = (eventId) => {
        props.setEvent(eventId)
    }

    console.log(props.currentEvent)
    return (
        <div>
            <div>
                <h3>Title</h3>
            </div>
            <div>
                <h4>Events</h4>
            </div>
            {renderEvents()}
            <div>
                <button className="item">
                    Add New Event
                </button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        events: state.events,
        currentEvent: state.currentEvent
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEvent: (eventId) => {
            dispatch(setEvent(eventId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)