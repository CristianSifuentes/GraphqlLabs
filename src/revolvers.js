//Se crean funciones
import { task } from "./sample"
import User from "./models/User";


export const resolvers = {
   Query: {
       hello: () => {
           return 'Holla mundo desde GraphQL'
       },
       greet(root, { name }, ctx) {
           console.log(ctx);
           return `Hola mi nombre es ${name}!`;
       },
       task(){
           return task;
       }
   },
   Mutation: {
       createTask(_, { input }){
        input._id = task.length;
        task.push(input);
         return input;
       },
       createUser(_, { input }){
        const newUser = new User(input);
        console.log(newUser);
        return null;
       }
   }
};

