import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma"

export async function GET(req:NextRequest, {params}:{params:{id:string}}) {
    try{
        const response = await prisma.product.findUnique({
            where:{
                id:params.id
            }
        })
        if(!response){
            return  NextResponse.json({ error: 'product Not Found' }, { status: 404 })
        }
        return NextResponse.json({ response: response },{status:200});

    }catch(err){
        console.error(err); 
        return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });

    }
}
