import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    return res.send('This is home page');
})

router.get('/signup', (req, res) => {
  return res.send("This is signup Page");
});

export default router;