import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './routes.ts'
import notfound from './404.ts'
const app = new Application()






app.use(router.routes())

app.use(notfound);
console.log("server has started at 4000")
await app.listen({ port: 4000 })