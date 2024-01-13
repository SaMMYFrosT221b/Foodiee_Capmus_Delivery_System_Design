import express from "express";
import { checkShopkeeper } from "../database/shopkeeper_controllers.js";

const router = express.Router();

router.get("/", (req,res)=>{
    console.log("This is shopkeeper routes");
    return res.send("This is shopkeeper routes");
});

router.post("/login", async(req,res)=>{
    const result = await checkShopkeeper(req.body.Email, req.body.Password);
    return res.send(result);
});

export default router;