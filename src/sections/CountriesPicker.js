import React, { Component } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import bind from 'autobind-decorator';

import { CountryCard } from './components/CountryCard';

import { colors } from '../theme/colors';
import { Store } from '../mobx/store';

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

@observer
class CountriesPickerComponent extends Component {
  @bind
  renderCountry(country) {
    return <CountryCard country={country} key={country.name} />;
  }

  render() {
    return (
      <Container>
        <Divider />
        <CountriesContainer>
          {Store.generatedCountries.map(this.renderCountry)}
        </CountriesContainer>
      </Container>
    );
  }
}

export const CountriesPicker = CountriesPickerComponent;
