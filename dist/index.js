"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const typeDefs_1 = __importDefault(require("./graphql/typeDefs"));
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   cors: {
//     origin: ['https://curly-trout-9449465v76pfpg5g.github.dev'],
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
//   },
// });
const server = new graphql_yoga_1.GraphQLServer({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
    cors: {
        origin: ['https://curly-trout-9449465v76pfpg5g.github.dev'],
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
    },
});
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });
server.start(() => console.log("server running!"));
