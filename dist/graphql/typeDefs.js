"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
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
exports.default = typeDefs;
