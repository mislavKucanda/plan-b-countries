import React, { Component } from 'react';
import styled from 'styled-components';

import { CountryCard } from './components/CountryCard';

import { colors } from '../theme/colors';

const Container = styled.div`
  width: 880px;
`;

const Divider = styled.div`
  height: 15px;
  background-color: ${colors.grey}
  margin-left: 5px;
`;

const CountriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export class CountriesPicker extends Component {
  render() {
    return (
      <Container>
        <Divider />
        <CountriesContainer>
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </CountriesContainer>
      </Container>
    );
  }
}
