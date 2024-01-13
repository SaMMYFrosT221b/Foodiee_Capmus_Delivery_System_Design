import express from "express";
import { checkUser } from "../database/user_controllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("This is user routes");
  return res.send("This is user routes");
});

router.post("/login", async (req, res) => {
  const result = await checkUser(req.body.Email, req.body.Password);
  return res.send(result);
});

export default router;
