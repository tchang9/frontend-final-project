import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <>
      <Sidebar />
      <Header />
      </>
    )
  }
}

export default App