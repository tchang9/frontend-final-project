import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Nav from '../containers/Nav'
import BodyContainer from '../containers/BodyContainer'
import { connect } from 'react-redux'
import { getEvents } from '../actions'

class ProfileContainer extends React.Component {

    componentDidMount() {
        fetch(`http://localhost:3000/events`)
        .then(res => res.json())
        .then(this.props.getEvents)
    }

    render() {
        return (
            <div className="profileContainer">
               <div className="sidebar">
                   <Sidebar />
               </div>
               <div className="header">
                   <Header />
               </div>
               <div className="nav">
                   <Nav />
               </div>
               <div className="bodyContainer">
                   <BodyContainer />
               </div>
           </div> 
       )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getEvents: (events) => {
            dispatch(getEvents(events))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProfileContainer)