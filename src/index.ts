import { ApolloServer } from 'apollo-server';
import { resolvers } from './graphql/resolvers';
import { ListingAPI } from './datasources/listing-api';
import { startStandaloneServer } from '@apollo/server/standalone';
import { InMemoryLRUCache } from 'apollo-server-caching';
import fs from "fs";

const cors = {
  origin: ['https://studio.apollographql.com','https://curly-trout-9449465v76pfpg5g.github.dev'], // 특정 도메인만 허용
  credentials: true
};

const typeDefs = fs.readFileSync("src/graphql/type.graphql", {
    encoding: "utf-8",
});


async function startApolloServer() {
  const cache = new InMemoryLRUCache();

  const server = new ApolloServer({ typeDefs, resolvers, cors });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      return {
        dataSources: {
          listingAPI: new ListingAPI({ cache }),
        },
      };
    },
  });
  
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
  
}

startApolloServer();