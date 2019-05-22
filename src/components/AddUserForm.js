import React from 'react'
import {post} from '../adapters'

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

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.password === this.state.confirmPassword) {
            post('http://localhost:3000/users', this.state)
            .then(console.log)
            this.props.history.push('/add-event')
        } else {
            alert("passwords must be the same")
        }
    }

    render() {
        return (
            <>
                <h1>Create Your Account</h1>
                <form onSubmit={this.handleSubmit} >
                    First Name
                    <input 
                        onChange={this.handleChange} type="text" 
                        name="firstName" 
                        value={this.state.firstName}
                    />
                    Last Name:
                    <input 
                        onChange={this.handleChange}type="text" 
                        name="lastName" 
                        value={this.state.lastName}
                    />
                    Email:
                    <input 
                        onChange={this.handleChange} type="text" 
                        name="email" 
                        value={this.state.email}
                    />
                    Password:
                    <input 
                        onChange={this.handleChange}type="text" 
                        name="password" 
                        value={this.state.password}
                    />
                    Confirm Password:
                    <input 
                        onChange={this.handleChange}type="text" 
                        name="confirmPassword" 
                        value={this.state.confirmPassword}
                    />
                    <button>Next</button>
                </form> 
            </>
        )
    }
}

export default AddUserForm