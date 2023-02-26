import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

export default function Projects() {
  return (
    <>
      <h2 className="text-6xl text-slate-50 font-extrabold mt-8">PROYECTOS</h2>
      <div className="flex flex-col flex-wrap md:flex-row justify-center gap-12 md:gap-16">
        <article
          className="max-w-lg rounded-md md:border-2 md:border-l-4 md:border-b-[5px] text-slate-50
  p-8 md:px-8 md:py-12 text-justify relative border-[#f88612] hover:bg-black/5 transition"
        >
          <header className="flex justify-between items-start mb-4">
            <div>
              <a
                href="https://www.libertumproject.org/"
                target="_black"
                rel="noreferrer"
                className="flex w-fit "
              >
                <h2 className="text-3xl font-bold bg-[#f88612] text-left w-fit p-1 flex items-center hover:scale-110 transition">
                  <AiOutlineLink size={30} /> LIBERTUM
                </h2>
              </a>
              <h4 className="font-bold underline uppercase text-left w-fit my-2">
                ENE 2023 - FEB 2023
              </h4>
            </div>
            <div className="flex"></div>
          </header>
          <Image
            src="/projects/libertum.png"
            width={1600}
            height={600}
            alt="Landing page of Libertum Plataform"
            className="max-h-56 mx-auto object-cover w-full"
          />
          <p className="text-left my-6 font-semibold text-slate-50">
            Libertum Protocol es una plataforma de prestamos descentralizados.
            Permite el acceso a servicios financieros en una plataforma amigable
            y accesible facilitando a los usuarios non-crypto el uso de los
            servicios DeFi.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 font-semibold">
            <span className="rounded-sm border-4 flex items-cente p-1 border-orange-400 hover:bg-orange-400 transition">
              HTML
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-yellow-500 hover:bg-yellow-500 transition">
              JavaScript
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-pink-500 hover:bg-pink-500 transition">
              Scss
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-blue-600 hover:bg-blue-600 transition">
              Material UI
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-sky-600 hover:bg-sky-600 transition">
              React
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-violet-600 hover:bg-violet-600 transition">
              Redux
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-teal-600 hover:bg-teal-600 transition">
              Web3
            </span>
          </div>
        </article>
        <article
          className="max-w-lg rounded-md md:border-2 md:border-l-4 md:border-b-[5px] text-slate-50
  p-8 md:px-8 md:py-12 text-justify relative border-[#41D3C0] hover:bg-black/5 transition"
        >
          <header className="flex justify-between items-start mb-4">
            <div>
              <a
                href="https://drivein.vercel.app/"
                target="_black"
                rel="noreferrer"
                className="flex w-fit "
              >
                <h2 className="text-3xl font-bold bg-[#41D3C0] text-left w-fit p-1 flex items-center hover:scale-110 transition">
                  <AiOutlineLink size={30} /> DRIVEIN
                </h2>
              </a>
              <h4 className="font-bold underline uppercase text-left w-fit my-2">
                NOV 2022
              </h4>
            </div>
            <div className="flex">
              <a
                href="https://github.com/luqasmagra/driveIn"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <FaGithub size={45} />
              </a>
            </div>
          </header>
          <Image
            src="/projects/drivein.png"
            width={1600}
            height={600}
            alt="Landing page of Libertum Plataform"
            className="max-h-56 mx-auto object-cover w-full"
          />
          <p className="text-left my-6 font-semibold text-slate-50">
            E-Commerce para la prestación de servicios de alquiler de vehículos
            en las principales ciudades turísticas de LATAM, con el objetivo de
            ser utilizados con fines turísticos o cualquier otra necesidad.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 font-semibold">
            <span className="rounded-sm border-4 flex items-cente p-1 border-orange-400 hover:bg-orange-400 transition">
              HTML
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-sky-500 hover:bg-sky-500 transition">
              CSS
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-sky-400 hover:bg-sky-400 transition">
              TailwindCSS
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-yellow-500 hover:bg-yellow-500 transition">
              JavaScript
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-sky-600 hover:bg-sky-600 transition">
              React
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-violet-600 hover:bg-violet-600 transition">
              Redux
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-orange-700 hover:bg-orange-700 transition">
              Auth0
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-blue-500 hover:bg-blue-500 transition">
              Stripe
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-slate-500 hover:bg-slate-500 transition">
              Express
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-sky-900 hover:bg-sky-900 transition">
              PostgreSQL
            </span>
          </div>
        </article>
        <article
          className="max-w-lg rounded-md md:border-2 md:border-l-4 md:border-b-[5px] text-slate-50
  p-8 md:px-8 md:py-12 text-justify relative border-[#d13648] hover:bg-black/5 transition"
        >
          <header className="flex justify-between items-start mb-4">
            <div>
              <a
                href="https://henry-dogs-tau.vercel.app/"
                target="_black"
                rel="noreferrer"
                className="flex w-fit "
              >
                <h2 className="text-3xl font-bold bg-[#d13648] text-left w-fit p-1 flex items-center hover:scale-110 transition">
                  <AiOutlineLink size={30} /> HENRY DOGS
                </h2>
              </a>
              <h4 className="font-bold underline uppercase text-left w-fit my-2">
                OCT 2022
              </h4>
            </div>
            <div className="flex">
              <a
                href="https://github.com/luqasmagra/henry-dogs"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <FaGithub size={45} />
              </a>
            </div>
          </header>
          <Image
            src="/projects/dogs.png"
            width={1600}
            height={600}
            alt="Landing page of Libertum Plataform"
            className="max-h-56 mx-auto object-cover w-full"
          />
          <p className="text-left my-6 font-semibold text-slate-50">
            Aplicación que utiliza la API externa The Dog API para mostrar
            diferentes razas de perros con información relevante, permitiendo
            buscar, filtrar, ordenar y agregar nuevas razas de perros.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 font-semibold">
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
            <span className="rounded-sm border-4 flex items-center p-1 border-violet-600 hover:bg-violet-600 transition">
              Redux
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-slate-500 hover:bg-slate-500 transition">
              Express
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-sky-900 hover:bg-sky-900 transition">
              PostgreSQL
            </span>
          </div>
        </article>
      </div>
    </>
  );
}
