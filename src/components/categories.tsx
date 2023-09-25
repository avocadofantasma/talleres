import { GetServerSideProps } from 'next';
import { CATEGORIES } from '@/utils/dummyData';
import Link from 'next/link';
import { Card } from '@/utils/material-tailwind-wrapper';

const Categories = () => {
  return (
    <Card className='py-8'>
      <div className='text-4xl font-bold text-center mb-4'>
        <span className='text-green-500 '>Servicios</span>
      </div>
      <div className='flex flex-wrap justify-center'>
        {CATEGORIES.map(({ name, link, slug, id }) => (
          <Link
            className='mx-4 py-8 bg-gray-200 px-6 my-3 w-1/6 rounded-md justify-center min-w-fit hover:bg-green-600 hover:text-white'
            href={`search/${slug}`}
            key={id}
          >
            <h2 className='text-lg text-center'>{name}</h2>
          </Link>
        ))}
      </div>
    </Card>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Categories;
