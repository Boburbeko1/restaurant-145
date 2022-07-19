import  express  from "express";
import cors  from "cors";
import { engine } from "express-handlebars";


import registerRoutes from './routes/register.routes.js'
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine('.hbs',engine({extname:'.hbs'}))
app.set('view engine','.hbs')
app.set('views','./views')

app.use(registerRoutes)

app.listen(8080,()=>{
  console.log('Server is running...');
})