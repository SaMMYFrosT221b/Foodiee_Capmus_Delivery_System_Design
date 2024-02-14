import express from "express";
import {
  checkDeliveryBoy,
  createDeliveryBoy,
} from "../database/deliveryboy_controllers.js";
import {showLiverOrdersReadyToDeliver}
from "../database/live_order_controller.js"

const router = express.Router();

router.get("/", (req, res) => {
  console.log("This is deliveryboy routes");
  return res.send("This is deliveryboy routes");
});

router.post("/login", async (req, res) => {
  const result = await checkDeliveryBoy(req.body.Email, req.body.Password);
  return res.send(result);
});

router.post("/signup", async (req, res) => {
  const deliveryData = {
    UserName: req.body.UserName,
    Name: req.body.Name,
    Password: req.body.Password,
    PhoneNo: req.body.PhoneNo,
    GovIDType: req.body.GovIDType,
    GovID: req.body.GovID,
    BankName: req.body.BankName,
    AccountNo: req.body.AccountNo,
  };
  const result = await createDeliveryBoy(deliveryData);
  return res.send(result);
});

// live-delivery orders
router.get("/live-delivery-orders", async (req, res) => {
  const result = await showLiverOrdersReadyToDeliver();
  // console.log("We got",result[0]);
  return res.send(result);
});
export default router;
