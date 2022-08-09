export function getBaseURL(path = '') {
  return `${
    (process.env['NX_BASE_URL'] as string) || window.location.origin
  }${path}`;
}
