import React, { Component } from 'react';
import styled from 'styled-components';

import { ContinentBox } from './components/ContinentBox';

const Container = styled.div`
  width: 660px;
  display: flex;
`;

export class ContinentsTarget extends Component {
  render() {
    return (
      <Container>
        <ContinentBox />
        <ContinentBox />
        <ContinentBox />
      </Container>
    );
  }
}
