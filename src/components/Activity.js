import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


// const Activity = ({activity}) => {

//     const handleClick = () => {
//         return <Link to={`/profile/events/${activity.event_id}/schedule/activities/${activity.id}`} />
//     }

//     return (
//         <>
//             <h3>{activity.name}</h3>
//             <p>{activity.description}</p>
//             <p>{activity.start_time} - {activity.end_time}</p>
//             <Link to={`/profile/events/${activity.event_id}/schedule/activities/edit/${activity.id}`}>
//                 <button onClick={handleClick}>Edit Activity</button>
//             </Link>
//         </>
//     )
// }

// export default Activity

class MyVerticallyCenteredModal extends React.Component {

    handleClick = () => {
        this.props.editActivity()
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
              {this.props.activity.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>{this.props.activity.date}</h3>
            <p>{this.props.activity.start_time} - {this.props.activity.end_time}</p>
            <p>{this.props.activity.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-info" onClick={this.handleClick}>Edit</Button>
            <Button variant="outline-danger" onClick={this.props.onHide}>Delete</Button>
            {/* <Button onClick={this.props.onHide}>Close</Button> */}
          </Modal.Footer>
        </Modal>
      )
    }
  }

export default MyVerticallyCenteredModal