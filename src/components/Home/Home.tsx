import { useGetProductsQuery } from '../../../redux/sevices/productApi';
import Image from 'next/image';
import { ProductItem } from './ProductItem';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import { useState } from 'react';

export const Home: React.FC = () => {
  const { data, isLoading } = useGetProductsQuery(10);
  const [count, setCount] = useState(0)

 
  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50vh',
        }}
      >
        Loading, please wait...
      </div>
    );
  }

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl text-green-900 font-medium">
          Let's find your products!
        </h1>
        <div>
          <span
            style={{
              backgroundColor: 'yellow',
              padding: 10,
              borderRadius: '50%',
            }}
          >
            {count}
          </span>
          <Link href="/cart">
            <a>
              <AiOutlineShoppingCart style={{ width: 40, height: 40 }} />
            </a>
          </Link>
        </div>
      </div>
      <main className="flex flex-wrap justify-between">
        {data?.map((item) => (
          <ProductItem key={item.id} product={item} setCount={setCount} count={count}/>
        ))}
      </main>
    </div>
  );
};
