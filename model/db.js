// 连接数据库
const mongoose = require('mongoose')
mongoose.connect(
  'mongod://localhost:27017/eggcms',
  { useNewUrlParser: true },
  (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('===========数据库连接成功')
  }
)
module.exports = mongoose
