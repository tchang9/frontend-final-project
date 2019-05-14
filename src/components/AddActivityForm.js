import React from 'react'

class  AddActivityForm extends React.Component {

    state = {
        time: '',
        date: '', 
        name: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <form>
            Time:
            <input 
                onChange={this.handleChange} type="text" 
                name="time" 
                value={this.state.topicName}
            />
            Date:
            <input 
                onChange={this.handleChange}type="text" 
                name="date" 
                value={this.state.comment}/>
            Name of Activity:
            <input 
                onChange={this.handleChange}type="text" 
                name="name" 
                value={this.state.comment}/>
            Description:
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
