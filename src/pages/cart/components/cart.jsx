import React, { useContext, useState } from 'react';
import './cart.scss';
import { MyContext } from '../../../utils/contextProvider';

export const Cart = () => {
    const [test, setTest ,cart ,setCart] = useContext(MyContext);
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="magee">
        <p className="text-white flex justify-center items-center h-[100%] font-bold text-7xl">
        YOUR SHOPPING CART
        </p>
      </div>
      <div>
        <div className='flex   justify-between mx-28 my-16'>
        <p>	PRODUCT NAME</p>
        <p>	UNIT PRICE</p>
        <p>QUANTITY</p>
        <p>	TOTAL</p>
     </div><hr />
      { cart.map((element, index) =>
      <div  className='flex max-md:flex-col justify-between mx-28 my-16'>
      <img src={element.imge} className='w-[15%] max-md:w-[80%] P-2' alt="" />
      <div className='flex justify-center items-center'>{element.prix}</div>
      <div className='flex items-center gap-3 bg-[#f0f0f0f0] h-8 border-2 rounded-2xl justify-center my-20 '>
                                                
        <button onClick={() => setCount(count + 1)} className=' px-5 rounded-full text-2xl hover:bg-slate-200 duration-300'>+</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}  disabled={count===1} className=' px-5 rounded-full text-2xl hover:bg-slate-200 duration-300'>-</button>

        </div>
        <p className='flex justify-center items-center'>TOTAL</p>
        
      </div>
   
       

  


) }
  <hr />

<div>
    <input type="text " />
</div>
      </div>
            
        </>
    );
};

