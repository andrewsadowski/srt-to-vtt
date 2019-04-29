import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";

export default class AtRest extends Component {
  state = {
    hovering: false
  };
  mouseOver = () =>
    this.setState({ hovering: true }, () => console.log(this.props));
  mouseOut = () => this.setState({ hovering: false });
  render() {
    const { dropped } = this.props;
    return (
      <BoxContainer onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <Box pose={!this.state.hovering && !dropped ? "visible" : "hidden"}>
          <BoxText>Drop some srts here</BoxText>
        </Box>
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

const BoxText = styled.p`
  justify-content: center;
  font-family: "Exo", sans-serif;
  align-content: center;
  text-align: center;
`;

const BoxOutline = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0.2 }
});

const Box = styled(BoxOutline)`
  width: 85vw;
  height: 75vh;
  background: #ff1c68;
  border: 1px solid black;
  transform-origin: 50% 50%;
`;
