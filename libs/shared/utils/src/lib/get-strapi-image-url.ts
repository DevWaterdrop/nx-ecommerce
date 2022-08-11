export function getStrapiImageURL(path = '') {
  const envURL = process.env['NX_STRAPI_IMG_URL'];

  if (envURL) return `${envURL}${path}`;

  return path;
}
