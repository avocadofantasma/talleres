import Item from './item';
import Itemv2 from './item-v2';

type Item = {
  name: string;
  url: string;
};
export const Collection = (props: { items: Item[]; count: number }) => {
  const { items, count } = props;
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center justify-center my-20'>
        <div className='text-4xl font-bold'>
          <span className='text-green-500'>Resultados</span> de la búsqueda
        </div>
        <div className='text-lg font-light'>
          Mostrando {items.length} de {count} resultados encontrados
        </div>
        <div className='flex flex-wrap justify-evenly'>
          {items.map((item, i) => (
            <Itemv2
              item={item}
              index={i}
              key={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Collection;
