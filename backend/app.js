import express from "express";
import cors from "cors";
import {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote,
  showUser,
  showDeliveryBoy,
  showShopkeeper,
} from "./databases.js";
import userRoutes from "./routes/users_routes.js";
import shopkeeperRoutes from "./routes/shopkeeper_routes.js";
import deliveryRoutes from "./routes/deliveryboy_routes.js";
import staticRoutes from "./routes/static_routes.js";
import cartRoutes from "./routes/cart_routes.js";
import { showItems } from "./database/items_controllers.js";

// app.route
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

app.use("/", staticRoutes);
app.use("/cart", cartRoutes);
app.use("/user", userRoutes);
app.use("/shopkeeper", shopkeeperRoutes);
app.use("/deliveryboy", deliveryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

export default app;
