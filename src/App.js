import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Nav from './containers/Nav'
import BodyContainer from './containers/BodyContainer'
import Login from './components/Login'
import AddUserForm from './components/AddUserForm'
import AddEventForm from './components/AddEventForm'
class App extends React.Component {
  render() {
    return (
      <AddEventForm />
    )
  }
}

export default App

{/* <div className="AppContainer">
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
</div> */}