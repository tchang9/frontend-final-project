import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {deleteActivity} from '../actions'
var moment = require('moment')

class Activity extends React.Component {

    handleClick = () => {
        this.props.editActivity()
    }

    handleDelete = () => {
      // debugger
      this.props.deleteActivity(this.props.activity.id)
      this.props.onHide()
    }

    getTime = (time) => {
      const timeArray = time.split(":")
      let hour = parseInt(timeArray[0])
      let minute = timeArray[1]
      let clock = "AM"
      if (hour >= 12) {
          clock = "PM"
      }
      if (hour > 13) {
          hour -= 12
      }
      return (hour + '').concat(":", minute, clock)
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
              {this.props.activity.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>{moment(this.props.activity.date).format('dddd LL')}</h3>
            <p>{this.getTime(this.props.activity.start_time)} - {this.getTime(this.props.activity.end_time)}</p>
            <p>{this.props.activity.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-info" onClick={this.handleClick}>Edit</Button>
            <Button variant="outline-danger" onClick={this.handleDelete}>Delete</Button>
            {/* <Button onClick={this.props.onHide}>Close</Button> */}
          </Modal.Footer>
        </Modal>
      )
    }
  }

export default connect(null, {deleteActivity})(Activity)