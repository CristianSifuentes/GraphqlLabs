//Se crean funciones
import { task } from "./sample"

export const resolvers = {
   Query: {
       hello: () => {
           return 'Holla mundo desde GraphQL'
       },
       greet(root, { name }) {
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
       }
   }
};