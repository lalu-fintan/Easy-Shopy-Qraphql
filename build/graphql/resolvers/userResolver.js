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
const userModel_1 = __importDefault(require("../../models/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = __importDefault(require("../../utils/jwt"));
const userResolver = {
    Query: {
        getUserData: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.default.findById(id).select("userName email");
                return user;
            }
            catch (error) {
                throw new Error(error.message);
            }
        }),
        getData: () => __awaiter(void 0, void 0, void 0, function* () {
            return { message: "hello" };
        }),
    },
    Mutation: {
        register: (_, { userName, email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const existUser = yield userModel_1.default.findOne({ email });
                if (existUser) {
                    throw new Error("Email already Exist");
                }
                const hashPassword = yield bcrypt_1.default.hash(password, 10);
                const user = yield userModel_1.default.create({
                    userName,
                    email,
                    password: hashPassword,
                });
                const token = (0, jwt_1.default)(user === null || user === void 0 ? void 0 : user.id, user === null || user === void 0 ? void 0 : user.role);
                return { user, token };
            }
            catch (error) {
                throw new Error(error);
            }
        }),
        login: (_, { email, password }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.default.findOne({ email });
                if (user && (yield bcrypt_1.default.compare(password, user.password))) {
                    const token = (0, jwt_1.default)(user === null || user === void 0 ? void 0 : user.id, user === null || user === void 0 ? void 0 : user.role);
                    return { user, token };
                }
                else {
                    throw new Error("Invalid Email or Password");
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        }),
        logout: () => {
            return { message: "Logout successful" };
        },
    },
};
exports.default = userResolver;
//# sourceMappingURL=userResolver.js.map