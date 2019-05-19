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
        <ParticleEffectButton color="#121019" hidden={this.state.hidden}>
          Refresh
        </ParticleEffectButton>
      </ButtonContainer>
    );
  }
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  color: "#121019";
`;
