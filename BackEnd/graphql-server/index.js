const { ApolloServer, gql } = require('apollo-server');

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

// Dados de exemplo
const suggestionsData = [
  { id: '1', suggestion: 'Apple' },
  { id: '2', suggestion: 'Banana' },
  { id: '3', suggestion: 'Cherry' },
  { id: '4', suggestion: 'Date' },
  { id: '5', suggestion: 'Elderberry' },
  { id: '6', suggestion: 'Pinapple' },
  { id: '7', suggestion: 'Unstoppable'},
  { id: '8', suggestion: 'Strong'},
  { id: '9', suggestion: 'Apple Pie' },
  { id: '10', suggestion: 'Apple Phone' },
  { id: '11', suggestion: 'Apple Newton' },
  { id: '12', suggestion: 'Green Apple' },
  { id: '13', suggestion: 'Rot Apple' },
];

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
