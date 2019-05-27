import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Navbar from '../containers/Nav'
import BodyContainer from '../containers/BodyContainer'
import { connect } from 'react-redux'
import { fetchEvents, login, selectEvent } from '../actions'
import withAuth from "../HOC/withAuth"
import { get } from '../adapters'


class ProfileContainer extends React.Component {

    componentDidMount(){
		const token = localStorage.getItem("token")
		if (token){
            get("http://localhost:3000/auto_login")
			.then((response) => {
				if (response.errors) {
                    this.props.history.push('/login')
				} else {
                    this.props.login(response)
                    this.props.fetchEvents()
				}
			})
		}
    }
    
    render() {
        if (Object.keys(this.props.events).length > 0 && !this.props.activeEventId) {
            this.props.selectEvent(Object.keys(this.props.events)[0])
        }
        return (
            <>
                {this.props.activeEventId ? 
                <div className="profileContainer">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="header">
                    <Header className="FOOBARRRRR"/>
                </div>
                <div className="nav">
                    <Navbar />
                </div>
                <div className="bodyContainer">
                    <BodyContainer />
                </div>
                </div> 
                :
                null
                }
            </>
       )
    }
}

function mapStateToProps(state) {
    return {
        events: state.events,
        activeEventId: state.activeEventId
    }
}

export default connect(mapStateToProps, { fetchEvents, login, selectEvent } )(withAuth(ProfileContainer))
