import React, { Component } from "react";
// import { getCurrentWindow } from "electron";
import styled from "styled-components";

const { getCurrentWindow } = window.require("electron").remote;

export default class RefreshButton extends Component {
  refreshWindow = () => {
    return getCurrentWindow().reload();
  };
  render() {
    return (
      <ButtonContainer>
        <ReButton onClick={this.refreshWindow}>Refresh</ReButton>
      </ButtonContainer>
    );
  }
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const ReButton = styled.button`
  color: red;
  height: 50px;
  width: 75px;
`;
