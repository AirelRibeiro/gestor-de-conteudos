"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
require('express-async-errors');
const Content_1 = __importDefault(require("../database/models/Content"));
const History_1 = __importDefault(require("../database/models/History"));
const Content_service_1 = __importDefault(require("../services/Content.service"));
const History_service_1 = __importDefault(require("../services/History.service"));
const Content_controller_1 = __importDefault(require("../controllers/Content.controller"));
const validateContent_1 = __importDefault(require("../middlewares/validateContent"));
const contentRoute = express.Router();
const contentController = new Content_controller_1.default(new Content_service_1.default(Content_1.default, History_1.default), new History_service_1.default(History_1.default));
contentRoute.post('/', validateContent_1.default, (req, res) => {
    contentController.create(req, res);
});
contentRoute.get('/search', (req, res, next) => {
    contentController.findByTitle(req, res, next);
});
contentRoute.get('/:id', (req, res, next) => {
    contentController.findHistory(req, res, next);
});
contentRoute.get('/', (req, res) => {
    contentController.findAll(req, res);
});
contentRoute.put('/:id', validateContent_1.default, (req, res, next) => {
    contentController.update(req, res, next);
});
contentRoute.delete('/:id', (req, res, next) => {
    contentController.delete(req, res, next);
});
exports.default = contentRoute;
