import { Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router()
router.post("/user", async (ctx) => {
    const { value } = await ctx.request.body()
    ctx.response.status = 201;
    ctx.response.body = await value;
})


router.get("/user/:id", (ctx) => {
    ctx.response.body = ctx.params.id
})

export default router