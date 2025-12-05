"use client";

import { useEffect, useState } from "react";

export default function RedirectTimer({ url }) {
  const [seconds, setSeconds] = useState(2); // countdown time

  useEffect(() => {
    if (seconds === 0) {
      window.location.href = `${url}`; // redirect outside domain
      return;
    }

    const timer = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, url]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-xl">
      <p>Redirecting in {seconds} seconds...</p>
      <p className="text-gray-500 mt-2">Destination: {url}</p>
    </div>
  );
}
