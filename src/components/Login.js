import React from 'react'

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
        this.props.history.push('/profile')
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

export default Login
