import express from "express";
import {
  checkShopkeeper,
  createShopkeeper,
  getShopkeeper,
  getShopkeepers,
} from "../database/shopkeeper_controllers.js";
import { addItem, showShopkeeperItems } from "../database/items_controllers.js";
import {
  deleteLiveOrder,
  showLiveOrder,
  getUniqueUsers,
} from "../database/live_order_controller.js";
import { showOrder, updateOrder } from "../database/orders_controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("This is shopkeeper routes");
  return res.send("This is shopkeeper routes");
});

// For shopkeeper login
router.post("/login", async (req, res) => {
  const result = await checkShopkeeper(req.body.Email, req.body.Password);
  return res.send(result);
});

// For shopkeeper signup
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

// To show the details of shopkeeper
router.get("/profile/:id", async (req, res) => {
  const shopkeeperId = req.params.id;
  const result = await getShopkeeper(shopkeeperId);
  return res.send(result);
});

// To get all the restraunts to user
router.get("/get-restaurants", async (req, res) => {
  const result = await getShopkeepers();
  return res.send(result);
});

// To add an item to his shop
router.post("/add-item", async (req, res) => {
  const itemData = {
    ShopkeeperID: req.body.ShopkeeperID,
    ItemName: req.body.ItemName,
    Description: req.body.Description,
    Price: req.body.Price,
    ImageURL: req.body.ImageURL,
    ExpectedTime: req.body.ExpectedTime,
    CousineType: req.body.CousineType,
  };
  const result = await addItem(itemData);
  return res.status(result[0]).send(result[1]);
});

// To show all the items shopkeeper has added to his shop.
router.get("/catalogue/:id", async (req, res) => {
  const shopkeeperId = req.params.id;
  const result = await showShopkeeperItems(shopkeeperId);
  return res.send(result);
});

// To show all the live order shopkeeper is having.
router.get("/live-orders/:id", async (req, res) => {
  const shopkeeperId = req.params.id;
  const result = await showLiveOrder(shopkeeperId);
  const uniqueUsers = await getUniqueUsers(shopkeeperId);
  return res.send({
    "items":result,
    "uniqueUsers":uniqueUsers
  });
});


// To show all the order shopkeeper has taken till now.
router.get("/orders-taken/:id", async (req, res) => {
  const shopkeeperId = req.params.id;
  const result = await showOrder(shopkeeperId);
  if (result.length == 0) {
    return res.send("No orders taken till now!");
  }
  return res.send(result);
});

// To show all the order shopkeeper has taken till now.
router.put("/update-order-status/:id", async (req, res) => {
  const shopkeeperId = req.params.id;
  const result = await updateOrder(shopkeeperId, req.body);
  if (result.length == 0) {
    return res.send("No orders Updated!");
  }
  return res.send(result);
});

// To delete the live order
router.get("delete-live-orders/:id", async (req, res) => {
  const shopkeeperId = req.params.id;
  const ItemID = req.body.ItemID;
  const UserID = req.body.UserID;
  const result = await deleteLiveOrder(shopkeeperId, ItemID, UserID);
  return res.send(result);
});

export default router;
