import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Nav from '../containers/Nav'
import BodyContainer from '../containers/BodyContainer'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions'

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.fetchEvents()
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

export default connect(null, { fetchEvents } )(ProfileContainer)