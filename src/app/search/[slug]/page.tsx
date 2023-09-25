import SearchBar from '@/components/search-bar';
import Collection from '@/components/search/collection';
import Filters from '@/components/search/filters';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=8&offset=0';
async function getData() {
  const res = await fetch(URL);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData();

  return (
    <div>
      <div className='mb-8'>
        <SearchBar />
      </div>

      <div className='flex'>
        <div className='w-1/5'>
          <Filters />
        </div>
        <div className='w-3/4  bg-white'>
          <Collection
            items={data?.results}
            count={data?.count}
          />
        </div>
      </div>
    </div>
  );
}
