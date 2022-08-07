import {
  GlobalSeoDocument,
  GlobalSeoQuery,
} from '@nx-ecommerce/shared/graphql/types';
import { client } from '../lib/client';

export const getGlobalSeo = () =>
  client.request<GlobalSeoQuery>(GlobalSeoDocument);

export type ReturnGetGlobalSeo = Awaited<ReturnType<typeof getGlobalSeo>>;
export type GlobalSeo = NonNullable<
  NonNullable<NonNullable<GlobalSeoQuery['globalSeo']>['data']>['attributes']
>;
