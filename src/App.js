import React, { Component } from 'react';
import './App.css';
import TopComponent from './admin/mainpage/TopComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"></link>
        <TopComponent/>
        </div>
    );
  }
}

export default App;
