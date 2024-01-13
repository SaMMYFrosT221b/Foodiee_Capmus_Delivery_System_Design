import express from "express";
import { checkDeliveryBoy } from "../database/deliveryboy_controllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("This is deliveryboy routes");
  return res.send("This is deliveryboy routes");
});

router.post("/login", async (req, res) => {
  const result = await checkDeliveryBoy(req.body.Email, req.body.Password);
  return res.send(result);
});

export default router;
