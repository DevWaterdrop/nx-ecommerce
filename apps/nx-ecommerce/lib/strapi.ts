const fullAccessToken = process.env['NX_FULL_ACCESS_TOKEN'];

export const init: RequestInit = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${fullAccessToken}`,
  },
};
