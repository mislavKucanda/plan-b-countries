import React, { Component } from 'react';

export class Game extends Component {
  render() {
    const { continents } = this.props;
    console.log('continents: ', continents);

    return (
      <div>
        Page
      </div>
    );
  }
}
