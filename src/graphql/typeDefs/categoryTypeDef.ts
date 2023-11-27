import { gql } from "apollo-server-express";

const categoryTypeDef = gql`
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

export default categoryTypeDef;
