import React, { Component } from "react";
import styled from "styled-components";
// import IosApertureOutline from "react-ionicons/lib/IosApertureOutline";

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

// const IosApertureStyled = styled(IosApertureOutline)`
//   height: 250px;
//   width: 250px;
// `;

export default App;
