const koa = require('koa')
const Router = require('koa-router')
const mongoose = require('mongoose')

const app = new koa()
const router = new Router()

router.get('/', async ctx => {
  ctx.body = { msg: 'Hello Koa Interfaces' }
})
const db=require("./config/keys").mongoURI
// 连接数据库
mongoose
  .connect(db
    ,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => {
    console.log('======连接成功')
  })
  .catch(err => {
    console.log(err)
  })

app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`=======server started on http://localhost:${port}`)
})
