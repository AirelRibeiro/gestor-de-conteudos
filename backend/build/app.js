"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Content_route_1 = __importDefault(require("./routes/Content.route"));
const errorMiddleware_1 = __importDefault(require("./middlewares/errorMiddleware"));
require('express-async-errors');
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(Content_route_1.default);
app.use(errorMiddleware_1.default);
exports.default = app;
