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
                <div onClick={() => this.handleClick(id)} key={id}>
                    <Link to={`/profile/events/${id}`}>
                        <button className="item">
                            {event.name}
                        </button>
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
            <div>
                <div>
                    <h3>NAME OF APP</h3>
                </div>
                <div>
                    <h4>Events</h4>
                </div>
                {this.renderEvents()}
                <div>
                    <button onClick={this.addEventClick} className="item">
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
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps, { selectEvent })(Sidebar)
