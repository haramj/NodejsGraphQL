"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const fs_1 = __importDefault(require("fs"));
const cors = {
    origin: ['https://studio.apollographql.com', 'https://curly-trout-9449465v76pfpg5g.github.dev'], // 특정 도메인만 허용
    credentials: true
};
const typeDefs = fs_1.default.readFileSync("src/graphql/type.graphql", {
    encoding: "utf-8",
});
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers: resolvers_1.default,
    cors
});
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
