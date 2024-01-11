import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
    console.log("This is shopkeeper routes");
    return res.send("This is shopkeeper routes");
});

router.post("/", (req,res)=>{
    console.log("This is shopkeeper routes");
    return res.send("This is shopkeeper routes");
});

export default router;