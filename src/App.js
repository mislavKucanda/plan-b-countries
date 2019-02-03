import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { observer } from 'mobx-react';

import { Game } from './pages/Game'

import { apolloClient, GET_GEO_DATA } from './graphql/graphql-api';

class App extends Component {
  render() {
    return (
      <Query query={GET_GEO_DATA} client={apolloClient}>
        {({loading, error, data}) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error.message}</p>;
          console.log('continents from store: ', this.props.store.continents);
          return (
            <Game continents={data.continents} />
          );
        }}
      </Query>
    );
  }
}

export default observer(App);
