import React, { Component } from "react";
// import { DragSource, DragTarget } from "react-dnd";
import Dropzone from "react-dnd-dropzone";
import styled from "styled-components";

export default class DragArea extends Component {
  render() {
    return (
      <DropContainer>
        <Dropzone
          onDrop={files => console.log(files)}
          render={({ canDrop, isOver }) => (
            <div>
              Drop file here!
              <pre>{JSON.stringify({ canDrop, isOver })}</pre>
            </div>
          )}
        />
      </DropContainer>
    );
  }
}

const DropContainer = styled.div`
  width: 250px;
  height: 250px;
  background-color: palegoldenrod;
`;
