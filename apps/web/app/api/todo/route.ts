import { NextRequest, NextResponse } from "next/server";
import {client} from "@repo/db/client"
import { todo } from "node:test";
export const GET = async (req:NextRequest)=>{

    try{
        const todos = await client.todos.findMany(
            {
                where:{
                    userId:1
                }
            }
        )

        return NextResponse.json({todos:todos})


    }catch(error){
        return NextResponse.json({message:error})
    }


}

export const POST  = async (req:NextRequest) =>{
    try{
        const {title,description,Id}:{title:string,description:string,Id:number} =await req.json()

        const result = await client.todos.create({
            data:{
                title:title,
                description:description,
                status:false,
                userId:Id
            }
        })
        return NextResponse.json({message:result.Id})

    }catch(error){
       return NextResponse.json({message:error})
    }

}