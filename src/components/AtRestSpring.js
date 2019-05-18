import React, { Component } from "react";
import { Spring, animated } from "react-spring/renderprops";
import styled from "styled-components";

export default class AtRest extends Component {
  state = {
    hovering: false
  };

  mouseOver = () =>
    this.setState({ hovering: true }, () => console.log(this.props));

  mouseOut = () => this.setState({ hovering: false });

  render() {
    const { dropped } = this.props;
    const { hovering } = this.state;
    return (
      <BoxContainer onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <Spring
          to={{
            borderWidth: hovering && !dropped ? "2px" : "1px",
            color: hovering && !dropped ? "blue" : "black"
          }}
        >
          {styles => (
            <Box style={styles}>
              <BoxText>Drop some srts here</BoxText>
              {hovering ? <animated.h1>Give it a drop</animated.h1> : null}
            </Box>
          )}
        </Spring>
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

const Box = styled(animated.div)`
  width: 85vw;
  height: 75vh;
  background: #ff1c68;
  border: 1px dashed black;
  transform-origin: 50% 50%;
`;
