// Remova ou comente estas linhas
// import { ApolloServer, gql } from 'apollo-server';

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './ApolloClient/ApolloClient.js';
import App from './App';
import './index.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
