import React from 'react'
import {addEvent} from '../actions'
import {connect} from 'react-redux'

class AddEventForm extends React.Component{
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

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addEvent(this.state)
        this.props.history.push('/profile/events')
    }

    render() {
        return (
            <>
                <h1>Add Event</h1>
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
                <button>Next</button>

            </>
        )
    }
}

export default connect(null, {addEvent} )(AddEventForm)