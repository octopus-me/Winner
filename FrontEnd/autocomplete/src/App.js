import React from 'react';
import './App.css';
import Search from './Pages/Search';

import { ApolloProvider } from '@apollo/client';
import {client} from './ApolloClient/ApolloClient.js'

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <header>
          <Search />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
