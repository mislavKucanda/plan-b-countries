import React, { Component } from 'react';

import { Header } from '../sections/Header';
import { Content } from '../sections/Content';

export class Game extends Component {
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
