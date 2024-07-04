import { ApolloClient, InMemoryCache,  ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/', // URL do seu servidor GraphQL
  cache: new InMemoryCache()
});

export { client, ApolloProvider };
