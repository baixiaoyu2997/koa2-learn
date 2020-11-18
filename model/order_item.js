const mongoose = require('./db')

const OrderItemSchema = mongoose.Schema({
  order_id: String,
  title:String,
  price:Number,
  num:Number,
})
const OrderModel = mongoose.model('OrderItem',OrderItemSchema, 'order_item')

module.exports = OrderModel
