const { User, Book } = require('../models');

const resolvers = {
    Query: {
      User: async () => {
        return await User.find({});
      },
      Book: async () => {
        return await Book.find({});
      }
    }
  };
  
  module.exports = resolvers;

