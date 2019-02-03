import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { Header } from '../sections/Header';
import { Content } from '../sections/Content';

import { Store } from '../mobx/store';

@observer
class GameComponent extends Component {
  componentDidMount() {
    const { continents } = this.props;
    Store.continents = continents;
    Store.initializeGame()
  }

  render() {

    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export const Game = GameComponent;
