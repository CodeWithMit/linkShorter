import React from "react";
import dbConnect from "@/lib/mongodb";
import Url from "@/models/Url";
import RedirectTimer from "@/components/RedirectTimer";
import { redirect } from "next/navigation"
export default async function page({ params }) {
  const shorturl = (await params).url;
  await dbConnect();
  const doc = await Url.findOne({ shortUrl: shorturl });
  if(!doc) {
    return (
      <div>
        <h1>URL not found</h1>
      </div>
    );
  }
  if(doc.Url.startsWith("http://") || doc.Url.startsWith("https://")) {
   redirect(`${doc.Url}`);
  }
redirect(`http://${doc.Url}`);
}