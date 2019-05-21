import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Nav from '../containers/Nav'
import BodyContainer from '../containers/BodyContainer'
import { connect } from 'react-redux'
import { fetchEvents, login } from '../actions'
import withAuth from "../HOC/withAuth"


class ProfileContainer extends React.Component {

    componentDidMount(){
		const token = localStorage.getItem("token")

		if (token){
			fetch("http://localhost:3000/auto_login", {
				headers: {
					"Authorization": token
				}
			})
			.then(res => res.json())
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

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { fetchEvents, login } )(withAuth(ProfileContainer))
