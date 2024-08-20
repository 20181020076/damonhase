import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function GET(req: NextRequest) {
  try {
    const CATEGORIES = await prisma.category.findMany().then(res=>res.map((cat)=>{return cat.name}))
    
    const url = new URL(req.url);
    const categoryFetch = url.searchParams.get("category")?.toUpperCase();
    if (categoryFetch) {
      const response = await prisma.product.findMany({
        where:{
          categories:{
            some:{
              categoryId:categoryFetch
            }
          }
        }
      });
      return NextResponse.json({ response: response,categories:CATEGORIES });
    }

    const response = await prisma.product.findMany();
    return NextResponse.json({ response: response, categories:CATEGORIES });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error fetching products" },
      { status: 500 }
    );
  }
}
