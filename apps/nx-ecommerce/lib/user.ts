import { nanoid } from 'nanoid';
import {
  FastUserEntityResponse,
  FastUserEntityResponseCollection,
} from '@nx-ecommerce/shared/graphql/types';
import { getStrapiURL } from '@nx-ecommerce/shared/utils/get-strapi-url';

const fullAccessToken = process.env['NX_FULL_ACCESS_TOKEN'];
const init: RequestInit = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${fullAccessToken}`,
  },
};

export const check = async (token: string) => {
  const { data }: FastUserEntityResponseCollection = await fetch(
    getStrapiURL(`/api/fast-users?filters[token][$eq]=${token}`),
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

  if (!data?.attributes?.token) throw new Error();
  return data.attributes.token;
};

export const user = {
  create,
  check,
};
