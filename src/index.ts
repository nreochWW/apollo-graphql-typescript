import { ApolloServer } from "apollo-server-express";
import express from "express";
const expressPlayground = require("graphql-playground-middleware-express")
  .default;
import { createServer } from "http";
import resolvers from "./resolvers";
import typeDefs from "./schema";
const app = express();

const port = process.env.PORT || 4000;

const graphQLServer = new ApolloServer({ resolvers, typeDefs });

graphQLServer.applyMiddleware({ app, path: "/graphql" });

app.get(
  "/playground",
  expressPlayground({
    endpoint: "/graphql"
  })
);

const httpServer = createServer(app);

httpServer.listen({ port }, () => {
  console.log(
    `GraphQL server running @ http://localhost:${port}${graphQLServer.graphqlPath}`
  );
});
