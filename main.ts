import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import router from './routes.ts'
import notfound from './404.ts'

const env = config()
const app = new Application()
const Host = env.APP_HOST
const PORT = +env.APP_PORT || 4000

app.use(router.routes())

app.use(notfound);
console.log(`server is started at ${Host}:${PORT}`)
await app.listen({ port: PORT })