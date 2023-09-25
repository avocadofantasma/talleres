import Categories from '@/components/categories';
import Cities from '@/components/cities';
import Navbar from '@/components/nav';
import SearchBar from '@/components/search-bar';

export default function Home() {
  return (
    <main className='flex flex-col '>
      <SearchBar />
      <div className='my-6 mx-auto gap-6 flex flex-col'>
        <Categories />
        <Cities />
      </div>
    </main>
  );
}
