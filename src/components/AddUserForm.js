import React from 'react'
import {post} from '../adapters'
// import queryString from 'query-string'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router'

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
                if (!this.props.match.params.eventId) {
                    this.props.history.push('/profile')
                } else {
                    // const searchParams = queryString.parse(this.props.location.search)
                    // console.log(searchParams.redirect)
                    // post(`http://localhost:3000/${searchParams.redirect}`)
                    // .then(() => {
                    //     this.props.history.push(`/profile/events/`)
                    // })
                    const eventId = atob(this.props.match.params.eventId)
                    post(`http://localhost:3000/join-event/${eventId}`)
                    .then( () => {
                        this.props.history.push('/profile')
                    })
                }
            })
        } else {
            alert("passwords must be the same")
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
                        <Form.Group >
                            <Form.Label >First Name</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                name="firstName" 
                                type="text" 
                                placeholder="Enter First Name"
                                value={this.state.firstName} />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label >Last Name</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="text" 
                                name="lastName" 
                                value={this.state.lastName}
                                placeholder="Enter Last Name"
                            />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label >Email</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="text" 
                                name="email" 
                                value={this.state.email}
                                placeholder="Enter Email"
                            />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label >Password</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="password" 
                                name="password" 
                                value={this.state.password}
                                placeholder="Enter Password"
                            />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label >Confirm Password</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="password" 
                                name="confirmPassword" 
                                value={this.state.confirmPassword}
                                placeholder="Confirm Password"
                            />
                        </Form.Group>
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
