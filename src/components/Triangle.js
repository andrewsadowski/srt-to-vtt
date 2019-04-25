import React, { Component } from "react";
import styled from "styled-components";

export default class DragTriangle extends Component {
  render() {
    return (
      <TriangleContainer>
        <svg height="500" width="500">
          <polygon points="250,60 100,400 400,400" class="triangle" />
        </svg>
      </TriangleContainer>
    );
  }
}

const TriangleContainer = styled.div`
  width: 100%;
  height: 75%;
  margin: auto;
  text-align: center;
  border: 1px solid white;
`;
