import React, { Component } from "react";
import styled from "styled-components";

const { getCurrentWindow } = window.require("electron").remote;

export default class RefreshButton extends Component {
  state = {
    hidden: false
  };

  refreshWindow = () => {
    this.setState({ hidden: !this.state.hidden }, () => {
      getCurrentWindow().reload();
    });
  };

  render() {
    return <ButtonStyled onClick={this.refreshWindow}>Refresh</ButtonStyled>;
  }
}

const ButtonStyled = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #001f3f;
  border-radius: 3px;
  background: #8e9eab;
`;
