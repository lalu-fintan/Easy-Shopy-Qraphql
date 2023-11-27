"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const userTypeDef = (0, apollo_server_express_1.gql) `
  type User {
    id: ID!
    userName: String!
    email: String!
    password: String!
    role: String!
    profile: String!
  }

  type AuthResponse {
    user: User!
    token: String!
  }

  type Message {
    message: String!
  }

  type Query {
    getUserData(id: ID!): User
    getData: Message
  }

  type Mutation {
    register(userName: String!, email: String!, password: String!): AuthResponse
    login(email: String!, password: String!): AuthResponse
    logout: Message
  }
`;
exports.default = userTypeDef;
//# sourceMappingURL=userTypeDef.js.map