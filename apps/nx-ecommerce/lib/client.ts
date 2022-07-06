import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(process.env.NX_GRAPHQL_URL as string, {
  headers: {},
});
