import Image from 'next/image'
import { IProduct } from './../../../types/type';

interface IpoductProps {
    product: IProduct,
    addHandler: () => void;
}

export const ProductItem: React.FC<IpoductProps> = ({product, addHandler}) => {
    return (
        <div className="flex justify-between flex-col">
            <div
              style={{ marginBottom: 20, width: 200,height: 400, padding: 5, backgroundColor: '#fff' }}
              className="shadow-lg flex flex-col justify-between"
            >
              <div>
                <h1 className="text-xl">{product.title}</h1>
                <p>{product.description.substring(0, 30)}...</p>
              </div>
              <Image src={product?.image} width={200} height={200} />
              <div>{product.price}</div>
              <button 
              style={{backgroundColor: 'lightgray', borderRadius: '5px'}}
              onClick={addHandler}
              >Add to cart</button>
            </div>
            
          </div>
    )
}

