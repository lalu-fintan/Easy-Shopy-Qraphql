import express, { Express } from "express";
import "dotenv/config";
import dbConnect from "./config/dbConfig";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/typeDefs/Types";
import resolvers from "./graphql/resolvers/resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import authentication from "./middleware/authMiddleware";

const startServer = async () => {
  const app: Express = express();
  const port = process.env.PORT || 5000;
  dbConnect();

  // app.use("/graphql", authentication);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await server.start();

  server.applyMiddleware({ app: app as any, path: "/graphql" });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.listen(port, () => {
    console.log(`server running on ${port}`);
  });
};

startServer();
