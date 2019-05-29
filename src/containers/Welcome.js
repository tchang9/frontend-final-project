import React from 'react'
import Login from '../components/Login'
import AddUserForm from '../components/AddUserForm'

class Welcome extends React.Component {

    state = {
        loginModal: false,
        createAccountModal: false
    }

    handleClick = (e) => {
        this.setState({
            [e.target.name] : true
        })
    }

    render() {
        let loginModalClose = () => this.setState({ loginModal: false });
        let createAccountModalClose = () => this.setState({ createAccountModal: false });
        return (
            <div className="welcome">
                <h2 className="">Eventi</h2>
                <button onClick={this.handleClick} name="createAccountModal" type="button" className="btn btn-secondary welcome-create">Create Account</button>
                <button onClick={this.handleClick} name="loginModal" type="button" className="btn btn-secondary welcome-login">Login</button>
                {this.state.loginModal ? 
                    <Login
                        show={this.state.loginModal}
                        onHide={loginModalClose}
                    />
                :
                null
                }
                {this.state.createAccountModal ? 
                    <AddUserForm 
                    show={this.state.createAccountModal}
                    onHide={createAccountModalClose}
                    />
                :
                null
                }
            </div>
        )
    }
}

export default Welcome
