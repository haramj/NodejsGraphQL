import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

const typeDefs: DocumentNode = gql`
  type Movie {
    id: Int!
    name: String!
    rating: Int!
  }

  type Query {
    movies: [Movie!]!
    movie(id: Int!): Movie
  }

  type Mutation {
    addMovie(name: String!, rating: Int!): Movie!
  }
`;

export default typeDefs;