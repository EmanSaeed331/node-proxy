"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var express_1 = require("express");
var http_proxy_middleware_1 = require("http-proxy-middleware");
var router = (0, express_1.Router)();
var app = express();
var port = 3000;
var options = {
    target: 'https://jsonplaceholder.typicode.com/users', // target host
    changeOrigin: true,
    pathRewrite: (_a = {},
        _a["^/api/users/all"] = '',
        _a),
};
router.get('/all', (0, http_proxy_middleware_1.createProxyMiddleware)(options));
app.listen(port, function () {
    console.log("Server is up on port number ".concat(port));
});
