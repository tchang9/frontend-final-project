import React from 'react';
import './App.css';
import Login from './components/Login'
import AddUserForm from './components/AddUserForm'
import AddEventForm from './components/AddEventForm'
import { Route } from 'react-router-dom'
import ProfileContainer from './containers/ProfileContainer'
import JoinEvent from './components/JoinEvent';
import Welcome from './containers/Welcome'
// import NoMatch from './components/NoMatch'

class App extends React.Component {
  render() {
    return (
      <>
        <Route path='/login' component = {Login} />
        <Route path='/welcome' component= {Welcome} />
        <Route path='/signup' component = {AddUserForm} />
        <Route path='/add-event' component = {AddEventForm} />
        <Route path='/profile' component = {ProfileContainer} />
        <Route path='/join-event/:eventId' component = {JoinEvent} />
        {/* <Route component = {NoMatch} /> */}
      </>
    )
  }
}

export default App
