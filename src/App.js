import React, { Component } from "react";
// import HTML5Backend from "react-dnd-html5-backend";
// import { DragDropContext } from "react-dnd";
import styled from "styled-components";
import IosApertureOutline from "react-ionicons/lib/IosApertureOutline";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";
import Header from "./components/Header";
// import ControlPanel from "./components/ControlPanel";
import DragArea from "./components/DragArea";

const store = createStore(rootReducer, composeWithDevTools());

class App extends Component {
  render() {
    return (
      <Provider>
        <AppContainer>
          <Header />
          <DragArea />
        </AppContainer>
      </Provider>
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
