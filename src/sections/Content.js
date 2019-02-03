import React, { Component } from 'react';
import styled from 'styled-components';

import { InfoPanel } from './InfoPanel';
import { CountriesPicker } from './CountriesPicker';
import { ContinentsTarget } from './ContinentsTarget';
import { ResultBoard } from './ResultBoard';

const Container = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const TopContent = styled.div`
  display: flex;
`;

export class Content extends Component {
  render() {
    return (
      <Container>
        <TopContent>
          <InfoPanel />
          <ContinentsTarget />
          <ResultBoard />
        </TopContent>
        <CountriesPicker />
      </Container>
    );
  }
}
