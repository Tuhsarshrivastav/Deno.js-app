import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const app = new Application()
const router = new Router()


router.get('/user',(ctx)=>{

    ctx.response.body ="I am a user"
})

app.use(router.routes())

app.use((ctx)=>{
    ctx.response.body = 'hello world'
});
console.log("server has started at 4000")
await app.listen({port:4000})