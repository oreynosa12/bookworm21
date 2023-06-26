import { gql } from '@apollo/client';

export const QUERY_GET_ME = gql`
  query get_me {
    user {
      name
      email
    }
  }
`;

export const QUERY_BOOK = gql`
  query Book {
    book {
      name
      description
      bookId
      image
      link
    }
  }
`;