"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("@graphql-tools/merge");
const userTypeDef_1 = __importDefault(require("./userTypeDef"));
const productTypeDef_1 = __importDefault(require("./productTypeDef"));
const categoryTypeDef_1 = __importDefault(require("./categoryTypeDef"));
const typeDefs = (0, merge_1.mergeTypeDefs)([userTypeDef_1.default, productTypeDef_1.default, categoryTypeDef_1.default]);
exports.default = typeDefs;
//# sourceMappingURL=Types.js.map