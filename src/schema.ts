import { gql } from "apollo-server-express";

export default gql`
  type Message {
    _id: ID!
    text: String!
  }
  type Query {
    testMessage: Message!
  }
`;
