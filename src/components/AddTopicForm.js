import React from 'react'
import {post} from '../adapters'

class AddTopicForm extends React.Component {

    state = {
        topicName: "",
        comment: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = {...this.state, id: this.props.match.params.event}
        post('http://localhost:3000/topics', data)
        .then(res => {
            const topicId = res.id
            this.props.history.push(`${topicId}`)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Topic Name
                <input 
                    onChange={this.handleChange} type="text" 
                    name="topicName" 
                    value={this.state.topicName}
                />
                Comment:
                <input 
                    onChange={this.handleChange}type="text" 
                    name="comment" 
                    value={this.state.comment}/>
                <button>Submit</button>
            </form> 
        )
    }
}

export default AddTopicForm
