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
// import { checkRatUser } from "./database/check_user.js";
import { checkUser } from "./database/user_controllers.js";
import { checkShopkeeper } from "./database/shopkeeper_controllers.js";
import { checkDeliveryBoy } from "./database/deliveryboy_controllers.js";


// app.route
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//   console.log("Hello World");
//   res.send("Hello World");
// });

app.use("/", staticRoutes);
app.use("/user", userRoutes);
app.use("/shopkeeper", shopkeeperRoutes);
app.use("/deliveryboy", deliveryRoutes);

// Catch-all route
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});


































app.get("/rat", async (req, res) => {
  console.log("This is rat route");
  console.log(res.body);
  // const result = await checkRatUser()
  res.send("This is rat route");
});

app.post("/rat", async (req, res) => {
  console.log(req.body);
  if(req.body.UserType == "User"){
    const result = await checkUser(req.body.Email, req.body.Password);
    res.send(result);
  }else if(req.body.UserType == "Shopkeeper"){
    const result = await checkShopkeeper(req.body.Email, req.body.Password);
    res.send(result);
  }else if(req.body.UserType == "Delivery Boy"){
    const result = await checkDeliveryBoy (req.body.Email, req.body.Password);
    res.send(result);
  }
  // console.log(result);
  // res.send("This rat routes");
});

app.post("/createRat", async (req, res) => {
  console.log(req.body);
  if(req.body.UserType == "User"){
    const result = await checkUser(req.body.Email, req.body.Password);
    res.send(result);
  }else if(req.body.UserType == "Shopkeeper"){
    const result = await checkShopkeeper(req.body.Email, req.body.Password);
    res.send(result);
  }else if(req.body.UserType == "Delivery Boy"){
    const result = await checkDeliveryBoy (req.body.Email, req.body.Password);
    res.send(result);
  }
  // console.log(result);
  // res.send("This rat routes");
});



app.get("/notes", async (req, res) => {
  const r = await getNotes();
  // console.log(r);
  const result = r;
  res.json(result);
});

app.get("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const note = await getNote(id);
  res.send(note);
});

app.post("/notes", async (req, res) => {
  const { title, contents } = req.body;
  console.log(title);
  console.log(contents);
  const note = await createNote(title, contents);
  res.send(note);
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const note = await deleteNote(id);
  res.send(note);
});

app.put("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { title, contents } = req.body;
  const note = await updateNote(id, title, contents);
  res.send(note);
});


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
