const mongoose = require('./db')

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: {
    type: Number,
    default: 1
  }
})
const UserModel = mongoose.model('User', userSchema, 'user')

module.exports = UserModel
