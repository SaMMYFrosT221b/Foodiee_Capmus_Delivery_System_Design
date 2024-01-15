import express from "express";
import {
  checkShopkeeper,
  createShopkeeper,
} from "../database/shopkeeper_controllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("This is shopkeeper routes");
  return res.send("This is shopkeeper routes");
});

router.post("/login", async (req, res) => {
  const result = await checkShopkeeper(req.body.Email, req.body.Password);
  return res.send(result);
});

router.post("/signup", async (req, res) => {
  const shopkeeperData = {
    Name: req.body.Name,
    ShopUserName: req.body.ShopUserName,
    Password: req.body.Password,
    Email: req.body.Email,
    PhoneNo: req.body.PhoneNo,
    ShopName: req.body.ShopName,
    ShopNo: req.body.ShopNo,
    BankName: req.body.BankName,
    AccountNo: req.body.AccountNo,
    GSTNo: req.body.GSTNo,
    GovIDType: req.body.GovIDType,
    GovID: req.body.GovID,
    AddressLine1: req.body.AddressLine1,
    AddressLine2: req.body.AddressLine2,
    City: req.body.City,
    State: req.body.State,
    PostalCode: req.body.PostalCode,
    Country: req.body.Country,
  };
  const result = await createShopkeeper(shopkeeperData);
  return res.status(200).send(result);
});

export default router;
