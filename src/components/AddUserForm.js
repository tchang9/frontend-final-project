import React from 'react'
import {post} from '../adapters'
import queryString from 'query-string'

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
            .then(response => {
                localStorage.setItem("token", response.token)
                if (this.props.location.search === "") {
                    this.props.history.push('/add-event')
                } else {
                    const searchParams = queryString.parse(this.props.location.search)
                    console.log(searchParams.redirect)
                    post(`http://localhost:3000/${searchParams.redirect}`)
                    .then(() => {
                        this.props.history.push(`/profile/events/`)
                    })
                }
            })
        } else {
            alert("passwords must be the same")
        }
    }

    render() {
        console.log(this.props)
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
