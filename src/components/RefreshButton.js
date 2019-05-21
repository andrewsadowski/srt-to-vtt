import React, { Component } from "react";
// import { getCurrentWindow } from "electron";
import styled from "styled-components";
import ParticleEffectButton from "react-particle-effect-button";

const { getCurrentWindow } = window.require("electron").remote;

export default class RefreshButton extends Component {
  state = {
    hidden: false
  };

  refreshWindow = () => {
    this.setState({ hidden: !this.state.hidden }, () => {
      setTimeout(() => getCurrentWindow().reload(), 2000);
    });
  };

  render() {
    return (
      <ButtonContainer onClick={this.refreshWindow}>
        <StyledButton
          color="#121019"
          style={{
            background: "#121019",
            color: "#fff",
            padding: "1.5rem 3rem",
            border: "0",
            borderRadius: 5,
            cursor: "pointer",
            fontSize: "1.2em"
          }}
          hidden={this.state.hidden}
        >
          Refresh
        </StyledButton>
      </ButtonContainer>
    );
  }
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background: "#121019";
  color: "#fff";
  padding: "1.5rem 3rem";
  border: "0";
  border-radius: 5;
  font-size: "1.2em";
`;

const StyledButton = styled(ParticleEffectButton)`
  border: 1px solid black;
  width: 20px;
  height: 25px;
`;
