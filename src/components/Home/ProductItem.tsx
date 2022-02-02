import Image from 'next/image';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IProduct } from './../../../types/type';

interface IpoductProps {
  product: IProduct;
  setCount: any;
  count: number;
}

export const ProductItem: React.FC<IpoductProps> = ({
  product,
  setCount,
  count,
}) => {
  const { addItem } = useActions();

  const { cart } = useTypedSelector((state) => state);

  const addProduct = (product: IProduct) => {
    if (!isExistInCart) {
      setCount(count + 1);
      addItem(product);
    }
  };

  const isExistInCart = cart.some((p) => p.id === product.id);

  return (
    <div className="flex justify-between flex-col">
      <div
        style={{
          marginBottom: 20,
          width: 220,
          height: 400,
          padding: 5,
          backgroundColor: '#fff',
        }}
        className="shadow-lg flex flex-col justify-between"
      >
        <div>
          <h1 className="text-xl">{product.title}</h1>
          <p>{product.description.substring(0, 30)}...</p>
        </div>
        <Image src={product?.image} width={200} height={200} />
        <div>{product.price}</div>
        <button
          style={{
            backgroundColor: !isExistInCart ? 'lightgray' : 'lightgreen',
            borderRadius: '5px',
          }}
          onClick={() => addProduct(product)}
        >
          {!isExistInCart ? 'Add to cart' : 'In your cart'}
        </button>
      </div>
    </div>
  );
};
