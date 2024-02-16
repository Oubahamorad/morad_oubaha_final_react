import React, { useContext, useState } from "react";
import "./shop.scss";

import { MyContext } from "../../../utils/contextProvider";
import { useNavigate } from "react-router-dom";

export const Shop = () => {
  const [test, setTest] = useContext(MyContext);
 const [filterProduct, setFilterProduct] = useState([]);
    const [filterProduct1, setFilterProduct1] = useState([]);
    const [filterProduct2, setFilterProduct2] = useState([]);
   

    
    const SALE = () => {
      const filteredProducts = test.filter((item) => item.getrgory === 'SALE');
      setFilterProduct(filteredProducts);
      setFilterProduct1([]); // Reset other filterss
      setFilterProduct2([]);
  };
  const NEW = () => {
    const filteredProducts1 = test.filter((item) => item.getrgory === 'NEW');
    setFilterProduct(filteredProducts1);
    setFilterProduct1([]); // Reset other filters
    setFilterProduct2([]);
};
const OLD = () => {
  const filteredProducts2 = test.filter((item) => item.getrgory === 'OLD');
  setFilterProduct(filteredProducts2);
  setFilterProduct1([]); // Reset other filters
  setFilterProduct2([]);


};




  const navigate = useNavigate();
 


  const[Myinput,setMyinput]=useState(test)
 
  const filterElement = (event) => {
    let newTab = Myinput.filter((element) =>
      element.desc.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setTest(newTab);
  };

  return (
    <>
      <div className="mage">
        <p className="text-white flex justify-center items-center h-[100%] font-bold text-7xl">
          PRODUCTS
        </p>
      </div>

      <div className="flex  p-3 gap-5 ">
        <div className="flex flex-col">
        <div className="flex flex-col justify-start items-start h-[10%] m-5 ">
          <p className="text-xl">Categories</p>
          <p className="text-gray-400   hover:text-red-500 " onClick={()=> SALE()} >NEW</p>
          <p className="text-gray-400  hover:text-red-500 " onClick={()=> NEW()}>SALE</p>
          <p className="text-gray-400  hover:text-red-500 " onClick={()=> OLD()} >OLD</p>
        </div>
        <div className="flex flex-col justify-start items-start  m-5 ">
          <p className="text-xl">Price</p>
          <p className="text-gray-400  hover:text-red-500 ">0-20</p>
          
          <p className="text-gray-400  hover:text-red-500 ">20-100</p>
        </div>
        <input onChange={(e)=>filterElement(e)}
  className=  "bg-zinc-200 m-2 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-rose-400"
  autocomplete="off"
  placeholder="searche.."
  name="text"
  type="text"
/>
  

        </div>
        <div className="flex justify-end items-end  flex-wrap w-[100%] gap-6 ">
          {test.map((element, index) => (
            <div className="flex flex-col gap-2 w-[20%] ">
              <img src={element.imge} className="  w-60" alt="" />
              <p
                className=" w-[70%]  hover:text-red-500  "
                onClick={() => navigate(`/products/${element.name}`)}
              >
                {element.desc}{" "}
              </p>
              <p className="w-[60%] ">{element.prix}</p>
            </div>
          ))}
        </div>
      </div>

    
    </>
  );
};
