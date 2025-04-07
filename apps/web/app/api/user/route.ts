import { NextRequest,NextResponse } from "next/server";
import {client} from "@repo/db/client"

export const POST = async (req:NextRequest) =>{
    const {username,email,password}:{username:string,email:string,password:string} = await req.json()

    try{
        const result = await client.user.create({
            data:{
                username,
                email,
                password
            }
        })

        return NextResponse.json({message:result.Id})

    }catch(error){
        return NextResponse.json({message:error})

    }

}