import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';

export default function Works() {
  return (
    <>
      <h2 className='text-6xl text-slate-50 font-extrabold'>Experience</h2>
      <div className='flex flex-col flex-wrap md:flex-row justify-center gap-8 md:gap-12'>
        <div className='flex items-center justify-between '>
          <div className='pt-6'>
            <a
              href='https://futitservices.com/'
              target='_black'
              rel='noreferrer'
              className='flex w-fit '
            >
              <h2 className='text-3xl font-bold bg-[#fe4531] text-left w-fit p-1 flex items-center hover:bg-[#fd4d3a] transition'>
                <AiOutlineLink size={30} /> FUTIT Services
              </h2>
            </a>
            <h4 className='font-bold uppercase text-left w-fit my-2 '>
              MAR 23 - Now
            </h4>
          </div>
        </div>

        <div className='flex items-center justify-between '>
          <div className='pt-6'>
            <a
              href='https://www.libertum.io/'
              target='_black'
              rel='noreferrer'
              className='flex w-fit '
            >
              <h2 className='text-3xl font-bold bg-[#f88612] text-left w-fit p-1 flex items-center hover:bg-[#ff9429] transition'>
                <AiOutlineLink size={30} /> LIBERTUM
              </h2>
            </a>
            <h4 className='font-bold  uppercase text-left w-fit my-2'>
              ENE 23 - FEB 23
            </h4>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <div className='pt-6'>
            <a
              href='https://www.soyhenry.com/'
              target='_black'
              rel='noreferrer'
              className='flex w-fit '
            >
              <h2 className='text-3xl font-bold bg-[#FFFF01] text-left text-slate-900 w-fit p-1 flex items-center hover:bg-[#ecec3a] transition'>
                <AiOutlineLink size={30} />
                HENRY
              </h2>
            </a>
            <h4 className='font-bold  uppercase text-left w-fit my-2'>
              AGO 22 - DIC 22
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
