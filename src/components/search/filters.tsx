'use client';
import { CATEGORIES, LOCATIONS } from '@/utils/dummyData';
import {
  Button,
  List,
  ListItem,
  Card,
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@/utils/material-tailwind-wrapper';
import Link from 'next/link';
import { useState } from 'react';

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  );
}

export const Filters = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const filters = {
    categorias: CATEGORIES,
    ubicaciones: LOCATIONS,
  };

  return (
    <div className='px-4'>
      <div className='bg-green-600 mb-4 rounded-lg p-4 text-white text-lg'>
        Filters
      </div>
      <div className='filters bg-white h-full rounded-md p-4 '>
        {Object.keys(filters).map((key, index) => (
          <Accordion
            open={open === index + 1}
            key={key}
            icon={
              <Icon
                id={index + 1}
                open={open}
              />
            }
          >
            <AccordionHeader onClick={() => handleOpen(index + 1)}>
              <span className='capitalize'>{key}</span>
            </AccordionHeader>
            <AccordionBody>
              <List>
                {filters[key].map(({ name, link, slug, id }) => (
                  <ListItem key={name}>
                    <Link href={`/${key}/${slug}`}>{name}</Link>
                  </ListItem>
                ))}
              </List>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
export default Filters;
