import React from 'react'

class AddEventForm extends React.Component{
    state = {
        name: '',
        date: '',
        location: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <>
                <h1>Add Event</h1>
                <form>
                    Name
                    <input 
                        onChange={this.handleChange} type="text" 
                        name="name" 
                        value={this.state.name}
                    />
                    Date:
                    <input 
                        onChange={this.handleChange}type="text" 
                        name="date" 
                        value={this.state.date}/>
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

export default AddEventForm