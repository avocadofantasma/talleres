import { GetServerSideProps } from 'next';
import { LOCATIONS } from '@/utils/dummyData';
import Link from 'next/link';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Avatar,
  Tooltip,
} from '@/utils/material-tailwind-wrapper';

const Cities = () => {
  return (
    <Card className='py-8'>
      <div className='text-4xl font-bold text-center mb-4'>
        <span className='text-green-500 '>Ubicaciones</span>
      </div>
      <div className='flex flex-wrap justify-evenly'>
        {LOCATIONS.map(({ name, link, slug, id }) => (
          <Card
            key={name}
            shadow={false}
            className='relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center'
          >
            <Link href={`/search/${slug}`}>
              <CardHeader
                floated={false}
                shadow={false}
                color='transparent'
                style={{ backgroundImage: `url('/${slug}.jpeg')` }}
                className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/${slug}.jpeg')] bg-local bg-cover hover:bg-auto bg-center`}
              >
                <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50' />
              </CardHeader>
              <CardBody className='relative py-14 px-6 md:px-12'>
                <Typography
                  variant='h2'
                  color='white'
                  className='mb-6 font-medium leading-[1.5]'
                >
                  {name}
                </Typography>
              </CardBody>
            </Link>
          </Card>
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

export default Cities;
