import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router'
import {post} from '../adapters'

class Login extends React.Component{

    state = {
        form: {
            email: '',
            password: ''
        },
        errors: {
            email: false,
            password: false
        },
        backendError: ""
    }

    handleChange = (e) => {
        this.setState({
            form: {...this.state.form, [e.target.name]: e.target.value}
        })
    }

    validator = () => {
        let valid = true
        Object.entries(this.state.form).forEach(
            ([key, value]) => {
                if (!value) {
                    this.setState( prevState => {
                        return {
                            errors: {...prevState.errors, [key]: true}
                        }
                    })
                    valid = false
                } else {
                    this.setState( prevState => {
                        return {
                            errors: {...prevState.errors, [key]: false}
                        }
                    })
                }
            }
        )
        return valid
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            backendError: ""
        })

        if (this.validator()) {
            fetch('http://localhost:3000/login', {
                method: "POST", 
                body: JSON.stringify(this.state.form),
                headers:{
                  'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                if (response.message){
                    this.setState({
                        backendError: response.message
                    })
                } else {
                    this.props.login(response.user)
                    localStorage.setItem("token", response.token)
                    if (this.props.match.params.eventId) {
                        const eventId = atob(this.props.match.params.eventId)
                        post(`http://localhost:3000/join-event/${eventId}`)
                        .then( () => {
                            this.props.history.push('/profile')
                        })
                    } else {
                        this.props.history.push('/profile')
                    }
                }
            })
        }
    }

    render() {
        let {show, onHide} = this.props
        console.log(show)
        console.log(onHide)
        return (
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {this.state.backendError 
                    ? 
                    <> 
                        <div style={{color: "red"}}>{this.state.backendError}</div> 
                        <br/> 
                    </>
                    :
                    null
                    }

                    <Form onSubmit={this.handleSubmit}>
                        {this.state.errors.email
                        ?
                        <div className="form-group has-danger">
                            <label className="form-control-label">Email</label>
                            <input 
                                name="email" 
                                type="text" 
                                value={this.state.form.email} 
                                className="form-control is-invalid" 
                                onChange={this.handleChange} />
                            <div className="invalid-feedback">Please enter an Email!</div>
                        </div>
                        :
                        <Form.Group >
                            <Form.Label >Email</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                name="email" 
                                type="text" 
                                placeholder="Enter Email"
                                value={this.state.form.email} />
                        </Form.Group>
                        }

                        {this.state.errors.password
                        ?
                        <div className="form-group has-danger">
                            <label className="form-control-label">Password</label>
                            <input 
                                name="password" 
                                type="password" 
                                value={this.state.form.password} 
                                className="form-control is-invalid" 
                                onChange={this.handleChange} />
                            <div className="invalid-feedback">Please enter a Password!</div>
                        </div>
                        :
                        <Form.Group >
                            <Form.Label >Password</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="password" 
                                name="password" 
                                value={this.state.form.password}
                                placeholder="Enter Password"
                            />
                        </Form.Group>
                        }
                        <button style={{display: 'none'}}>For Enter to Submit</button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Log in
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default connect(null, { login })(withRouter(Login))
