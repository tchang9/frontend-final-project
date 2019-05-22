import React from 'react'
import {post} from '../adapters'

class AddActivityForm extends React.Component {

    state = {
        startTime: '',
        endTime: '',
        date: '', 
        name: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const eventId = this.props.match.params.event
        const body = {...this.state, eventId: eventId}
        post(`http://localhost:3000/activities`, body)
        .then( () => {
            this.props.history.push(`/profile/events/${eventId}/schedule`)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            Start Time:
            <br></br>
            <input 
                onChange={this.handleChange} type="text" 
                name="startTime" 
                value={this.state.topicName}
            />
            <br></br>
            End Time:
            <br></br>
            <input 
                onChange={this.handleChange} type="text" 
                name="endTime" 
                value={this.state.topicName}
            />
            <br></br>
            Date:
            <br></br>
            <input 
                onChange={this.handleChange}type="date" 
                name="date" 
                value={this.state.comment}/>
            
            <br></br>
            Name of Activity:
            <br></br>
            <input 
                onChange={this.handleChange}type="text" 
                name="name" 
                value={this.state.comment}/>
            <br></br>
            Description:
            <br></br>
            <input 
                onChange={this.handleChange}type="text" 
                name="description" 
                value={this.state.comment}/>
            <button>Submit</button>
        </form> 
        )
    }
    
}

export default AddActivityForm
