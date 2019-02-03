import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { Header } from '../sections/Header';
import { Content } from '../sections/Content';

import { Store } from '../mobx/store';

@observer
class GameComponent extends Component {
  componentDidMount() {
    const { continents } = this.props;
    console.log('continents in componentDidMount: ', continents);
    Store.continents = continents;
    Store.initializeGame()
  }

  render() {
    console.log('generatedContinents: ', Store.generatedContinents[0].name);
    console.log('generatedContinents: ', Store.generatedContinents[1].name);
    console.log('generatedContinents: ', Store.generatedContinents[2].name);
    console.log('generatedCountries: ', Store.generatedCountries);

    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export const Game = GameComponent;
