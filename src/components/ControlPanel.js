import React, { Component } from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring'

const ControlPanelContainer = styled.div`
    width: 100%;
    height: 25%;
`

const ControlPanelButton = styled.button`
    width: fit-content;
    height: 100%;
    background-color: green;
`

export default class ControlPanel extends Component {
  render() {
    return (
      <ControlPanelContainer>
        <p>ControlPanel</p>
        <ControlPanelButton value="Select Files">SelectFiles</ControlPanelButton>
      </ControlPanelContainer>
    )
  }
}
