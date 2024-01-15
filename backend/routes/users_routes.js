import express from "express";
import { checkUser, createUser } from "../database/user_controllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("This is user routes");
  return res.send("This is user routes");
});

router.post("/login", async (req, res) => {
  const result = await checkUser(req.body.Email, req.body.Password);
  return res.send(result);
});

router.post("/signup", async (req, res) => {
  const userData = {
    Name: req.body.Name,
    UserName: req.body.UserName,
    Password: req.body.Password,
    PhoneNo: req.body.PhoneNo,
    Email: req.body.Email,
    UserType: req.body.UserType,
    AddressLine1: req.body.AddressLine1,
    AddressLine2: req.body.AddressLine2,
    City: req.body.City,
    State: req.body.State,
    PostalCode: req.body.PostalCode,
    Country: req.body.Country,
  };
  const result = await createUser(userData);
  return res.send(result);
});

export default router;
