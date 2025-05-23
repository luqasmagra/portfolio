import React from 'react';
import Image from 'next/image';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function About() {
  return (
    <article
      className="max-w-lg rounded-md md:border-2 border-green-300/30 text-slate-100
    p-8 md:px-8 md:py-12 text-justify relative z-10 hover:bg-black/5 transition flex flex-col gap-12"
    >
      <h1 className="md:max-w-lg text-center text-5xl font-bold mb-4 relative md:absolute top-0 md:-top-12">
        Lucas Magra
      </h1>
      <header className="flex justify-center items-center gap-8 flex-col md:flex-row">
        <div className="flex flex-col gap-5 font-medium self-center md:self-auto">
          <span className="rounded-sm border-2 border-slate-400 flex max-w-max self-center justify-center p-1 bg-[#038a56bb] hover:cursor-pointer">
            Software Developer
          </span>
          <a
            className="p-1 bg-[#FE4531] w-fit rounded-sm font-bold self-center hover:bg-[#fd4d3a] transition"
            href="https://futitservices.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>FUTIT Services 💼</span>
          </a>
          <span className="p-1 gap-1 rounded-sm border-2 border-slate-500 w-fit flex items-center self-center">
            Argentina
            <Image
              src="/argentina.svg"
              width={30}
              height={10}
              alt="Bandera Argentina"
            />
          </span>
          <div className="flex flex-wrap justify-center gap-4 m-auto">
            <a
              className="flex items-end justify-center gap-x-2 hover:scale-105 transition"
              href="https://github.com/luqasmagra"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              className="flex items-end justify-center gap-x-2 hover:scale-105 transition"
              href="https://www.linkedin.com/in/luqasmagra/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              className="flex items-end justify-center gap-x-2 hover:scale-105 transition"
              href="mailto:luqasmagra@gmail.com"
              rel="noreferrer"
            >
              <HiOutlineMail size={30} />
            </a>
          </div>
        </div>
      </header>
      <div className="font-semibold">
        <p>
          Me considero una persona responsable, detallista, de ágil aprendizaje
          y dispuesto a cualquier tipo de desafío.
        </p>
        <p>
          Tengo habilidades de adaptación con compañeros y clientes en
          diferentes entornos laborales.
        </p>
        <p>
          Me interesa participar de proyectos innovadores y orientados a
          resultados de calidad que mejoren y faciliten la experiencia de los
          usuarios.
        </p>
      </div>
    </article>
  );
}
