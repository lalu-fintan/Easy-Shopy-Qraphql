"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userResolver_1 = __importDefault(require("./userResolver"));
const productResolver_1 = __importDefault(require("./productResolver"));
const categoryResolver_1 = __importDefault(require("./categoryResolver"));
const resolvers = Object.assign(Object.assign(Object.assign({}, userResolver_1.default), productResolver_1.default), categoryResolver_1.default);
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map