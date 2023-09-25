'use client';
import Image from 'next/image';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@/utils/material-tailwind-wrapper';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const navbarItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Aviso de privacidad',
    path: '/privacy',
  },
  {
    name: 'Términos y condiciones',
    path: '/terms',
  },
  {
    name: 'Contacto',
    path: '/contact',
  },
];

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <Navbar className='sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Link href='/'>
          <Image
            src='/logo.png'
            width={250}
            height={120}
            alt={'logo'}
          />
        </Link>
        <div className='flex items-center gap-4'>
          <div className='mr-4 hidden lg:block'>
            <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
              {navbarItems.map(({ name, path }) => (
                <Typography
                  key={name}
                  as='li'
                  variant='lead'
                  color='blue-gray'
                  className='p-1 font-normal'
                >
                  <Link
                    href={path}
                    className='flex items-center'
                  >
                    {name}
                  </Link>
                </Typography>
              ))}
            </ul>
          </div>

          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                className='h-6 w-6'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navbarItems.map(({ name, path }) => (
          <Typography
            key={name}
            as='li'
            variant='lead'
            color='blue-gray'
            className='p-1 font-normal'
          >
            <Link
              href={path}
              className='flex items-center'
            >
              {name}
            </Link>
          </Typography>
        ))}
      </MobileNav>
    </Navbar>
  );
};

export default Navigation;
