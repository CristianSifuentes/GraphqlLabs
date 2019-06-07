import  {  makeExecutableSchema  } from "graphql-tools";//crea un schema nuevo
import { resolvers } from "./revolvers";

const typeDefs = `
  type Query {
      hello: String
      greet(name: String!):  String
      task: [Task]
      users: [User]
  }

  type Task {
    _id: ID
    title: String!
    description: String!
    number: Int
  }

  type User {
    _id: ID
    firstname: String!
    lastname: String!
    age: Int!
  }



  type Mutation {
    createTask(input: TaskInput): Task
    createUser(input: UserInput): User

  }

  input TaskInput {
   
    title: String!
    description: String!
    number: Int
  }

  input UserInput {
    firstname: String!
    lastname: String!
    age: Int!
  }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers : resolvers
})