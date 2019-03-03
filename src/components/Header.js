import React, { Component } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <h1>srt 2 vtt</h1>
      </HeaderContainer>
    );
  }
}
