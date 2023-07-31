"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customersAuth_1 = require("../controllers/customersAuth");
const verifyToken_1 = require("../middlewares/verifyToken");
const router = express_1.default.Router();
router.post('/signup', customersAuth_1.register);
router.post('/login', customersAuth_1.login);
router.post('/logout', verifyToken_1.verifyUser, customersAuth_1.logout);
router.get('/:id/verify/:token', customersAuth_1.verifyEmail);
exports.default = router;
