import React from 'react'

class AddUserForm extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <>
                <h1>Create Your Account</h1>
                <form>
                    First Name
                    <input 
                        onChange={this.handleChange} type="text" 
                        name="email" 
                        value={this.state.email}
                    />
                    Comment:
                    <input 
                        onChange={this.handleChange}type="text" 
                        name="password" 
                        value={this.state.password}/>
                    <button>Submit</button>
                </form> 
            </>
        )
    }
}

export default AddUserForm