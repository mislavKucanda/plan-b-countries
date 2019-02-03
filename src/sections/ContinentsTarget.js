import React, { Component } from 'react';
import styled from 'styled-components';
import bind from 'autobind-decorator';
import { observer } from 'mobx-react';

import { ContinentBox } from './components/ContinentBox';

import { Store } from '../mobx/store';

const Container = styled.div`
  width: 660px;
  display: flex;
`;

@observer
class ContinentsTargetComponent extends Component {
  @bind
  renderContinentBox({ name, selectedCountries, score }) {
    return (
      <ContinentBox
        name={name}
        selectedCountries={selectedCountries}
        score={score}
      />);
  }

  render() {
    return (
      <Container>
        {Store.generatedContinents.map(this.renderContinentBox)}
      </Container>
    );
  }
}

export const ContinentsTarget = ContinentsTargetComponent;
