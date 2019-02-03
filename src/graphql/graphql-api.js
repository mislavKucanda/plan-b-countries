import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

export const apolloClient = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

export const GET_GEO_DATA = gql`
  query Q1 {
    continents {
      name
      countries {
        name
      }
    }
  }
`;
