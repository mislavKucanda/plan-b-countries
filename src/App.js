import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { observer } from 'mobx-react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { Game } from './pages/Game'

import { apolloClient, GET_GEO_DATA } from './graphql/graphql-api';

@observer
class App extends Component {
  render() {
    return (
      <Query query={GET_GEO_DATA} client={apolloClient}>
        {({loading, error, data}) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error.message}</p>;
          return (
            <DragDropContextProvider backend={HTML5Backend}>
              <Game continents={data.continents} />
            </DragDropContextProvider>
          );
        }}
      </Query>
    );
  }
}

export default App;
