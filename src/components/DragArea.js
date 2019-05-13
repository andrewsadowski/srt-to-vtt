import React, { Component } from "react";
import Dropzone from "react-dnd-dropzone";
import styled from "styled-components";

export default class DragArea extends Component {
  render() {
    return (
      <DropContainer>
        <Dropzone
          onDrop={files => this.props.handleFiles(files)}
          render={({ canDrop, isOver }) => (
            <DropZoneContainer>{this.props.children}</DropZoneContainer>
          )}
        />
      </DropContainer>
    );
  }
}

const DropContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
`;

const DropZoneContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
