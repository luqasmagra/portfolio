import Image from "next/image";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";

export default function Works() {
  return (
    <>
      <h2 className="text-6xl text-slate-50 font-extrabold">EXPERIENCIA</h2>
      <div className="flex flex-col flex-wrap md:flex-row justify-center gap-8 md:gap-12">
        <article
          className="max-w-lg rounded-md md:border-2 md:border-r-4 md:border-b-[5px] text-slate-50 h-fit
  p-8 md:px-8 md:pb-12 text-justify relative border-[#f88612] hover:bg-black/5 transition"
        >
          <div className="flex items-center justify-between ">
            <div className="pt-6">
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
            <Image
              src="./libertum.svg"
              alt="Libertum Project Logo"
              width={90}
              height={80}
            />
          </div>
          <p className="text-left my-6 mb-8 font-semibold text-slate-50">
            Crear oportunidades, proteger la propiedad privada y mejorar las
            condiciones de vida de cada individuo. Libertum es una DeFi, un
            medio de pago, un medio de copia de seguridad y una criptomoneda.
          </p>
          <div className="flex flex-wrap gap-3 mt-4 font-semibold">
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
            <span className="rounded-sm border-4 flex items-center p-1 border-pink-500 hover:bg-pink-500 transition">
              Scss
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-amber-400 hover:bg-amber-400 transition">
              Desarrollo ágil
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-fuchsia-700 hover:bg-fuchsia-700 transition">
              SCRUM
            </span>
          </div>
        </article>
        <article
          className="max-w-lg rounded-md md:border-2 md:border-r-4 md:border-b-[5px] text-slate-50
  p-8 md:px-8 md:pb-12 text-justify relative border-[#FFFF01] hover:bg-black/5 transition"
        >
          <div className="flex items-center justify-between ">
            <div className="pt-6">
              <a
                href="https://www.soyhenry.com/"
                target="_black"
                rel="noreferrer"
                className="flex w-fit "
              >
                <h2 className="text-3xl font-bold bg-[#FFFF01] text-left text-slate-900 w-fit p-1 flex items-center hover:scale-110 transition">
                  <AiOutlineLink size={30} />
                  HENRY
                </h2>
              </a>
              <h4 className="font-bold underline uppercase text-left w-fit my-2">
                AGO 2022 - DIC 2022
              </h4>
            </div>
            <Image
              src="/henry.png"
              alt="Libertum Project Logo"
              width={80}
              height={80}
            />
          </div>
          <p className="text-left my-6 mb-8 font-semibold text-slate-50">
            Con mas de 700 hs teorico practicas pude desarrollar capacidades
            tecnicas para el desarrollo de aplicaciones web full stack. Ademas,
            metodologias agiles (SCRUM) con el objetivo de seguir mejorando
            aptitudes para el desarrollo ágil y el trabajo en equipo.
          </p>
          <div className="flex flex-wrap gap-3 mt-4 font-semibold">
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
            <span className="rounded-sm border-4 flex items-center p-1 border-emerald-500 hover:bg-emerald-500 transition">
              Node
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-orange-600 hover:bg-orange-600 transition">
              SQL
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-amber-400 hover:bg-amber-400 transition">
              Desarrollo ágil
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-fuchsia-700 hover:bg-fuchsia-700 transition">
              SCRUM
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-blue-700 hover:bg-blue-700 transition">
              Aprendizaje ágil
            </span>
          </div>
        </article>
      </div>
    </>
  );
}
