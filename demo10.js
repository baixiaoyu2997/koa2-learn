const Koa=require('koa')
const app=new Koa();
app.use(async(ctx)=>{
    debugger
    if(ctx.url==='/index'){
        ctx.cookies.set(
            'MyName','L.Rain',{
                maxAge:1000*60*60,
                expires:new Date('2019-12-10'),
                httpOnly:false,
                overwriter:false
            }
        )
        ctx.body='Cookie is OK'
    }else{
        if(ctx.cookies.get('MyName')){
            ctx.body=ctx.cookies.get('MyName')
        }else{

            ctx.body='hello world'
        }
    }
})
app.listen('3000',()=>{
    console.log('start')
})