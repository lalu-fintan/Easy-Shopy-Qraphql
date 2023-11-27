"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryMode_1 = __importDefault(require("../../models/categoryMode"));
const CategoryResolver = {
    Query: {
        getAllCategory: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const category = yield categoryMode_1.default.find();
                return category;
            }
            catch (error) {
                throw new Error(error);
            }
        }),
        getCategoryById: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            const category = yield categoryMode_1.default.findById(id);
            return category;
        }),
    },
    Mutation: {
        createCategory: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const category = yield categoryMode_1.default.create(input);
                return { message: "category Created successfully" };
            }
            catch (error) {
                throw new Error(error);
            }
        }),
        updateCategory: (_, { id, input }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const category = yield categoryMode_1.default.findByIdAndUpdate(id, input, {
                    new: true,
                });
                return { message: "category updated successfully" };
            }
            catch (error) {
                throw new Error(error);
            }
        }),
        deleteCategory: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const category = yield categoryMode_1.default.findByIdAndDelete(id);
                return { message: "category deleted successfully" };
            }
            catch (error) {
                throw new Error(error);
            }
        }),
    },
};
exports.default = CategoryResolver;
//# sourceMappingURL=categoryResolver.js.map