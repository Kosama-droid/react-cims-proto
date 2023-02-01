// server/index.js
//imports
import canada from '../../public/canada.js';
import dotenv from 'dotenv';
import connection from '../utils/db.js';
import { ApolloServer } from 'apollo-server-express';
import place from '../schemas/place';

//installed modules
import express from "express";
import mongoose from "mongoose";
import mongodb from "mongodb";

mongoose.set('strictQuery', false);

dotenv.config();

//local modules(??)
const PORT = process.env.PORT || 3000;

const app = express();

const server = new ApolloServer({
  schema,
  cors: true,
  playground: process.env.NODE_ENV ==='development' ? true : false,
  introspection: true,
  tracing: true,
  path: '/',
});

server.applyMiddleware({
  app,
  path: '/',
  cors: true,
  onHealthCheck: () =>
      // eslint-disable-next-line no-undef
      new Promise((resolve, reject) => {
          if (mongoose.connection.readyState > 0) {
              resolve();
          } else {
              reject();
          }
      }),
})

//middlewares


//has to be before the PORT connection (look into why)
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

mongoose.connect(`mongodb://localhost/prototype`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})

//Defining Place schema
const placeSchema = new mongoose.Schema(
  {
    "name": String,
    "id": String,
    "city": String,
    "placeGeojson": String,
  }
)

//Defining Place model
const Place = mongoose.model(`Place`, placeSchema)

//Creating collection of Model
Place.createCollection().then(function (collection){
  console.log("Place collection is created!")
})

function insertPlaces(){
  console.log("adding to Place collection");
  
}

export default app;

//cf: https://www.tutorialspoint.com/graphql/graphql_example.htm <-- graphQL on top of express
//cf: https://dev.to/pratham10/how-to-set-up-a-node-js-express-server-for-react-2fja <-- setting up a node/express backend for our react
//cf: https://www.geeksforgeeks.org/mongoose-model-createcollection-api/ <-- mongoose collections and models
//cf: https://github.com/gitdacode/express-react-boilerplate/tree/master/server <-- git example of the above article || setting up a react account with node and express
//cf: https://stackoverflow.com/questions/67254140/is-it-possible-to-run-node-and-react-in-the-same-port <--git thread for connecting react and node server on the same port