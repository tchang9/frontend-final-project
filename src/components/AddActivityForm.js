import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { post } from '../adapters'
import {addactivity} from '../actions'
import {connect} from 'react-redux'

class AddActivityForm extends React.Component {

    state = {
        date: '', 
        name: '',
        description: '',
        startHour: '',
        startMinute: '',
        startClock: 'AM',
        endHour: '',
        endMinute: '',
        endClock: 'AM',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let startTimeHour = this.state.startHour
        if (this.state.startClock === "PM" && this.state.startHour !== "12") {
          startTimeHour = parseInt(startTimeHour)
          startTimeHour += 12
          startTimeHour = String(startTimeHour)
        }
        if (this.state.startClock === "AM" && this.state.startHour === "12") {
          startTimeHour = parseInt(startTimeHour)
          startTimeHour -= 12
          startTimeHour = String(startTimeHour)
        }

        if (startTimeHour.length < 2) {
          startTimeHour = "0" + startTimeHour
        }

        let startTime = startTimeHour + ":" + this.state.startMinute

        let endTimeHour = this.state.endHour
        if (this.state.endClock === "PM" && this.state.endHour !== "12") {
          endTimeHour = parseInt(endTimeHour)
          endTimeHour += 12
          endTimeHour = String(endTimeHour)
        }
        if (this.state.endClock === "AM" && this.state.endHour === "12") {
          endTimeHour = parseInt(endTimeHour)
          endTimeHour -= 12
          endTimeHour = String(endTimeHour)
        }

        let endTime = endTimeHour + ":" + this.state.endMinute

        let body = {...this.state, eventId: this.props.eventid}
        body["startTime"] = startTime
        body["endTime"] = endTime
        delete body.startHour
        delete body.startMinute
        delete body.startClock
        delete body.endHour
        delete body.endMinute
        delete body.endClock
        
        post(`https://eventii.herokuapp.com/activities`, body)
        .then( (response) => {
            this.props.onHide()
            this.props.addactivity(response)
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
                        value={this.state.name}
                        required />
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

                <Form.Row>
                  <Form.Group as={Col}>
                      <Form.Label >Start Time</Form.Label>
                      <Form.Control 
                          onChange={this.handleChange} 
                          type="text"
                          maxLength="2" 
                          minLength="2"
                          name="startHour" 
                          value={this.state.startHour}
                          placeholder="HH"
                      />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label style={{color:'WHITE'}}>filler</Form.Label>
                      <Form.Control 
                          onChange={this.handleChange} 
                          type="text"
                          maxLength="2" 
                          minLength="2" 
                          name="startMinute" 
                          value={this.state.startMinute}
                          placeholder="MM"
                      />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label style={{color:'WHITE'}}>filler</Form.Label>
                      <Form.Control as="select"
                          onChange={this.handleChange} 
                          name="startClock" 
                          value={this.state.startClock}
                          placeholder="AM/PM"
                      >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                      <Form.Label >End Time</Form.Label>
                      <Form.Control 
                          onChange={this.handleChange} 
                          type="text"
                          maxLength="2" 
                          minLength="2"
                          name="endHour" 
                          value={this.state.endHour}
                          placeholder="HH"
                      />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label style={{color:'WHITE'}}>filler</Form.Label>
                      <Form.Control 
                          onChange={this.handleChange} 
                          type="text"
                          maxLength="2" 
                          minLength="2" 
                          name="endMinute" 
                          value={this.state.endMinute}
                          placeholder="MM"
                      />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label style={{color:'WHITE'}}>filler</Form.Label>
                      <Form.Control as="select"
                          onChange={this.handleChange} 
                          name="endClock" 
                          value={this.state.endClock}
                          placeholder="AM/PM"
                      >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Group >
                    <Form.Label >Description</Form.Label>
                    <Form.Control 
                        onChange={this.handleChange} 
                        type="textarea" 
                        name="description" 
                        value={this.state.description}
                        placeholder="Enter Activity Description"
                    />
                </Form.Group>
                <button style={{display: 'none'}}>For Enter to Submit</button>

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