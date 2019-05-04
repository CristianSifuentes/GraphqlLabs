import express from "express";
import graphqlHTTP  from "express-graphql";

console.log('Testing');

const app = express();

app.get('/', (req, res) => {
  return res.json(
     {
       message : 'Hola!'
     })
});

app.use('/graphql', graphqlHTTP ({

}));

app.listen(3000, () => {
  console.log('Estoy creando un sevridor');
});