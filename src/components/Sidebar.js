import React from 'react'
import { connect } from 'react-redux'

const Sidebar = ({events}) => {
    
    const renderEvents = () => {
        return events.map(event => {
            return(
                <div key={event.id}>
                    <button className="item">
                        {event.name}
                    </button>
                </div>
            )
        })
    }

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
        events: state.events
    }
}

export default connect(mapStateToProps)(Sidebar)