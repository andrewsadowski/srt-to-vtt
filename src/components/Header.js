import React, { Component } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderText = styled.h1`
  font-family: "Exo", sans-serif;
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderText>srt △ vtt</HeaderText>
      </HeaderContainer>
    );
  }
}
