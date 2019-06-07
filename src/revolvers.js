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
       },
       async users(){
             return await User.find();
        
       }
   },
   Mutation: {
       createTask(_, { input }){
        input._id = task.length;
        task.push(input);
         return input;
       },
       async createUser(_, { input }){
        const newUser = new User(input);
         await newUser.save();
        console.log(newUser);
           return newUser;
        },
        async deleteUser(_, { _id }){
          return await User.findByIdAndDelete(_id);
        }
   }
};

