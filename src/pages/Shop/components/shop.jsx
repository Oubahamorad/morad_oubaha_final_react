import React, { useContext, useState } from "react";
import "./shop.scss";

import { MyContext } from "../../../utils/contextProvider";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import { MdOutlineDomainVerification } from "react-icons/md";

export const Shop = () => {
  const [test, setTest ,cart ,setCart] = useContext(MyContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [filterProduct1, setFilterProduct1] = useState([]);
  const [filterProduct2, setFilterProduct2] = useState([]);

  const navigate = useNavigate();
const [myinput , setMayinput] = useState(test)

  const filterElement = (event) => {
    let newTab = myinput.filter((element) =>
      element.desc.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setTest(newTab);
  };
  const add = (element) => {
    cart.push(element)
    console.log(cart);
    console.log('mmm');
}
  



  const filterByCategory = (category) => {
    const filteredProducts = test.filter((item) => item.getrgory === category);
    switch (category) {
      case "SALE":
        setFilterProduct(filteredProducts);
        setFilterProduct1([]);
        setFilterProduct2([]);
        break;
      case "NEW":
        setFilterProduct1(filteredProducts);
        setFilterProduct([]);
        setFilterProduct2([]);
        break;
      case "OLD":
        setFilterProduct2(filteredProducts);
        setFilterProduct([]);
        setFilterProduct1([]);
        break;
      default:
        break;
    }
  };
  const filterByPrice = (price) => {
    const [minPrice, maxPrice] = price.split("-");
    const filteredProducts = test.filter(
      (item) => item.prix >= parseInt(minPrice) && item.prix <= parseInt(maxPrice)
    );
    setFilterProduct(filteredProducts);
    setFilterProduct1([]);
    setFilterProduct2([]);
  };
  const [openModal, setOpenModal] = useState(false);

  const renderProducts = (products) => {
    return (
      <>
        {products.map((element, index) => (
          <div className="flex flex-col gap-2 w-[20%]" key={index}>
            <img src={element.imge} className="w-60" alt="" />
            <Button className=" " onClick={() => { setOpenModal(true); add(element); }} >ADD TO CART</Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            < MdOutlineDomainVerification className="mx-auto mb-4 h-14 w-14 text-green-700 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Boxy7 T-Shirt with Roll Sleeve
            </h3>
            <p className="p-2">is added to cart !</p>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"ok"}
              </Button>
          
            </div>
          </div>
        </Modal.Body>
      </Modal>
            <p
              className="w-[70%] hover:text-red-500"
              onClick={() => navigate(`/products/${element.name}`)}
            >
              {element.desc}
            </p>
            <p className="w-[60%]">{element.prix}</p>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="mage">
        <p className="text-white flex justify-center items-center h-[100%] font-bold text-7xl">
          PRODUCTS
        </p>
      </div>

      <div className="flex max-md:flex-col p-3 gap-5">
        <div className="flex flex-col">
          <div className="flex flex-col justify-start items-start h-[10%] m-5">
            <p className="text-xl">Categories</p>
            <p
              className="text-gray-400 hover:text-red-500"
              onClick={() => filterByCategory("NEW")}
            >
              NEW
            </p>
            <p
              className="text-gray-400 hover:text-red-500"
              onClick={() => filterByCategory("SALE")}
            >
              SALE
            </p>
            <p
              className="text-gray-400 hover:text-red-500"
              onClick={() => filterByCategory("OLD")}
            >
              OLD
            </p>
          </div>
          <div className="flex flex-col justify-start items-start m-5">
            <p className="text-xl">Price</p>
            <p className="text-gray-400 hover:text-red-500"   onClick={() => filterByPrice("0-20")}> 0-20</p>
            <p className="text-gray-400 hover:text-red-500"   onClick={() => filterByPrice("20-100")}>20-100</p>
          </div>
          <input
            onChange={(e) => filterElement(e)}
            className="bg-zinc-200 m-2 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-rose-400"
            autoComplete="off"
            placeholder="search..."
            name="text"
            type="text"
          />
        </div>
        <div className="flex max-md:flex-col max-md:[w-[100%]] justify-end items-end flex-wrap w-[100%] gap-6">
          {filterProduct.length > 0 &&
            renderProducts(filterProduct)}
          {filterProduct1.length > 0 &&
            renderProducts(filterProduct1)}
          {filterProduct2.length > 0 &&
            renderProducts(filterProduct2)}
          {/* Render original products if no category is selected */}
          {filterProduct.length === 0 &&
            filterProduct1.length === 0 &&
            filterProduct2.length === 0 &&
            renderProducts(test)}
        </div>
      </div>
    </>
  );
};
