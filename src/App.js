import React, { Component } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import DragArea from "./components/DragArea";
import AtRest from "./components/AtRest";
import Dropped from "./components/Dropped";

import { processSrtToVtt } from "./utils/handleSrt";

class App extends Component {
  state = {
    files: [],
    hasDropOccurred: false
  };

  handleFiles = fileArray => {
    try {
      this.setState(
        { files: fileArray, hasDropOccurred: !this.state.hasDropOccurred },
        async () => {
          if (this.state.files.length === 1) {
            console.log(this.state.files[0].path);
            await processSrtToVtt(this.state.files[0].path);
          } else {
            this.state.files.map(async file => {
              console.log(file.path);
              await processSrtToVtt(file.path);
            });
          }
        }
      );
    } catch (err) {
      if (err) console.log(err);
    }
  };

  render() {
    let { hasDropOccurred } = this.state;
    return (
      <AppContainer>
        <Header />
        <DragArea handleFiles={this.handleFiles}>
          {hasDropOccurred ? <Dropped /> : <AtRest />}
        </DragArea>
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
