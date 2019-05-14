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

    render() {
        return (
            <>
                <h1>Project Title</h1>
                <p>Sign in </p>
                <form>
                    Email
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
                <button>Create Account</button>

            </>
        )
    }
}

export default Login