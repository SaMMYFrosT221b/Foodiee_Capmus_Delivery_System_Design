import express  from 'express';
import cors from 'cors';
import { getNotes,getNote,createNote,deleteNote,updateNote, checkUser,showUser,showDeliveryBoy,showShopkeeper } from './databases.js';

const app = express();
const PORT  = 5000;
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
  console.log("Hello World");
  res.send("Hello World");
})

// app.get('/users',  async(req, res) => {
//   const notes = await showUser();
//   res.send(notes);
// });

// app.get('/shopkeepers',  async(req, res) => {
//   const notes = await showShopkeeper();
//   res.send(notes);
// });

// app.get('/diliveryboys',  async(req, res) => {
//   const notes = await showDeliveryBoy();
//   res.send(notes);
// });


app.get('/notes', async(req,res)=>{
  const r = await getNotes();
  console.log(r);
  const result = (r);
  res.json(result);  
})

app.get('/notes/:id', async (req,res)=>{
  const id = req.params.id;
  const note = await getNote(id);
  res.send(note);
})


app.post('/notes',async(req,res)=>{
  const {title,contents} = req.body;
  console.log(title);
  console.log(contents);
  const note = await createNote(title, contents);
  res.send(note);
})

app.delete('/notes/:id',async(req,res)=>{
  const id = req.params.id;
  const note = await deleteNote(id);
  res.send(note);
})

app.put('/notes/:id',async(req,res)=>{
  const id = req.params.id;
  const {title,contents} = req.body;
  const note = await updateNote (id, title, contents);
  res.send(note);
})

app.post('/login',async(req,res)=>{
  const [result] = await checkUser(req.body.UserName, req.body.Password);
  console.log(result["UserName"], result["Password"]);
  if(req.body.UserName == result["UserName"] && req.body.Password == result["Password"]){
    console.log("Login Successful");
  }else{
    console.log("Login Failed");
  }
  res.send(result);
  // console.log("Hello");
  // res.send("Hello");
})

app.listen(PORT,()=>{
  console.log(`Server is running at ${PORT}`);
});