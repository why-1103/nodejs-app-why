import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'home',
};

export default function Page() {
  return (
    <div className='flex mt-6 p-6 bg-gray-500 text-white h-32 rounded-lg'>
      @children
    </div>
  );
}
