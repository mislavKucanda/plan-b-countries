import React, { Component } from 'react';
import styled from 'styled-components';
import bind from 'autobind-decorator';
import { DropTarget } from 'react-dnd';

import { ContinentHeader } from './ContinentHeader';
import { CountryCard } from './CountryCard';
import { ResultPanel } from './ResultPanel';

import { Store } from '../../mobx/store';

const Container = styled.div`
  position: relative;
`;

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const boxTarget = {
  drop(props) {
    Store.addCountryToContinentBox(Store.draggedCountry, props.name);
  }
};

class ContinentBoxComponent extends Component {
  @bind
  renderCountryCard(country) {
    return <CountryCard key={country.name} country={country} />;
  }

  render() {
    const { name, selectedCountries, score, connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div style={{
        flex: 1,
        padding: '0 10px',
        backgroundColor: isOver ? '#B8CBDA' : 'white' }}
      >
        <Container>
          <ContinentHeader name={name} />
          <ResultPanel score={score} />
          {selectedCountries.map(this.renderCountryCard)}
        </Container>
      </div>
    );
  }
}

export const ContinentBox = DropTarget('card', boxTarget, collect)(ContinentBoxComponent);
