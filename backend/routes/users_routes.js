import express, { json } from "express";
import { checkUser, createUser } from "../database/user_controllers.js";
import { showItems } from "../database/items_controllers.js";
import { addLiveOrders } from "../database/live_order_controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("This is user routes");
  return res.status(200).send({ message: "This is user routes" });
});

router.post("/login", async (req, res) => {
  const result = await checkUser(req.body.Email, req.body.Password);
  return res.send(result);
});

router.post("/signup", async (req, res) => {
  const userData = {
    Name: req.body.name,
    UserName: req.body.username,
    Password: req.body.password,
    PhoneNo: req.body.phoneNo,
    Email: req.body.email,
    UserType: req.body.userType,
    AddressLine1: "Shopping center, Faculty building",
    AddressLine2: "Gate no 2, IIT Bhilai",
    City: "Durg",
    State: "Chattisgarh",
    PostalCode: "491001",
    Country: "INDIA",
  };
  // console.log("This is user data: ", userData);
  const result = await createUser(userData);
  return res.send(result);
});

// To add in live order (placeOrder)
router.post("/place-order", async (req, res) => {
  const itemData = {
    ItemID: req.body.ItemID,
    UserID: req.body.UserID,
    ShopkeeperID: req.body.ShopkeeperID,
    OrderStatus: req.body.OrderStatus,
    TotalQuantity: req.body.TotalQuantity,
    TotalAmount: req.body.TotalAmount,
  };

  const result = await addLiveOrder(itemData);
  return res.send(result);
});

router.get("/items", async (req, res) => {
  const result = await showItems();
  return res.send(result);
});

router.post("/add-live-orders", async (req, res) => {
<<<<<<< HEAD
  console.log("This is cart req body", typeof req.body);
=======
  console.log("This is cart req body", req.body);
>>>>>>> 02f13ad211f9ea87bab8642cc9fb09d1ea2735ff
  const liveOrderData = req.body;
  // console.log(liveOrderData.length);
  if (liveOrderData.length == 0) {
    return res.send("Order data is empty");
  }

  for (let i = 0; i < liveOrderData.length; i++) {
<<<<<<< HEAD
    const result = await addLiveOrder(liveOrderData[i]);
=======
    const result = await addLiveOrders(liveOrderData[i]);
>>>>>>> 02f13ad211f9ea87bab8642cc9fb09d1ea2735ff
  }
  return res.send("add-live-order INVOKED");
  // const liveOrderData = {
  //   ItemID: req.body.ItemID,
  //   UserID: req.body.UserID,
  //   ShopkeeperID: req.body.ShopkeeperID,
  //   OrderStatus: req.body.OrderStatus,
  //   TotalQuantity: req.body.TotalQuantity,
  //   TotalAmount: req.body.TotalAmount,
  // };
  // const result = await addLiveOrder(liveOrderData);
});

export default router;
