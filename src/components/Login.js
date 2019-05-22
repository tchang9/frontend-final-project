import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'

class Login extends React.Component{

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: "POST", 
            body: JSON.stringify(this.state),
            headers:{
              'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            if (response.message){
                alert(response.message)
            } else {
                this.props.login(response.user)
                localStorage.setItem("token", response.token)
                this.props.history.push('/profile')
            }
        })
    }
        
    handleClick = () => {
        this.props.history.push('/signup')
    }

    render() {
        return (
            <>
                <h1>Project Title</h1>
                <p>Sign in </p>
                <form onSubmit={this.handleSubmit} >
                    Email
                    <input 
                        onChange={this.handleChange} type="text" 
                        name="email" 
                        value={this.state.email}
                    />
                    Password:
                    <input 
                        onChange={this.handleChange}type="text" 
                        name="password" 
                        value={this.state.password}/>
                    <button>Submit</button>
                </form> 
                <button onClick={this.handleClick} >Create Account</button>

            </>
        )
    }
}

export default connect(null, { login })(Login)
