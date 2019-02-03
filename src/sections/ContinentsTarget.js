import React, { Component } from 'react';
import styled from 'styled-components';

const ContinentsContainer = styled.div`
  width: 660px;
`;

export class ContinentsTarget extends Component {
  render() {
    return (
      <ContinentsContainer>Continents target</ContinentsContainer>
    );
  }
}
