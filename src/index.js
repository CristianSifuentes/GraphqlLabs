import express from "express";
import graphqlHTTP  from "express-graphql";
import schema  from "./schema";

console.log('Testing');

const app = express();

app.get('/', (req, res) => {
  return res.json(
     {
       message : 'Hola!'
     })
});

//objeto donde esta todo lo que puedo consultar
// const schema = {};

app.use('/graphql', graphqlHTTP ({
   graphiql: true,
   schema: schema
}));

app.listen(4000, () => {
  console.log('Estoy creando un sevridor');
});