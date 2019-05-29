import React from 'react'
import {addEvent} from '../actions'
import {connect} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AddEventForm extends React.Component{
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
            this.props.addEvent(this.state.form)
            this.props.onHide()
        }
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