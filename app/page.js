import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main >
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[50vh] bg-purple-200">
        <div className="flex justify-center bg-green-200">
          <div className="flex flex-col justify-center items-center text-black p-10 max-w-xl">
            <h1 className="text-3xl font-bold text-center">
              best url shortener in the world
            </h1>
            <p className="text-center mt-4">
              A URL shortener is a web service that transforms long, complex web
              addresses (URLs) into short, unique, and memorable links, which
              then redirect users to the original destination when clicked,
              making sharing easier, especially on platforms with character
              limits, and often providing analytics for link tracking. It works
              by creating a unique, short alias for the long URL and storing
              this mapping in a database, then using a server-side redirect
              (like HTTP 301) to send users from the short link to the long one
            </p>
           <div className="flex gap-4">
             <Link href="/shorten" className="bg-purple-700 text-white px-4 py-2 mt-4 rounded">Try Now</Link>
             <Link href="/shorten" className="bg-purple-700 text-white px-4 py-2 mt-4 rounded">Github</Link>
       
           </div>
          </div>
        </div>

        <div className="flex justify-center items-center bg-white p-6">
          <Image
            src="/office.png"
            alt="office"
            width={600}
            height={400}
            className="object-contain"
          />
        </div>
      </section>
    </main>
  );
}
