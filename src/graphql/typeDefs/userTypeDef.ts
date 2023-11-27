import { gql } from "apollo-server-express";

const userTypeDef = gql`
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

export default userTypeDef;
