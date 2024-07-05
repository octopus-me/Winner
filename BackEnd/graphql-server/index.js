const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');

const suggestionsData = JSON.parse(fs.readFileSync('./suggestions.json', 'utf8'));

// Definição do schema
const typeDefs = gql`
  type Suggestion {
    id: ID!
    suggestion: String!
  }

  type Query {
    suggestions(term: String!): [Suggestion]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    suggestions: (_, { term }) => {
        if(term.length < 4) {
            return [];
        }
        return suggestionsData.filter(suggestion =>
            suggestion.suggestion.toLowerCase().startsWith(term.toLowerCase())
        ).slice(0,20);
    },
  },
};

// Criação do servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Inicialização do servidor
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
