import  Express  from "express";
import Cors  from "cors";
import { engine, Engine } from "express-handlebars";

const app=Express()

app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({extended:true}))

app.engine('.hbs',engine({extname:'.hbs'}))
app.set('view engine','.hbs')
app.set('views','./views')


app.listen(8080,()=>{
  console.log('Server is running...');
})