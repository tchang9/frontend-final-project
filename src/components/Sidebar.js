import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { selectEvent } from '../actions'
import AddEventForm from './AddEventForm'

class Sidebar extends React.Component {

    state = {
        addEventModal: false
    }

    renderEvents = () => {
        return Object.keys(this.props.events).map(id => {
            const event = this.props.events[id]
            return (
                <div className="sidebarEvent"  key={id}>
                    <Link style={{ textDecoration: 'none', color: '#F5F0EF' }} to={`/profile/events/${id}`}>
                        <p onClick={() => this.handleClick(id)} className="sidebarEventName">
                            {event.name}
                        </p>
                    </Link>
                </div>
            )
        })
    }

    handleClick = (eventId) => {
        this.props.selectEvent(eventId)
    }

    addEventClick = () => {
        this.setState({
            addEventModal: true
        })
    }

    render() {
        let addModalClose = () => this.setState({ addEventModal: false });
        return (
            <>
                <div>
                    <p className="sidebarName">EVENTI</p>
                </div>
                <div className="sidebarEvents">
                    {this.renderEvents()}
                </div>
                <div className="sidebarAddEvent">
                    <button className="btn btn-primary" onClick={this.addEventClick} >
                        Add New Event
                    </button>
                </div>
                {this.state.addEventModal ? 
                    <AddEventForm 
                        show={this.state.addEventModal}
                        onHide={addModalClose}
                />
                :
                null
                }
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps, { selectEvent })(Sidebar)
