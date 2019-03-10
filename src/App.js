import React, { Component } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import styled from "styled-components";

import Header from "./components/Header";
// import ControlPanel from "./components/ControlPanel";
import DragArea from "./components/DragArea";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <DragArea />
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default DragDropContext(HTML5Backend)(App);
