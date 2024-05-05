import express from 'express';
import Database from './config/dbConn.js'
import addAdmin from './controller/admin.controller.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;
// Connecting to Database
// adding api key and some confg
const db = new Database(process.env.MONGODB_URI_WITH_DB);

app.use(express.json())
// server.use(cors());
let arr = [
    {"username":"apoorvjain7222@gmail.com","password":"123456"},
    {"username":"a@gmail.com","password":"123456"},
    {"username":"aj@gmail.com","password":"123456"},
    {"username":"aj7222@gmail.com","password":"123456"}
]
app.post('/signup',(request,response)=>{
    let obj = request.body;
    console.log(obj);
    arr.push(obj);
    response.json({status:true,msg:"signup success"})
})

app.post('/',(request,response)=>{
    let data = request.body
    console.log(data)
    let result = arr.filter(ob=>ob.username == data.username && ob.password == data.password)
    if(result.length>=1){
        response.json({status:true,msg:"login successful",data:result})
    }
    else{
        response.json({status:false,msg:"login unsuccessful"})
    }
})


// connect to database
db.connect().catch((err) =>
  console.error("Error connecting to database:", err)
);

await addAdmin();

// server running check
app.get('/server-running', (req, res) => {
    res.status(200).json({ message: "Server is up and running!" });
});



app.listen(PORT, () => `Server running at ${PORT}`);