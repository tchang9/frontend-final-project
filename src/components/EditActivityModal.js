import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { patch } from '../adapters'
import {editActivity} from '../actions'
import {connect} from 'react-redux'
import Col from 'react-bootstrap/Col'

class EditActivityModal extends React.Component {

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

    componentDidMount() {
      const startTimeArray = this.props.activity.start_time.split(":")
      let startHour = startTimeArray[0]
      let startClock = 'AM'
      if (startHour > 12) {
        startClock = 'PM'
      }
      if (startHour > 13) {
        startHour -= 12
      }

      const endTimeArray = this.props.activity.end_time.split(":")
      let endHour = endTimeArray[0]
      let endClock = 'AM'
      if (endHour > 12) {
        endClock = 'PM'
      }
      if (endHour > 13) {
        endHour -= 12
      }
      
      this.setState({
        startHour: startHour,
        startMinute: startTimeArray[1],
        startClock: startClock,
        endHour: endHour,
        endMinute: endTimeArray[1],
        endClock: endClock,
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

        let body = {...this.state, eventId: this.props.activity.event_id}
        body["startTime"] = startTime
        body["endTime"] = endTime
        delete body.startHour
        delete body.startMinute
        delete body.startClock
        delete body.endHour
        delete body.endMinute
        delete body.endClock
        
        patch(`https://eventii.herokuapp.com/activities/${this.props.activity.id}`, body)
        .then( (response) => {
            this.props.onHide()
            this.props.editActivity(response)
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
          className="helloLOOKATME"
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
                        placeholder="Enter Activity description"
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

export default connect(null, {editActivity})(EditActivityModal)