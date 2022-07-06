export function getStrapiURL(path = '') {
  return `${
    (process.env['NX_STRAPI_URL'] as string) || 'http://localhost:4200'
  }${path}`;
}
