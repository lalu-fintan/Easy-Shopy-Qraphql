"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authentication = (req, res, next) => {
    const token = req.header("x-auth-token");
    const exclude = ["/graphql/login", "/graphql/register"];
    try {
        if (exclude.includes(req.url))
            return next();
        if (!token) {
            throw new Error("you don't have a token");
        }
        else {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_TOKEN);
            req.user = decoded;
            next();
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.default = authentication;
//# sourceMappingURL=authMiddleware.js.map