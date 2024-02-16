import React, { useContext } from 'react';
import './cart.scss';
import { MyContext } from '../../../utils/contextProvider';

export const Cart = () => {
    const [test, setTest ,cart ,setCart] = useContext(MyContext);
    return (
        <>
            <div className="magee">
        <p className="text-white flex justify-center items-center h-[100%] font-bold text-7xl">
        YOUR SHOPPING CART
        </p>
      </div>
      <div>
        <div className='flex justify-between mx-28 my-16'>
        <p>	PRODUCT NAME</p>
        <p>	UNIT PRICE</p>
        <p>QUANTITY</p>
        <p>	TOTAL</p>
     </div><hr />
      { cart.map((element, index) =>
       
       <div>{element.name}</div>

  


) }



      </div>
            
        </>
    );
};

