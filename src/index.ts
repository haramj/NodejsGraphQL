import { ApolloServer, BaseContext } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './graphql/resolvers';
import { ListingAPI } from './datasources/listing-api';
import { InMemoryLRUCache } from 'apollo-server-caching';
import fs from "fs";

const typeDefs = fs.readFileSync("src/graphql/type.graphql", {
  encoding: "utf-8",
});

async function startApolloServer() {
  const cache = new InMemoryLRUCache();

  const server = new ApolloServer<BaseContext>({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => ({
      dataSources: {
        listingAPI: new ListingAPI({ cache }),
      },
    }),
  });

  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer();