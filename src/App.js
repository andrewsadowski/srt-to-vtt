import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import ControlPanel from './components/ControlPanel'
import DragArea from './components/DragArea'

class App extends Component {
  render() {
    return (
      <div className="App">
      <ControlPanel/>
      <DragArea />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
