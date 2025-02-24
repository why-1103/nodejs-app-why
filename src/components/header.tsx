'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routers = [
  {
    name: 'Performance',
    path: 'performance',
  },
  { name: 'Reliability', path: 'reliability' },
  {
    name: 'Scale',
    path: 'scale',
  },
];

export default function Header() {
  const pathName = usePathname();
  console.log('pathName', pathName);
  return (
    <div className='absolute w-full z-10'>
      <div className='flex justify-between container mx-auto p-8 text-white'>
        <Link className='text-3xl font-bold' href='/'>
          Home
        </Link>
        <div className='text-xl space-x-4'>
          {routers.map((link: { name: string; path: string }) => (
            <Link
              key={link.path}
              href={`/${link.path}`}
              className={pathName == `/${link.path}` ? 'text-purple-400' : ''}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
