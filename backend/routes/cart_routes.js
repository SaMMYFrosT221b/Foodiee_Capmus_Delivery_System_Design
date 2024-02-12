import express from "express";
import {
  addToCart,
  getItemsByUser,
  deleteItem,
  removeUserItems,
} from "../database/cart_controller.js";

const router = express.Router();

router.post("/add-to-cart", async (req, res) => {
  const cartData = req.body;
  const result = await addToCart(cartData);
  return res.send(result);
});

router.post("/get-item-by-user", async (req, res) => {
  const userID = req.body.UserID;
  const result = await getItemsByUser(userID);
  return res.send(result);
});

router.post("/delete-item-from-cart", async (req, res) => {
  const userID = req.body.UserID;
  const itemID = req.body.itemID;
  const result = await deleteItem(userID, itemID);
  return res.send(result);
});

router.post("/delete-user-items", async (req, res) => {
  const userID = req.body.UserID;
  const result = await removeUserItems(userID);
  return res.send(result);
});

export default router;
