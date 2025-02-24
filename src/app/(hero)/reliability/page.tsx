import React from 'react';
import Image from 'next/image';
import Img04 from '@asset/img04.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'reliability',
};

export default function Page() {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image
          alt='performance page'
          src={Img04}
          fill
          style={{ objectFit: 'cover' }}
        ></Image>
        {/* <div
          className='absolute inset-0'
          style={{ background: "url('../../../public/img04.jpg')" }}
        ></div> */}
        <div className='absolute inset-0 bg-gradient-to-r from-gray-950'></div>
      </div>
      <div className='flex justify-center pt-48 text-center'>
        <h1 className='text-white text-6xl'>Super high reliability hosting</h1>
      </div>
    </div>
  );
}
