import dbConnect from '@/lib/mongodb';
import { NextResponse } from "next/server";
import Url from "@/models/Url";
//get all url and shorturl
export async function GET(req) {
  try {
    await dbConnect();
    const urls = await Url.find();
    return NextResponse.json({ data: urls }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
export async function POST(req) {
  try {
    await dbConnect();
    const body= await req.json();
  
    if (!body.url || !body.shortUrl) {
      return NextResponse.json(
        { error: "Url is required" },
        { status: 400 }
      );
    }
    const doc=await Url.findOne({shortUrl:body.shortUrl});
    if (doc) {
      return NextResponse.json(
        { error: "shortUrl already exists" },
        { status: 400 }
      );
    }
    const newUrl = await Url.create({
      Url: body.url,
      shortUrl: body.shortUrl,
    });
    console.log(newUrl);
    return NextResponse.json(
      { message: "URL created", data: newUrl },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}