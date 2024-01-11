import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
    console.log("This is user routes");
    return res.send("This is user routes");
});

router.post("/", (req,res)=>{
    console.log("This is user routes");
    return res.send("This is user routes");
});

export default router;