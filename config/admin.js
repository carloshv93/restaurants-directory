module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '28755c90a81452e946f969c9bd8b91a4'),
  },
});
