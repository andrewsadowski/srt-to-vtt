import React, { Component } from "react";
import styled from "styled-components";

export default class DragTriangle extends Component {
  render() {
    return (
      <TriangleContainer>
        <ActualTriangle height="500" width="500">
          <polygon points="250,60 100,400 400,400" class="triangle" />
        </ActualTriangle>
      </TriangleContainer>
    );
  }
}

const ActualTriangle = styled.svg`
  fill: transparent;
  stroke: black;
  stroke-width: 8;
  transition: all 0.8s ease-in-out;
`;

const TriangleContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: center;
  border: 1px solid white;
  ${ActualTriangle}:hover {
    transform: rotate(-180deg);
  }
`;
