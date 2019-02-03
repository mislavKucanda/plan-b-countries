import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { Header } from '../sections/Header';
import { Content } from '../sections/Content';

class GameComponent extends Component {
  render() {
    const { continents } = this.props;
    console.log('continents: ', continents);

    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export const Game = observer(GameComponent);
