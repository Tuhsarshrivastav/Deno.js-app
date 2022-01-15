import { Router } from "https://deno.land/x/oak/mod.ts";
import UserController from './controllers/UserController.ts'

const router = new Router()
router.post("/user", UserController.index)
router.get("/user/:id", UserController.show)
router.post("/user", UserController.store)
router.patch("/user/:id", UserController.update)
router.delete("/user/:id", UserController.destroy)

export default router