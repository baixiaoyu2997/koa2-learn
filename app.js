const Koa=require('koa');
const app=new Koa();
const router=require('koa-router')()
const bodyParser=require('koa-bodyparser');

router.get('/',async (ctx)=>{
  ctx.body=`
  <form action="/signin" method="post">
    <p><label>用户名：</label><input type="text" name="name" ></p>
    <p><label>密码：</label><input type="password" name="password"></p>
    <button type="submit">submit</button>
  </form>
  `  
})
router.post('/signin',async (ctx)=>{
    const {name,password}=ctx.request.body
    if(name==='admin'&&password==='123456'){
        ctx.body='Welcome Admin!'
    }else{
        ctx.body=`
        <h1>Login failed</h1>
        <p><a href="/">Try again</a></p>
        `
    }
})
app.use(bodyParser())
app.use(router.routes())
app.listen(3000)
console.log('app started at port http://localhost:3000')