import  {  makeExecutableSchema  } from "graphql-tools";//crea un schema nuevo
import { resolvers } from "./revolvers";

const typeDefs = `
  type Query {
      hello: String
  }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers : resolvers
})