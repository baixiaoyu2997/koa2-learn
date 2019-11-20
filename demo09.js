const Koa=require('koa')
const Router=require('koa-router')

const app=new Koa()

// 父级路由
let router=new Router();
router.get('/',async (ctx)=>{
    ctx.body=ctx.query
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('starting at port 3000')
})
