import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
    console.log("This is deliveryboy routes");
    return res.send("This is deliveryboy routes");
});

router.post("/", (req,res)=>{
    console.log("This is deliveryboy routes");
    return res.send("This is deliveryboy routes");
});

export default router;