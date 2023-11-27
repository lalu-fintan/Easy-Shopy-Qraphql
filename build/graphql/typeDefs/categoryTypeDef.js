"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const categoryTypeDef = (0, apollo_server_express_1.gql) `
  type Category {
    id: ID!
    name: String!
  }

  type Message {
    message: String!
  }

  type Query {
    getCategoryById(id: ID!): Category
    getAllCategory: [Category!]!
  }

  input CategoryInput {
    name: String!
  }

  type Mutation {
    createCategory(input: CategoryInput): Message
    updateCategory(id: ID!, input: CategoryInput): Message
    deleteCategory(id: ID!): Message
  }
`;
exports.default = categoryTypeDef;
//# sourceMappingURL=categoryTypeDef.js.map