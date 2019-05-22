import React from 'react'
import { Redirect } from 'react-router-dom'

function withAuth(MyComponent){

    return (
        class extends React.Component {
            // state = {
            //     currentUser: null
            // }

            // componentDidMount() {
                // const token = localStorage.getItem("token")
                // fetch(currentUserRoute())
                // .then(res => res.json())
                // .then(user => {
                //  dispatch({type: "LOGIN", payload: user})
                // })
            // }

            renderPage = () => {
                const token = localStorage.getItem("token")
                if (token) {
                    return <MyComponent {...this.props}/>
                } else {
                    return <Redirect to="/login" />
                }
            }

            render() {
                return (
                    this.renderPage()
                )
            }
        } 
    )
}

export default withAuth 
