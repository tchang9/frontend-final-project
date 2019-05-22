import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { selectEvent } from '../actions'

const Sidebar = (props) => {

    const renderEvents = () => {
        return Object.keys(props.events).map(id => {
            const event = props.events[id]
            return (
                <div onClick={() => handleClick(id)} key={id}>
                    <Link to={`/profile/events/${id}`}>
                        <button className="item">
                            {event.name}
                        </button>
                    </Link>
                </div>
            )
        })
    }

    const handleClick = (eventId) => {
        props.selectEvent(eventId)
    }

    console.log(props.events)

    return (
        <div>
            <div>
                <h3>NAME OF APP</h3>
            </div>
            <div>
                <h4>Events</h4>
            </div>
            {renderEvents()}
            <div>
            <Link to={`/profile/events/add`}>
                <button className="item">
                    Add New Event
                </button>
            </Link>

            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps, { selectEvent })(Sidebar)