import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req:NextRequest) {
  try{
    const url = new URL(req.url);
    const productsFetch = url.searchParams.get("productsid");
    // const response = await prisma.product.findMany()
    return NextResponse.json({ response: productsFetch });
  }catch(err){
    return NextResponse.json({ error: err });

  }
}