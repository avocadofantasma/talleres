'use client';
import { GetServerSideProps } from 'next';
import {
  Input,
  Button,
  Card,
  Typography,
} from '@/utils/material-tailwind-wrapper';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const inputRef = React.useRef(null);
  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  const onChange = ({ target }: any) => setQuery(target?.value);

  const handleSearchClick = () => {
    if (!query) return;
    router.push(`/search/${query}`);
  };
  return (
    <div className=' relative flex w-3/4 mx-auto '>
      <Card className='w-full '>
        <Input
          crossOrigin={'anonymous'}
          color='green'
          size='lg'
          type='text'
          label='Busca por ciudad, servicio o nombre de empresa'
          value={query}
          onChange={onChange}
          inputMode='search'
          className='pr-20'
          containerProps={{
            className: 'min-w-0',
          }}
          onKeyDown={handleKeyPress}
          ref={inputRef}
        />
        <Button
          size='sm'
          color={query ? 'gray' : 'blue-gray'}
          disabled={!query}
          onClick={handleSearchClick}
          className='!absolute right-1 top-1 rounded'
        >
          Buscar
        </Button>
      </Card>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default SearchBar;
