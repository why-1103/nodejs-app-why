import React from 'react';
import Image from 'next/image';
import Img03 from '@asset/img03.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'performance',
};
export default function Page() {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image
          alt='performance page'
          src={Img03}
          fill
          style={{ objectFit: 'cover' }}
        ></Image>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-950'></div>
      </div>
      <div className='flex justify-center pt-48 text-center'>
        <h1 className='text-white text-6xl'>
          We serve high performance applications
        </h1>
      </div>
    </div>
  );
}
