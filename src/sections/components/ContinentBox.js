import React, { Component } from 'react';
import styled from 'styled-components';

import { ContinentHeader } from './ContinentHeader';
import { CountryCard } from './CountryCard';

const Container = styled.div`
  flex: 1;
  padding: 0 10px;
`;

export class ContinentBox extends Component {
  render() {
    return (
      <Container>
        <ContinentHeader />
        <CountryCard />
        <CountryCard />
      </Container>
    );
  }
}
