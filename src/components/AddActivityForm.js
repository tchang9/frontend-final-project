import React from 'react'
import {post, patch} from '../adapters'
import { connect } from 'react-redux'

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
        const activityId = this.props.match.params.activity
        const body = {...this.state, eventId: eventId}
        if (activityId){
            patch(`http://localhost:3000/activities/${activityId}`, body)
            .then( () => {
                this.props.history.push(`/profile/events/${eventId}/schedule`)
            })
        } else {
            post(`http://localhost:3000/activities`, body)
            .then( () => {
                this.props.history.push(`/profile/events/${eventId}/schedule`)
            })
        }
    }

    componentDidMount() {
        if (this.props.match.params.activity && Object.keys(this.props.activities).length !== 0) {
            const activityId = this.props.match.params.activity
            this.setState({
                startTime: this.props.activities[activityId].start_time,
                endTime: this.props.activities[activityId].end_time,
                date: this.props.activities[activityId].date, 
                name: this.props.activities[activityId].name,
                description: this.props.activities[activityId].description
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            Start Time:
            <br></br>
            <input 
                onChange={this.handleChange} type="text" 
                name="startTime" 
                value={this.state.startTime}
            />
            <br></br>
            End Time:
            <br></br>
            <input 
                onChange={this.handleChange} type="text" 
                name="endTime" 
                value={this.state.endTime}
            />
            <br></br>
            Date:
            <br></br>
            <input 
                onChange={this.handleChange}type="date" 
                name="date" 
                value={this.state.date}/>
            
            <br></br>
            Name of Activity:
            <br></br>
            <input 
                onChange={this.handleChange}type="text" 
                name="name" 
                value={this.state.name}/>
            <br></br>
            Description:
            <br></br>
            <input 
                onChange={this.handleChange}type="text" 
                name="description" 
                value={this.state.description}/>
            <button>Submit</button>
        </form> 
        )
    }
    
}

function mapStateToProps(state) {
    return {
        activities: state.activities
    }
}

export default connect(mapStateToProps)(AddActivityForm)
