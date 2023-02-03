import { makeExecutableSchema } from 'graphql-tools';
import Resolvers from './resolvers';
import Schema from './schema';

export const schema = makeExecutableSchema({
	typeDefs: Schema,
	resolvers: Resolvers,
});
