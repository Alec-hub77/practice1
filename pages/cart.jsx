import { useRouter } from 'next/router';
import React from 'react';
import { useTypedSelector } from './../src/hooks/useTypedSelector';
import { useActions } from './../src/hooks/useActions';

const Cart = () => {
  const { cart } = useTypedSelector((state) => state);
  console.log(cart);

  const history = useRouter();

  const {removeItem} = useActions()

  if(!cart.length) {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50vh'}}>
          <div>Cart is epmty</div>
            <div>

          <button
              style={{
                  padding: '10px',
                  backgroundColor: 'lightgray',
                  display: 'block',
                  marginLeft: '5px'
                }}
                onClick={() => history.push('/')}
                >
              Back to main
            </button>
            </div>
      </div> 
  }

  return (
    <div style={{ padding: '15px' }}>
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <h1
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '15px',
              }}
            >
              {item.title}
            </h1>
            <img src={item.image} alt="" width="150" height="200" />
            <div
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                margin: '15px 20px',
              }}
            >
              {item.price} $
            </div>
            <button
              style={{
                marginTop: '15px',
                padding: '10px',
                backgroundColor: 'lightgray',
              }}
              onClick={() => history.push('/')}
            >
              Back to main
            </button>
            <button
              style={{
                marginTop: '15px',
                padding: '10px',
                backgroundColor: '#fc5151',
                display: 'block'
              }}
              onClick={() => removeItem({id: item.id})}
            >
              Remove item
            </button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
