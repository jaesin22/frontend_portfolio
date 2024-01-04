// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/oauth',
    createProxyMiddleware({
      target: 'https://www.tistory.com',
      changeOrigin: true,
    })
  );
};
