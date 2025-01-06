import { ApolloServer } from 'apollo-server';
import { resolvers } from './graphql/resolvers';
import fs from "fs";

const cors = {
  origin: ['https://studio.apollographql.com','https://curly-trout-9449465v76pfpg5g.github.dev'], // 특정 도메인만 허용
  credentials: true
};

const typeDefs = fs.readFileSync("src/graphql/type.graphql", {
    encoding: "utf-8",
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
