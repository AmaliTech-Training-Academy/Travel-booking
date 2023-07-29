"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_PORT = exports.HOST = exports.DB_NAME = exports.USER = exports.API_SECRET = exports.API_KEY = exports.CLOUD_NAME = exports.POSTGRES_URL = exports.EMAIL_PWD = exports.EMAIL_USER = exports.SECRET = exports.PASSWORD = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT;
exports.PASSWORD = process.env.PASSWORD;
exports.SECRET = process.env.SECRET;

exports.EMAIL_USER = process.env.EMAIL_USER;
exports.EMAIL_PWD = process.env.EMAIL_PWD;

exports.POSTGRES_URL = process.env.POSTGRES_URL;
exports.CLOUD_NAME = process.env.CLOUD_NAME;
exports.API_KEY = process.env.API_KEY;
exports.API_SECRET = process.env.API_SECRET;
exports.USER = process.env.USER;
exports.DB_NAME = process.env.DB_NAME;
exports.HOST = process.env.HOST;
exports.DB_PORT = process.env.DB_PORT;