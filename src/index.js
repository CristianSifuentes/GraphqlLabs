import express from "express";

console.log('Testing');

const app = express();

app.listen(3000, () => {
  console.log('Estoy creando un sevridor');
});