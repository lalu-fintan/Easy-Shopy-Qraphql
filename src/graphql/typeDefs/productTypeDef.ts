import { gql } from "apollo-server-express";

const productTypeDef = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    Category: Category
    price: Float!
    imageUrls: [String!]!
    colors: [Colors]!
    comment: Comments
    rating: Ratings
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Category {
    id: ID!
    name: String!
  }

  type Colors {
    id: ID!
    name: String!
  }

  type Comments {
    userId: User
    message: String!
  }

  type Ratings {
    userId: User
    stars: Float!
  }

  type DeleteResult {
    message: String!
  }

  type Message {
    message: String!
  }

  type Query {
    getProductById(id: ID!): Product
    getAllProducts(first: Int, offSet: Int): [Product]
  }

  input ProductInput {
    name: String!
    description: String!
    price: Float!
    imageUrls: [String]
    colors: [ID]
    Comments: [ID]
    rating: [RatingInput]
  }

  input RatingInput {
    userId: ID!
    starts: Float!
  }
  type Mutation {
    createProduct(input: ProductInput): Message
    updateProduct(id: ID!, input: ProductInput): Message
    deleteProduct(id: ID!): DeleteResult
  }

  scalar DateTime
`;

export default productTypeDef;
