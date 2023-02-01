/* schema.js */

import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

const { buildSchema } = require("graphql");

const PlaceSchema = new Schema(
    {
        name: {type: String},
        id: {type: String},
        city: {type: String},
        placeGeojson: {type: String}
    },
    {
        collection: 'places',
    }
);

PlaceSchema.plugin(timestamps);

PlaceSchema.index({ createdAt: 1, updatedAt: 1 });

export default Place = mongoose.model('Place', PlaceSchema);
export const placeTC = composeWithMongoose(Place);


// cf - https://www.ibrahima-ndaw.com/blog/graphql-api-express-mongodb/ <-- Create a GraphQL API with Node, Mongoose and Express // seems abit more starighfoward than the one below.
//--> video - https://www.youtube.com/watch?v=0bYf1wcOK9o
 //cf - https://getstream.io/blog/tutorial-create-a-graphql-api-with-node-mongoose-and-express/ <-- Create a GraphQL API with Node, Mongoose and Express !!!!! (bon they don't mention react mais i think its aight).
