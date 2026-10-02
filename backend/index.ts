import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

const app = express();

const PORT = 4000;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await apolloServer.start();

  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  
  app.use(express.json());
  
  app.get("/", (req, res) => {
    res.send("Backend funcionando correctamente");
  });
  
  app.use("/graphql", expressMiddleware(apolloServer));
  
  app.listen(PORT, () => {
    console.log(`Backend funcionando en http://localhost:${PORT}`);
  });
}

startServer()