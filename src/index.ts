const express = require('express');
import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
const router = Router();
const app = express();
const port = 3000;
const options = {
  target: 'https://jsonplaceholder.typicode.com/users', // target host
  changeOrigin: true,
  pathRewrite: {
    [`^/api/users/all`]: '',
  },
};
//router.get('/', createProxyMiddleware(options));
//app.use('/*', createProxyMiddleware(options));
app.use(router);

router.get('/*', createProxyMiddleware(options));
app.listen(port, () => {
  console.log(`Server is up on port number ${port}`);
});
