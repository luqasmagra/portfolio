import Head from "next/head";
import Image from "next/image";
import { RxDoubleArrowDown } from "react-icons/rx";
import About from "./components/About";
import Experiencie from "./components/Experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>luqasmagra</title>
        <meta name="description" content="Lucas Magra, Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center">
        <section className="relative w-full h-full flex flex-col items-center justify-center md:mt-32">
          <About />
          <Image
            width={1500}
            height={500}
            src="/background.svg"
            className="absolute m-auto pt-36"
            alt="squared vector"
          />
        </section>
          <RxDoubleArrowDown size={45} className="mt-12 animate-transform" />
        <section className="mt-24 mb-4 md:mt-28 flex flex-col items-center gap-4 md:gap-12 w-full">
          <Experiencie />
        </section>

        <h1 className="text-sm m-auto p-2 mt-12">
          template by{" "}
          <a
            className="text-sky-500"
            href=""
            target="_blank"
          >
            tmchein
          </a>
          🔥
        </h1>
      </main>
    </>
  );
}
