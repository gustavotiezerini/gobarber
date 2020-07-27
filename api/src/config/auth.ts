export default {
  jwt: {
    secret: process.env.APP_SECRET || 'johndoe',
    expiresIn: '1d',
  },
};
