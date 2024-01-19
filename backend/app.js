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

// app.route
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

app.use("/", staticRoutes);
app.use("/user", userRoutes);
app.use("/shopkeeper", shopkeeperRoutes);
app.use("/deliveryboy", deliveryRoutes);

// Catch-all route
app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
});

/*-------------------------------------------------------------------------------------------------------------- */
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
