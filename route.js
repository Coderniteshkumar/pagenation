import express from "express"
import { createpost,posts} from "./controller.js";
const route=express.Router()

route.post("/create",createpost);
route.get("/posts",posts);
export default route

