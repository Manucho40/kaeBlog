module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3481696a457c2b92b87b9d1c776e07ea'),
  },
});
