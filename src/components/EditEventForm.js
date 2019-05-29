import React from 'react'
import { connect } from 'react-redux'
import { editEvent, deleteEvent } from '../actions'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


class EditEventForm extends React.Component{
    state = {
        form: {
            name: '',
            startDate: '',
            endDate: '',
            location: ''
        },
        errors: {
            name: false,
            startDate: false,
            endDate: false,
            location: false
        }
    }

    handleChange = (e) => {
        this.setState({
            form: {...this.state.form, [e.target.name]: e.target.value}
        })
    }

    componentDidMount() {
        const eventId = this.props.eventid
        const event = this.props.events[eventId]
        try { 
            this.setState( prevState => {
                return {
                    form: {...prevState.form, name: event.name, startDate: event.start_date, endDate: event.end_date, location: event.location},
                }
            })
        }
        catch(error) {
            // this.props.history.push('/profile/events')
        }
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
        if (this.validator()) {
            const eventId = this.props.eventid
            const event = {...this.state.form, id:eventId}
            this.props.editEvent(event)
            this.props.onHide()
        }
    }

    handleDelete = () => {
        this.props.deleteEvent(this.props.eventid)
        this.props.onHide()
        this.props.deleteEventRedirect()
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
                        {this.state.errors.name
                        ?
                        <div className="form-group has-danger">
                            <label className="form-control-label">Event Name</label>
                            <input 
                                name="name" 
                                type="text" 
                                value={this.state.form.name} 
                                className="form-control is-invalid" 
                                onChange={this.handleChange} />
                            <div className="invalid-feedback">Please enter an Event Name!</div>
                        </div>
                        :
                        <Form.Group >
                            <Form.Label >Event Name</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                name="name" 
                                type="text" 
                                placeholder="Enter Event Name"
                                value={this.state.form.name} />
                        </Form.Group>
                        }

                        {this.state.errors.startDate
                        ?
                        <div className="form-group has-danger">
                            <label className="form-control-label">Start Date</label>
                            <input 
                                name="startDate" 
                                type="date" 
                                value={this.state.form.startDate} 
                                className="form-control is-invalid" 
                                onChange={this.handleChange} />
                            <div className="invalid-feedback">Please enter an Start Date!</div>
                        </div>
                        :
                        <Form.Group >
                            <Form.Label >Start Date</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="date" 
                                name="startDate" 
                                value={this.state.form.startDate}
                                placeholder="Enter Event Start Date"
                            />
                        </Form.Group>
                        }

                        {this.state.errors.endDate
                        ?
                        <div className="form-group has-danger">
                            <label className="form-control-label">End Date</label>
                            <input 
                                name="endDate" 
                                type="date" 
                                value={this.state.form.endDate} 
                                className="form-control is-invalid" 
                                onChange={this.handleChange} />
                            <div className="invalid-feedback">Please enter an End Date!</div>
                        </div>
                        :
                        <Form.Group >
                            <Form.Label >End Date</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="date" 
                                name="endDate" 
                                value={this.state.form.endDate}
                                placeholder="Enter Event End Date"
                            />
                        </Form.Group>
                        }

                        {this.state.errors.location
                        ?
                        <div className="form-group has-danger">
                            <label className="form-control-label">Location</label>
                            <input 
                                name="location" 
                                type="text" 
                                value={this.state.form.location} 
                                className="form-control is-invalid" 
                                onChange={this.handleChange} />
                            <div className="invalid-feedback">Please enter an Location!</div>
                        </div>
                        :
                        <Form.Group >
                            <Form.Label >Location</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="text" 
                                name="location" 
                                value={this.state.form.location}
                                placeholder="Enter Activity Location"
                            />
                        </Form.Group>
                        }
                        <button style={{display: 'none'}}>For Enter to Submit</button>

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
