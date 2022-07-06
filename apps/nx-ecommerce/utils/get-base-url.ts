export function getBaseURL(path = '') {
  return `${
    (process.env['NX_BASE_URL'] as string) || 'http://localhost:1337'
  }${path}`;
}
