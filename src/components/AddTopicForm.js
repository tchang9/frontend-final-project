import React from 'react'

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

    render() {
        return (
            <form>
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