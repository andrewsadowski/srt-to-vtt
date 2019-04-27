import React, { Component } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import DragArea from "./components/DragArea";

import { processSrtToVtt } from "./utils/handleSrt";

class App extends Component {
  state = {
    files: [],
    hasDropOccurred: false
  };

  handleFiles = fileArray => {
    this.setState(
      { files: fileArray, hasDropOccurred: !this.state.hasDropOccurred },
      async () => {
        console.log(this.state);
        if (this.state.files.length === 1) {
          console.log(this.state.files[0].path);
          await processSrtToVtt(this.state.files[0].path);
        } else {
          this.state.files.map(async file => {
            console.log(file.path);
            await processSrtToVtt(file.path);
          });
        }
        console.log(this.state.files);
      }
    );
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
