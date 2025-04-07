import express,{Response,Request} from "express"
import {client} from "@repo/db/client"
const app = express()

app.use(express.json())
app.get("/user",async (req,res)=>{

    const result = await client.user.findMany()
    res.json({users:result})


})

app.get("/user",async (req,res)=>{

    const result = await client.user.findMany()
    res.json({users:result})


})

app.post("/user",async (req:Request<{},{},{username:string,email:string,password:string}>,res:Response)=>{
    const {username,email,password} = req.body
    const result= await client.user.create({
        data:{
            username:username,
            email:email,
            password:password
        }
    })
    res.json({user:result})
    return;

})

app.get("/todos",async (req:Request,res:Response)=>{
    const id = req.params.id
    const todos = await client.todos.findMany({
        where:{
            userId: Number(id)
        }
    })
    res.json({message:todos})
    return
})

app.post("/todos",async (req:Request,res:Response)=>{
    const {id,title,description} = req.body
    
    const todos = await client.todos.create({
        data:{
            title : title,
            description:description,
            status:false,
            userId: Number(id)
        }
    })

    res.json({todo:todos})
    return
})

app.listen(8000,()=>{
    console.log("listening to port 8000")

})