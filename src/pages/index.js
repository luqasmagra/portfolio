import Head from "next/head";
import Image from "next/image";
import { RxDoubleArrowDown } from "react-icons/rx";
import About from "./components/About";
import Works from "./components/Works";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>luqasmagra</title>
        <meta name="description" content="Lucas Magra, Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col">
        <section className="relative w-full h-full flex flex-col items-center justify-center mt-32">
          <About />
          <Image
            width={1500}
            height={500}
            src="/background.svg"
            className="absolute m-auto pt-36"
            alt="squared vector"
          />
          <RxDoubleArrowDown size={45} className="mt-12 animate-transform" />
        </section>
        <section className="mt-16 mb-4 md:mt-36 flex flex-col items-center gap-4 md:gap-12 w-full">
          <Works />
        </section>
        <section className="mt-16 mb-4 md:mt-36 flex flex-col items-center gap-4 md:gap-12 w-full">
          <Projects />
        </section>
        <h1 className="text-sm m-auto p-2 mt-12">
          template by{" "}
          <a
            className="text-sky-500"
            href="https://github.com/tmchein"
            target="_blank"
          >
            tmchein 🔥
          </a>
        </h1>
      </main>
    </>
  );
}
