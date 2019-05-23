import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { patch } from '../adapters'
import {editActivity} from '../actions'
import {connect} from 'react-redux'

class EditActivityModal extends React.Component {

    state = {
        startTime: '',
        endTime: '',
        date: '', 
        name: '',
        description: ''
    }

    componentDidMount() {
        this.setState({
            startTime: this.props.activity.start_time,
            endTime: this.props.activity.end_time,
            date: this.props.activity.date, 
            name: this.props.activity.name,
            description: this.props.activity.description
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.props)
        const body = {...this.state, eventId: this.props.activity.event_id}
        
        patch(`http://localhost:3000/activities/${this.props.activity.id}`, body)
        .then( (response) => {
            this.props.editActivity(response)
            this.props.onHide()
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
              Edit Activity
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
                        placeholder="Enter Activity Start Name"
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label >End Time</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        type="text" 
                        name="endTime" 
                        value={this.state.endTime}
                        placeholder="Enter Activity End Name"
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

export default connect(null, {editActivity})(EditActivityModal)