import React, { Component } from "react";
import Dropzone from "react-dnd-dropzone";
import styled from "styled-components";

import DragTriangle from "./Triangle";

export default class DragArea extends Component {
  render() {
    return (
      <DropContainer>
        <Dropzone
          onDrop={files => this.props.handleFiles(files)}
          render={({ canDrop, isOver }) => (
            <DropZoneContainer>
              Drop file here
              <pre>{JSON.stringify({ canDrop, isOver })}</pre>
              <DragTriangle />
            </DropZoneContainer>
          )}
        />
      </DropContainer>
    );
  }
}

const DropContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
`;

const DropZoneContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
