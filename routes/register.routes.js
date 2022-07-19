import { Router } from "express";
import { creatUser } from "../services/user.service";
const router= Router()

router.get('/register',(req,res)=>{
  res.render('register')
})
router.post('/register',(req,res)=>{
 const{name,surname,username,password}=req.body
 creatUser(name,surname,username,password)
 res.send('Register')
})

export default router