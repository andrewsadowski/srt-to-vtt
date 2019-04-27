import React, { Component } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import DragArea from "./components/DragArea";

import { processSrtToVtt } from "./utils/handleSrt";

class App extends Component {
  state = {
    files: []
  };

  handleFiles = fileArray => {
    this.setState({ files: fileArray }, async () => {
      if (this.state.files.length === 1) {
        console.log(this.state.files[0].path);
        await processSrtToVtt(this.state.files[0].path);
      } else {
        //loop over each file, calling processSrtToVtt()
      }
      console.log(this.state.files);
    });
  };

  render() {
    return (
      <AppContainer>
        <Header />
        <DragArea handleFiles={this.handleFiles} />
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

export default App;
