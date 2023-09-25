import Image from 'next/image';
import Link from 'next/link';
import { PokeAPI } from 'pokeapi-types';
async function getData(url: string): Promise<PokeAPI.Pokemon> {
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const Item = async ({
  item,
}: {
  item: { url: string; name: string };
}) => {
  const data = await getData(item.url);
  return (
    <Link href={`/search/${item.name}`}>
      <div className='flex flex-col items-center justify-center m-8 border rounded-lg px-10 py-8 w-72 shadow-xl hover:ring-2 ring-green-500 ring-inset'>
        <div className='flex flex-col items-center justify-center'>
          <div className='h-38'>
            <Image
              width={100}
              height={100}
              src={data.sprites.front_default}
              alt={data.name}
            />
          </div>
          <div className='text-4xl font-bold capitalize'>{item.name}</div>
          <div className='text-lg font-light text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Item;
