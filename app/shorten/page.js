"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function page() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generatedurl, setGeneratedUrl] = useState([]);
  const geturls = async () => {
    const response = await fetch("/api/generate");
    const data = await response.json();
    setGeneratedUrl(data.data);
    console.log(data);
  };
  useEffect(() => {
    geturls();
  }, []);

  const onsubmit = async () => {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, shortUrl }),
    });
    const data = await response.json();
    alert(data.message);
    geturls();
  };
  return (
    <div className="flex justify-center flex-col p-3 gap-3 bg-purple-100 ">
      <div className="bg-purple-900 p-10 flex gap-9 flex-col min-w-full">
        <h1 className="text-3xl font-bold text-center text-stone-50">
          Generate your Short URL
        </h1>
        <div className="flex flex-col justify-center items-center gap-4 ">
          <input
            type="text"
            value={url}
            placeholder="Enter Your URL"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            className="border-2 border-purple-200 text-2xl bg-purple-100 rounded-lg w-full"
          />
          <input
            type="text"
            value={shortUrl}
            placeholder="Enter your prferred short URL text"
            className="border-2 border-purple-200 text-2xl  bg-purple-100 rounded-lg w-full"
            onChange={(e) => {
              setShortUrl(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={onsubmit}
            className="bg-purple-700 text-white px-4 py-2 mt-4 rounded hover:bg-purple-600 hover:cursor-pointer"
          >
            Generate
          </button>
        </div>
      </div>
      <div className="bg-purple-950 flex justify-center flex-col p-10">
        <h1 className="text-3xl font-bold text-center text-stone-50">
          Your Short URLs
        </h1>
        {generatedurl.map((url) => {
          return (
            <Link
              key={url._id}
              href={url.Url.startsWith("http://") || url.Url.startsWith("https://") ? `${url.Url}` : `http://${url.Url}`}
              className="bg-purple-700 text-white px-4 py-2 mt-4 rounded"
            >
              {url.shortUrl}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
