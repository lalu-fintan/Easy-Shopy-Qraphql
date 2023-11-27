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
const productModel_1 = __importDefault(require("../../models/productModel"));
const productResolver = {
    Query: {
        // limitation - pagination
        getAllProducts: (_, { first = 10, offSet = 0 }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const product = yield productModel_1.default.find().skip(offSet).limit(first);
                return product;
            }
            catch (error) {
                throw new Error(error);
            }
        }),
        getProductById: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const product = yield productModel_1.default.findById(id);
                return product;
            }
            catch (error) {
                throw new Error(error);
            }
        }),
    },
    Mutation: {
        createProduct: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const existProduct = yield productModel_1.default.findOne({ name: input === null || input === void 0 ? void 0 : input.name });
                if (existProduct) {
                    throw new Error("Product already exist");
                }
                const product = yield productModel_1.default.create(input);
                return { message: "Product created" };
            }
            catch (error) {
                throw new Error(error);
            }
        }),
        updateProduct: (_, { id, input }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const updatedProduct = yield productModel_1.default.findByIdAndUpdate(id, input, {
                    new: true,
                });
                return { message: "product details updated successfull" };
            }
            catch (error) {
                throw new Error(error);
            }
        }),
        deleteProduct: (_, { productId }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const deleteproduct = yield productModel_1.default.findByIdAndUpdate(productId);
                return { message: "product deleted successfull" };
            }
            catch (error) {
                throw new Error(error);
            }
        }),
    },
};
exports.default = productResolver;
//# sourceMappingURL=productResolver.js.map