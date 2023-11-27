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
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
const apollo_server_express_1 = require("apollo-server-express");
const Types_1 = __importDefault(require("./graphql/typeDefs/Types"));
const resolvers_1 = __importDefault(require("./graphql/resolvers/resolvers"));
const apollo_server_core_1 = require("apollo-server-core");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    const port = process.env.PORT || 5000;
    (0, dbConfig_1.default)();
    // app.use("/graphql", authentication);
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: Types_1.default,
        resolvers: resolvers_1.default,
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
    });
    yield server.start();
    server.applyMiddleware({ app: app, path: "/graphql" });
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.listen(port, () => {
        console.log(`server running on ${port}`);
    });
});
startServer();
//# sourceMappingURL=index.js.map