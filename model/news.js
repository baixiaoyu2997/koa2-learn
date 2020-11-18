const mongoose = require('./db')

const NewsSchema = mongoose.Schema({
  title: String,
  author: String,
  pic:String,
  content:String,
  status:{
      type:Number,
      default:1
  }
})
const NewsModel = mongoose.model('News',NewsSchema, 'news')

module.exports = NewsModel
