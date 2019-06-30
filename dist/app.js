"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 第三方模块
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
// 自定义模块
const config_1 = require("./config");
const app = express_1.default();
// 处理 post 请求的请求体，限制大小最多为 20 兆
app.use(body_parser_1.default.urlencoded({ limit: '20mb', extended: true }));
app.use(body_parser_1.default.json({ limit: '20mb' }));
// error handler
app.use(function (err, req, res, next) {
    return res.sendStatus(500);
});
app.listen(config_1.systemConfig.port, function () {
    console.log(`the server is start at port ${config_1.systemConfig.port}`);
});
