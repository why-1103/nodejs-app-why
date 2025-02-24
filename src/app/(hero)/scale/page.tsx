import React from 'react';
import Image from 'next/image';
import Img05 from '@asset/img05.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'scale',
};

export default function Page() {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image
          alt='performance page'
          src={Img05}
          fill
          style={{ objectFit: 'cover' }}
        ></Image>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-950'></div>
      </div>
      <div className='flex justify-center pt-48 text-center'>
        <h1 className='text-white text-6xl'>Scale your app to infinity</h1>
      </div>
    </div>
  );
}
