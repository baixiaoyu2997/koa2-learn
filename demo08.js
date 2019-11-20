const Koa=require('koa')
const Router=require('koa-router')

const app=new Koa()

const home=new Router();

home.get('/lrain',async(ctx,next)=>{
    ctx.body="home hello"
}).get('/todo',async(ctx)=>{
    ctx.body="home todo"
})

const page=new Router()
page.get('/lrain',async(ctx,next)=>{
    ctx.body="page hello"
}).get('/todo',async(ctx)=>{
    ctx.body="page todo"
})
// 父级路由
let router=new Router();
router.use('/home',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),page.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('starting at port 3000')
})
