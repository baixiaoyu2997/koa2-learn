const Koa=require('koa')
const app=new Koa()
const fs=require('fs')

function render(page){
    return new Promise((resolve,reject)=>{
        let pageUrl= './page/'+page;
        fs.readFile(pageUrl,'binary',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
async function route(url){
    let page='404.html'
    switch(url){
        case '/':
            page='index.html'
            break
        case '/index':
            page='index.html'
            break;
        case '/todo':
            page="todo.html";
            break;
        case '/404':
            page="404.html"
            break;
        default:
            break;
    }
    let html=await render(page)
    console.log(html)
    return html
}
app.use(async(ctx)=>{
    let url=ctx.request.url;
    ctx.body=await route(url)
})
app.listen(3000)