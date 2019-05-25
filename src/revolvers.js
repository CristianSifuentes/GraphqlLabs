//Se crean funciones

export const resolvers = {
   Query: {
       hello: () => {
           return 'Holla mundo desde GraphQL'
       },
       greet(root, { name }) {
           return `Hola mi nombre es ${name}!`;
       }
   }
};