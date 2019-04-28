import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";

export default class AtRest extends Component {
  render() {
    return (
      <BoxContainer>
        <Box />
      </BoxContainer>
    );
  }
}

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const BoxOutline = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

const Box = styled(BoxOutline)`
  width: 85vw;
  height: 75vh;
  background: #ff1c68;
  border: 1px solid black;
  transform-origin: 50% 50%;
`;
