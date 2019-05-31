import React, { Component } from "react";
import { Spring, animated } from "react-spring/renderprops";
import styled from "styled-components";

import DropAnimation from "./DropAnimation";

export default class AtRest extends Component {
  state = {
    hovering: false
  };

  mouseOver = () => this.setState({ hovering: true });

  mouseLeave = () => {
    this.setState({ hovering: false });
  };

  render() {
    const { dropped } = this.props;
    const { hovering } = this.state;
    return (
      <BoxContainer onMouseLeave={this.mouseLeave} onMouseOver={this.mouseOver}>
        <Spring
          to={{
            borderWidth: hovering && !dropped ? "3px" : "1px",
            color: hovering && !dropped ? "#0074D9" : "black",
            x: hovering ? "#DDDDDD" : "#edeae8",
            y: hovering ? "30px" : "18px",
            borderColor: hovering ? "#0074D9" : "#111111"
          }}
        >
          {styles => (
            <Box style={{ ...styles, background: styles.x }}>
              <BoxText style={{ fontSize: styles.y }}>
                Drop some srts here
              </BoxText>
              {hovering && (
                <HoverArea>
                  {/* <DropNote>Drop your files here</DropNote> */}
                  {/* <DropAnimation hovered={hovering} /> */}
                </HoverArea>
              )}
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
  background: #edeae8;
  border: 1px dashed black;
  transform-origin: 50% 50%;
  justify-content: center;
  align-items: center;
`;

// const DropNote = styled(animated.p)`
//   justify-content: center;
//   font-family: "Exo", sans-serif;
//   align-content: center;
//   text-align: center;
//   font-size: 35px;
// `;

const HoverArea = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
