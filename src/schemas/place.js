import { Place, placeTC} from '../models/place';

const placeQuery = {
    placeById: placeTC.getResolver('findById'),
    placeByIds: placeTC.getResolver('findByIds'),
    placeOne: placeTC.getResolver('findOne'),
    placeMany: placeTC.getResolver('findMany'),
    placeCount: placeTC.getResolver('count'),
};

const placeMutation = {
    placeCreateOne: placeTC.getResolver('createOne'),
    placeCreateMany: placeTC.getResolver('createMany'),
    placeUpdateById: placeTC.getResolver('updateById'),
    placeUpdateOne: placeTC.getResolver('updateOne'),
    placeUpdateMany: placeTC.getResolver('updateMany'),
    placeRemoveById: placeTC.getResolver('removeById'),
    placeRemoveOne: placeTC.getResolver('removeOne'),
    placeRemoveMany: placeTC.getResolver('removeMany'),
};

export default { placeQuery, placeMutation };