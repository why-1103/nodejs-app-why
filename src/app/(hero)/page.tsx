import React from 'react';
import Image from 'next/image';
import Img02 from '@asset/img02.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'home',
};

export default function Page() {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image
          alt='home page'
          src={Img02}
          fill
          style={{ objectFit: 'cover' }}
        ></Image>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-950'></div>
      </div>
      <div className='flex justify-center pt-48 text-center'>
        <h1 className='text-white text-6xl'>Professional Cloud Hosting</h1>
      </div>
    </div>
  );
}
