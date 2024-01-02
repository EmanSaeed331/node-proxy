"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const express_1 = require("express");
const http_proxy_middleware_1 = require("http-proxy-middleware");
const router = (0, express_1.Router)();
const app = express();
const port = 3000;
const options = {
    target: 'https://jsonplaceholder.typicode.com/users', // target host
    changeOrigin: true,
    pathRewrite: {
        [`^/api/users/all`]: '',
    },
};
router.get('/all', (0, http_proxy_middleware_1.createProxyMiddleware)(options));
app.listen(port, () => {
    console.log(`Server is up on port number ${port}`);
});
//# sourceMappingURL=index.js.map