export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8db22010301dd405873c6d00a5e3c77c'),
  },
});
