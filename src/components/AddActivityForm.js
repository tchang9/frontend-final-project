import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { post } from '../adapters'
import {addactivity} from '../actions'
import {connect} from 'react-redux'

class AddActivityForm extends React.Component {

    state = {
        startTime: '',
        endTime: '',
        date: '', 
        name: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const body = {...this.state, eventId: this.props.eventid}
        
        post(`http://localhost:3000/activities`, body)
        .then( (response) => {
            this.props.onHide()
            this.props.addactivity(response)
        })
    }

    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Activity
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit} >
                <Form.Group >
                    <Form.Label >Activity Name</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        name="name" 
                        type="text" 
                        placeholder="Enter Activity Name"
                        value={this.state.name} />
                </Form.Group>

                <Form.Group >
                    <Form.Label >Date</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        type="date" 
                        name="date" 
                        value={this.state.date}
                        placeholder="Enter Activity Date"
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label >Start Time</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        type="text" 
                        name="startTime" 
                        value={this.state.startTime}
                        placeholder="Enter Activity Start Time"
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label >End Time</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        type="text" 
                        name="endTime" 
                        value={this.state.endTime}
                        placeholder="Enter Activity End Time"
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label >Description</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        type="textarea" 
                        name="description" 
                        value={this.state.description}
                        placeholder="Enter Activity description"
                    />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.props.onHide}>Close</Button> */}
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    Submit
            </Button>
          </Modal.Footer>
        </Modal>
      )
    }
  }

export default connect(null, {addactivity})(AddActivityForm)