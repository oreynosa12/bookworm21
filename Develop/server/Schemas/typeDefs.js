const {gql} = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User

  }
  type Mutation{
    login(email:String, password:String ):Auth
    addUser(userName:String, email:String, password:String):Auth
    saveBook(authors:[String], description:String, title:String, bookId:String, image:String, link:String):User
    removeBook(bookId:String):User
  }
  type User{
    _id:String
    username:String
    email:String
    bookCount:Integer
    savedBooks:[book:String]
  }
  type Book{
    bookId:String
    authors:[author:String]
    description:String
    title:String
    image:String
    link:String
  }
  type Auth{
    token:String
    user:(user:String)
  }
`;


module.exports =  typeDefs 