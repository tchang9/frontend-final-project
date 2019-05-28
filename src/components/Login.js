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
                    Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group >
                            <Form.Label >Email</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                name="email" 
                                type="text" 
                                placeholder="Enter Email"
                                value={this.state.email} />
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
