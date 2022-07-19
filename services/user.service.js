import DataStore from 'nedb'
const users = new DataStore({
  filename: './datastore/users.json',
  autoload:true
})
users.loadDatabase((err)=>console.log(err))
export function creatUser(name , surname,UserName,password){
  const doc={
    name,surname,UserName,password
  }

  users.insert(doc,(err, newDoc)=>{
    console.log(err);
  })
}