import React, { Component } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import styled from "styled-components";

import ControlPanel from "./components/ControlPanel";
import DragArea from "./components/DragArea";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <ControlPanel />
        <DragArea />
      </AppContainer>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
