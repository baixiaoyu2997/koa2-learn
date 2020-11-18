const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/eggcms', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: Number
})

const User = mongoose.model('user', UserSchema)

// 查找数据
// User.find({},(err,doc)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(doc)
// })

// 新增数据
// const u=new User({
//   name:'李四7',
//   age:'123',
//   status:1
// })
// console.log(u)
// u.save().then((data)=>{
//   console.log('成功')
//   console.log(data)
// }).catch(err=>{
//   console.log('失败')
//   console.log(err)
// })

// 修改数据
// User.updateOne({ _id: '5fb48fc35c3682c1cae0140c' }, { name: '李四6' })
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// 删除数据
// User.deleteOne({ _id: '5fb48fc35c3682c1cae0140c' })
//   .then(result => {
//     console.log(result)
//   })
//   .catch(err => {
//     console.log(err)
//   })
