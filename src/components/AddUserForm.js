import React from 'react'
import {post} from '../adapters'
// import queryString from 'query-string'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router'

class AddUserForm extends React.Component{
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        errors: {
            firstName: false,
            lastName: false,
            email: false,
            password: false,
            confirmPassword: false
        },
        matchingPassword: true,
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
            matchingPassword: true,
            backendError: ""
        })
        if (this.validator()) {
            if (this.state.form.password === this.state.form.confirmPassword) {
                post('https://eventii.herokuapp.com/users', this.state.form)
                .then(response => {
                    if (response.errors) {
                        this.setState({
                            backendError: response.errors[0]
                        })
                    } else {
                        localStorage.setItem("token", response.token)
                        if (!this.props.match.params.eventId) {
                            this.props.history.push('/profile')
                        } else {
                            const eventId = atob(this.props.match.params.eventId)
                            post(`https://eventii.herokuapp.com/join-event/${eventId}`)
                            .then( () => {
                                this.props.history.push('/profile')
                            })
                        }
                    }
                })
            } else {
                this.setState({
                    matchingPassword: false
                })
            }
        } 
    }

    render() {
        let {show, onHide} = this.props
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
                        Create Account
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit} >

                        {this.state.backendError 
                        ? 
                        <> 
                            <div style={{color: "red"}}>{this.state.backendError}</div> 
                            <br/> 
                        </>
                        :
                        null
                        }

                        {this.state.errors.firstName
                        ?
                        <div className="form-group has-danger">
                            <label className="form-control-label">First Name</label>
                            <input 
                                name="firstName" 
                                type="text" 
                                value={this.state.form.firstName} 
                                className="form-control is-invalid" 
                                onChange={this.handleChange} />
                            <div className="invalid-feedback">Please enter a First Name!</div>
                        </div>
                        :
                        <Form.Group >
                            <Form.Label >First Name</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                name="firstName" 
                                type="text" 
                                placeholder="Enter First Name"
                                value={this.state.form.firstName} />
                        </Form.Group>
                        }

                        {this.state.errors.lastName
                        ?
                        <div className="form-group has-danger">
                            <label className="form-control-label">Last Name</label>
                            <input 
                                name="lastName" 
                                type="text" 
                                value={this.state.form.lastName} 
                                className="form-control is-invalid" 
                                onChange={this.handleChange} />
                            <div className="invalid-feedback">Please enter a Last Name!</div>
                        </div>
                        :
                        <Form.Group >
                            <Form.Label >Last Name</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="text" 
                                name="lastName" 
                                value={this.state.form.lastName}
                                placeholder="Enter Last Name"
                            />
                        </Form.Group>
                        }

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
                                type="text" 
                                name="email" 
                                value={this.state.form.email}
                                placeholder="Enter Email"
                            />
                        </Form.Group>
                        }
                        
                        {this.state.matchingPassword 
                        ? 
                        null 
                        : 
                        <> 
                            <div style={{color: "red"}}> Please enter matching passwords! </div> 
                            <br/> 
                        </>
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

                        {this.state.errors.confirmPassword
                        ?
                        <div className="form-group has-danger">
                            <label className="form-control-label">Confirm Password</label>
                            <input 
                                name="confirmPassword" 
                                type="password" 
                                value={this.state.form.confirmPassword} 
                                className="form-control is-invalid" 
                                onChange={this.handleChange} />
                            <div className="invalid-feedback">Please enter a Password!</div>
                        </div>
                        :
                        <Form.Group >
                            <Form.Label >Confirm Password</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="password" 
                                name="confirmPassword" 
                                value={this.state.form.confirmPassword}
                                placeholder="Confirm Password"
                            />
                        </Form.Group>
                        }
                        <button style={{display: 'none'}}>For Enter to Submit</button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Create Account
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default withRouter(AddUserForm)
