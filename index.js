const Koa =require('koa')
const app=new Koa()

app.use(async(ctx)=>{
    ctx.body="hellow koa2"
})
app.listen(3000)
console.log('[demo]')