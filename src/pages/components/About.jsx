import Image from "next/image";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function About() {
  return (
    <article
      className="max-w-lg rounded-md md:border-2 border-green-300/30 text-slate-100
    p-8 md:px-8 md:py-12 text-justify relative z-10 hover:bg-black/5 transition flex flex-col gap-6"
    >
      <h1 className="w-max text-center md:text-left text-3xl font-bold mb-4 relative md:absolute left-0 top-0 md:-top-12">
        Lucas Magra, Full Stack Developer
      </h1>
      <header className="flex justify-center items-center gap-8 flex-col md:flex-row">
        <Image
          src="/face.png"
          alt="Lucas Magra fotografia"
          width={190}
          height={190}
          className="rounded-full"
        />
        <div className="flex flex-col gap-4 font-medium self-center md:self-auto">
          <a
            className="p-1 bg-green-600 w-fit rounded-sm font-bold self-center animate-scale"
            href="https://wa.me/543584380680"
            target="_blank"
            rel="noreferrer"
          >
            <span>Desempleado 😉</span>
          </a>
          <span className="p-1 gap-1 rounded-sm border-2 border-slate-500 w-fit flex items-center self-center ">
            Argentina
            <Image
              src="/argentina.svg"
              width={30}
              height={10}
              alt="Bandera Argentina"
            />
          </span>
          <div className="grid grid-cols-2 gap-4 m-auto">
            <a
              className="flex items-end justify-center gap-x-2 hover:scale-110 transition"
              href="https://github.com/luqasmagra"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} /> GitHub
            </a>
            <a
              className="flex items-end justify-center gap-x-2 hover:scale-110 transition"
              href="https://drive.google.com/file/d/1INnkA-v8_ZmvDuWefnIJqAFbKLh_lfwN/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <BsFillPersonLinesFill size={30} /> CV
            </a>
            <a
              className="flex items-end justify-center gap-x-2 hover:scale-110 transition"
              href="https://www.linkedin.com/in/luqasmagra/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} /> LinkedIn
            </a>
            <a
              className="flex items-end justify-center gap-x-2 hover:scale-110 transition"
              href="mailto:luqasmagra@gmail.com"
              rel="noreferrer"
            >
              <HiOutlineMail size={30} /> Email
            </a>
          </div>
        </div>
      </header>
      <div className="font-semibold">
        <p>
          Me considero responsable, detallista, con ganas de aprender y
          dispuesto a cualquier tipo de desafío.
        </p>
        <p>
          Tengo habilidades de adaptación con compañeros y clientes en
          diferentes entornos laborales.
        </p>
        <p>
          Me interesa participar de proyectos orientados a resultados de calidad
          que mejoren la experiencia de los usuarios y la escalabilidad.
        </p>
      </div>
      <footer>
        <h2 className="text-white text-3xl font-bold mb-6">Tecnologias</h2>
        <div className="flex flex-wrap gap-2 font-semibold">
          <span className="rounded-sm border-4 flex items-cente p-1 border-orange-400 hover:bg-orange-400 transition">
            HTML
          </span>
          <span className="rounded-sm border-4 flex items-center p-1 border-sky-500 hover:bg-sky-500 transition">
            CSS
          </span>
          <span className="rounded-sm border-4 flex items-center p-1 border-yellow-500 hover:bg-yellow-500 transition">
            JavaScript
          </span>
          <span className="rounded-sm border-4 flex items-center p-1 border-sky-600 hover:bg-sky-600 transition">
            React
          </span>
          <span className="rounded-sm border-4 flex items-center p-1 border-emerald-500 hover:bg-emerald-500 transition">
            Node
          </span>
          <span className="rounded-sm border-4 flex items-center p-1 border-slate-500 hover:bg-slate-500 transition">
            Express
          </span>
          <span className="rounded-sm border-4 flex items-center p-1 border-pink-600 hover:bg-pink-600 transition">
            GraphQL
          </span>
          <span className="rounded-sm border-4 flex items-center p-1 border-sky-900 hover:bg-sky-900 transition">
            PostgreSQL
          </span>
          <span className="rounded-sm border-4 flex items-center p-1 border-green-700 hover:bg-green-700 transition">
            MondoDB
          </span>
        </div>
      </footer>
    </article>
  );
}
