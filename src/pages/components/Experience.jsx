import React from "react";
import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";

export default function Works() {
  return (
    <>
      <h2 className="text-6xl text-slate-50 font-extrabold">EXPERIENCIA</h2>
      <div className="flex flex-col flex-wrap md:flex-row justify-center gap-8 md:gap-12">
        <article
          className="max-w-lg rounded-md md:border-2 md:border-r-4 md:border-b-[5px] text-slate-50 h-fit 
          p-8 md:px-8 md:pb-12 text-justify relative border-[#fe4531] hover:bg-black/5 transition"
        >
          <div className="flex items-center justify-between ">
            <div className="pt-6">
              <a
                href="https://futitservices.com/"
                target="_black"
                rel="noreferrer"
                className="flex w-fit "
              >
                <h2 className="text-3xl font-bold bg-[#fe4531] text-left w-fit p-1 flex items-center hover:bg-[#fd4d3a] transition">
                  <AiOutlineLink size={30} /> FUTIT Services
                </h2>
              </a>
              <h4 className="font-bold underline uppercase text-left w-fit my-2 ">
                MAR 2023 - Now
              </h4>
            </div>
            <Image
              src="/works/futit.png"
              alt="Libertum Project Logo"
              width={140}
              height={60}
            />
          </div>
          <p className="text-left my-6 mb-8 font-semibold text-slate-50">
            Desarrollo sobre 
            {" "}<a
              href="https://etendo.software/"
              target="_black"
              rel="noreferrer"
              className="text-blue-500 underline"
            >
              Etendo ©,
            </a>{" "} 
            ERP internacional diseñado para acompañar el crecimiento comercial 
            y escalable de socios y sus clientes. Formo parte del equipo de servicios, 
            donde participo en tareas de soporte en vivo y en el desarrollo de nuevas funcionalidades, 
            tanto en backend como en frontend. Bajo metodologías ágiles y en coordinación 
            con el equipo de producto, trabajamos para brindar las mejores soluciones a los clientes.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 font-semibold">
            <span className="rounded-sm border-4 flex items-center p-1 border-yellow-500 hover:bg-yellow-500 transition">
              JavaScript
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-slate-500 hover:bg-slate-500 transition">
              Java
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-orange-600 hover:bg-orange-600 transition">
              SQL
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-sky-900 hover:bg-sky-900 transition">
              PostgreSQL
            </span>
          </div>
        </article>
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
                <h2 className="text-3xl font-bold bg-[#f88612] text-left w-fit p-1 flex items-center hover:bg-[#ff9429] transition">
                  <AiOutlineLink size={30} /> LIBERTUM
                </h2>
              </a>
              <h4 className="font-bold underline uppercase text-left w-fit my-2">
                ENE 2023 - FEB 2023
              </h4>
            </div>
            <Image
              src="/works/libertum.svg"
              alt="Libertum Project Logo"
              width={90}
              height={80}
            />
          </div>
          <p className="text-left my-6 mb-8 font-semibold text-slate-50">
            Desarrollo de solución frontend para Libertum Project. 
            Participé junto al equipo en la implementación de la landing page y en 
            las primeras integraciones con wallets Web3 como MetaMask, 
            aplicando buenas prácticas de desarrollo y metodologías ágiles.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 font-semibold">
            <span className="rounded-sm border-4 flex items-center p-1 border-yellow-500 hover:bg-yellow-500 transition">
              JavaScript
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
            <span className="rounded-sm border-4 flex items-center p-1 border-amber-500 hover:bg-amber-500 transition">
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
                <h2 className="text-3xl font-bold bg-[#FFFF01] text-left text-slate-900 w-fit p-1 flex items-center hover:bg-[#ecec3a] transition">
                  <AiOutlineLink size={30} />
                  HENRY
                </h2>
              </a>
              <h4 className="font-bold underline uppercase text-left w-fit my-2">
                AGO 2022 - DIC 2022
              </h4>
            </div>
            <Image
              src="/works/henry.png"
              alt="Libertum Project Logo"
              width={80}
              height={80}
            />
          </div>
          <p className="text-left my-6 mb-8 font-semibold text-slate-50">
            Con mas de 700 hs teorico practicas pude desarrollar capacidades
            técnicas para el desarrollo de aplicaciones web full stack. Además,
            metodologias ágiles (SCRUM) con el objetivo de seguir mejorando
            aptitudes para el desarrollo ágil y el trabajo en equipo.
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
            <span className="rounded-sm border-4 flex items-center p-1 border-emerald-500 hover:bg-emerald-500 transition">
              Node
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-orange-600 hover:bg-orange-600 transition">
              SQL
            </span>
            <span className="rounded-sm border-4 flex items-center p-1 border-amber-500 hover:bg-amber-500 transition">
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
