import React from 'react'
import { connect } from 'react-redux'
import { editEvent, deleteEvent } from '../actions'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


class EditEventForm extends React.Component{
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

    componentDidMount() {
        const eventId = this.props.eventid
        const event = this.props.events[eventId]
        try { 
            this.setState({
            name: event.name,
            startDate: event.start_date,
            endDate: event.end_date,
            location: event.location,
            })
        }
        catch(error) {
            // this.props.history.push('/profile/events')
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const eventId = this.props.eventid
        const event = {...this.state, id:eventId}
        this.props.editEvent(event)
        this.props.onHide()
    }

    handleDelete = () => {
        this.props.deleteEvent(this.props.eventid)
        this.props.onHide()
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
                    Edit Event
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
                                type="text" 
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
                    <Button variant="outline-danger" onClick={this.handleDelete}>Delete</Button>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps, {editEvent, deleteEvent})(EditEventForm)
