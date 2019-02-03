import React, { Component } from 'react';
import styled from 'styled-components';

import { ContinentHeader } from './ContinentHeader';
import { CountryCard } from './CountryCard';
import { ResultPanel } from './ResultPanel';

const Container = styled.div`
  flex: 1;
  padding: 0 10px;
  position: relative;
`;

export class ContinentBox extends Component {
  render() {
    return (
      <Container>
        <ContinentHeader />
        <ResultPanel />
        <CountryCard />
        <CountryCard />
      </Container>
    );
  }
}
