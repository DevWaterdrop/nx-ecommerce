import { nanoid } from 'nanoid';
import {
  FastUserEntityResponse,
  FastUserEntityResponseCollection,
} from '@nx-ecommerce/shared/graphql/types';
import { getStrapiURL } from '@nx-ecommerce/shared/utils/get-strapi-url';
import { init } from './strapi';

export const check = async (token: string) => {
  const { data }: FastUserEntityResponseCollection = await fetch(
    getStrapiURL(`/api/fast-users?filters[token][$eq]=${token}&populate=deep`),
    { ...init }
  ).then((res) => res.json());

  return data;
};

export const create = async () => {
  const body = JSON.stringify({ data: { token: nanoid(55) } });

  const { data }: FastUserEntityResponse = await fetch(
    getStrapiURL('/api/fast-users'),
    {
      method: 'POST',
      ...init,
      body,
    }
  ).then((res) => res.json());

  if (!data || !data.id || !data.attributes?.token) throw new Error();
  return { token: data.attributes.token, id: data.id };
};

export const user = {
  create,
  check,
};
