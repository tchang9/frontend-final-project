import React from 'react'
import { connect } from 'react-redux'
import { editEvent } from '../actions'


class EditEventForm extends React.Component{
    state = {
        name: '',
        startDate: '',
        endDate: '',
        location: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        const eventId = this.props.match.params.event
        const event = this.props.events[eventId]
        try { 
            this.setState({
            name: event.name,
            startDate: event.start_date,
            endDate: event.end_date,
            location: event.location,
            })
        }
        catch(error) {
            this.props.history.push('/profile/events')
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const eventId = this.props.match.params.event
        const event = {...this.state, id:eventId}
        this.props.editEvent(event)
        // TODO: AFTER SETTING STATE, PUSH
        this.props.history.push('/profile/events')
    }

    render() {
        return (
            <>
                <h1>Edit Event</h1>
                <form onSubmit={this.handleSubmit}>
                    Name
                    <input 
                        onChange={this.handleChange} type="text" 
                        name="name" 
                        value={this.state.name}
                    />
                    Start Date:
                    <input 
                        onChange={this.handleChange}type="date" 
                        name="startDate" 
                        value={this.state.startDate}/>
                    End Date:
                    <input 
                        onChange={this.handleChange}type="date" 
                        name="endDate" 
                        value={this.state.endDate}/>
                    Location:
                    <input 
                        onChange={this.handleChange}type="text" 
                        name="location" 
                        value={this.state.location}/>
                    <button>Submit</button>
                </form> 
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps, {editEvent})(EditEventForm)