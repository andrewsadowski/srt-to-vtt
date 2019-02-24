import React, { Component } from 'react';
import {createStore} from 'redux';


import ControlPanel from './components/ControlPanel'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ControlPanel/>
      </div>
    );
  }
}

export default App;
