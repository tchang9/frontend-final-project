import React from 'react'
import {addEvent} from '../actions'
import {connect} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AddEventForm extends React.Component{
    state = {
        name: '',
        startDate: '',
        endDate: '',
        location: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addEvent(this.state)
        this.props.onHide()
    }

    render() {
        let {show, onHide} = this.props
        return (
            <>
                <Modal
                    show={show}
                    onHide={onHide}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Add Event
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Group >
                                <Form.Label >Event Name</Form.Label>
                                <Form.Control 
                                    onChange={this.handleChange} 
                                    name="name" 
                                    type="text" 
                                    placeholder="Enter Event Name"
                                    value={this.state.name} />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label >Start Date</Form.Label>
                                <Form.Control 
                                    onChange={this.handleChange} 
                                    type="date" 
                                    name="startDate" 
                                    value={this.state.startDate}
                                    placeholder="Enter Event Start Date"
                                />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label >End Date</Form.Label>
                                <Form.Control 
                                    onChange={this.handleChange} 
                                    type="date" 
                                    name="endDate" 
                                    value={this.state.endDate}
                                    placeholder="Enter Event End Date"
                                />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label >Location</Form.Label>
                                <Form.Control 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    name="location" 
                                    value={this.state.location}
                                    placeholder="Enter Activity Location"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default connect(null, {addEvent} )(AddEventForm)