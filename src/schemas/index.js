import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { PlaceQuery, PlaceMutation } from './place';

schemaComposer.Query.addFields({
    ...PlaceQuery,
});

schemaComposer.Mutation.addFields({
    ...PlaceMutation,
});

export default schemaComposer.buildSchema();