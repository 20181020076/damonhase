import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req:NextRequest) {
  try{
    const response = await prisma.product.findMany()
    NextResponse.json({ response: response });
  }catch(err){
    return NextResponse.json({ error: err });

  }
}