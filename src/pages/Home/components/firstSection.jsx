import { Carousel } from "flowbite-react";
import "./firstSection.scss";
import immege1 from "../../../assets/img/banner-02.jpg";
import immege2 from "../../../assets/img/banner-03.jpg";
import immege3 from "../../../assets/img/banner-04.jpg";
import immege4 from "../../../assets/img/banner-05.jpg";
import immege5 from "../../../assets/img/banner-07.jpg";
import immege6 from "../../../assets/img/banner-09.jpg";
import { Tabs } from "flowbite-react";
import { MdOutlineDomainVerification } from "react-icons/md";

import immege17 from "../../../assets/img/bg-video-01.jpg";
import immege19 from "../../../assets/img/shop-item-09.jpg";
import immege18 from "../../../assets/img/blog-08.jpg";
import immege20 from "../../../assets/img/blog-09.jpg";
import immege21 from "../../../assets/img/blog-10.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../../utils/contextProvider";
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export const FirstSection = () => {
  const [test, setTest ,cart ,setCart] = useContext(MyContext);
  const { name } = useParams()

  const add = (element) => {
    cart.push(element)
    console.log(cart);
    console.log('mmm');
}
  
// const add = (element) => {
//   const isInCart = cart.find(item => item.name === element.name);
//   if (!isInCart) {
//       const newcart = [...cart, element];
//       setCart(newcart);
//       console.log(cart);
//   } else {
//       console.log("Item is already in the cart.");
//   }
// }
  const randomIndex = Math.floor(Math.random() * test.length)
  
  const newDataBase = test[randomIndex]


  
  const navigate = useNavigate();

  const productFiter = test.filter((element, index) => 
  {
    if (element.getrgory == 'NEW') {
        
    }return element.getrgory == 'NEW'
  }
  
  )

  const productFiter1 = test.filter((element, index) => 
  {
    if (element.getrgory == 'OLD') {
        
    }return element.getrgory == 'OLD'
  }
  
  )


  const productFiter2 = test.filter((element, index) => 
  {
    if (element.getrgory == 'SALE') {
        
    }return element.getrgory == 'SALE'
  }
  
  )

  const [openModal, setOpenModal] = useState(false);



  return (
    <>
      <div className="h-96 sm:h-64 xl:h-80 2xl:h-96   ">
        <Carousel className="h-[70vh]">
          <div className="imagecarousel2 text-center text-white  flex flex-col justify-center items-center ">
            <h2>Women Collection 2018 </h2>
            <h1 className="font-bold text-5xl p-2">NEW ARRIVALS</h1>
            <button className="bg-white text-black  w-[8%] max-md:w-[30%] border-collapse rounded-full hover:bg-red-600 hover:text-white">
              SHOP NOW{" "}
            </button>
          </div>
          <div className="imagecarousel1 text-center text-white  flex flex-col justify-center items-center ">
            <h2>Women Collection 2018 </h2>
            <h1 className="font-bold text-5xl p-2">NEW ARRIVALS</h1>
            <button className="bg-white max-md:w-[30%] text-black  w-[8%] border-collapse rounded-full hover:bg-red-600 hover:text-white">
              SHOP NOW{" "}
            </button>
          </div>
          <div className="imagecarousel3 text-center text-white  flex flex-col justify-center items-center  ">
            <h2>Women Collection 2018 </h2>
            <h1 className="font-bold text-5xl p-2">NEW ARRIVALS</h1>
            <button className="bg-white max-md:w-[30%] text-black  w-[8%] border-collapse rounded-full hover:bg-red-600 hover:text-white">
              SHOP NOW{" "}
            </button>
          </div>
        </Carousel>
      </div>
      <div className=" flex flex-row  max-md:flex-col  max-md:w-[70%]  max-md:mx-20 gap-8 my-40 mx-40">
        <div className="flex  flex-col gap-4">
          <div className=" overflow-hidden relative ">
            <img
              src={immege1}
              className=" h-[60vh] relative  hover:scale-110 transition  "
              alt=""
            />
            <button className="bg-white p-2 w-25 text-center  absolute top-80  hover:bg-red-500 hover:text-white left-28">
              DRESSES
            </button>
          </div>
          <div className=" overflow-hidden relative ">
            <img
              src={immege4}
              className=" h-[50vh] relative  hover:scale-110 transition  "
              alt=""
            />
            <button className="bg-white p-2 w-25 text-center  absolute top-60  hover:bg-red-500 hover:text-white left-36">
              SUNGLASSES
            </button>
          </div>
        </div>

        <div className="flex  flex-col gap-4">
          <div className=" overflow-hidden  relative">
            <img
              src={immege2}
              className=" h-[50vh]  hover:scale-110 transition  "
              alt=""
            />
            <button className="bg-white p-2 w-25 text-center  absolute top-60  hover:bg-red-500 hover:text-white  left-36">
              WATCHES
            </button>
          </div>
          <div className=" overflow-hidden relative ">
            <img
              src={immege5}
              className=" h-[60vh]  hover:scale-110 transition  "
              alt=""
            />
            <button className="bg-white p-2 w-25 text-center  absolute top-80  hover:bg-red-500 hover:text-white left-24">
              FOOTRWEAR
            </button>
          </div>
        </div>

        <div className="flex  flex-col gap-4">
          <div className=" overflow-hidden  relative">
            <img
              src={immege3}
              className=" h-[60vh]  hover:scale-110 transition  "
              alt=""
            />
            <button className="bg-white p-2 w-25 text-center  absolute top-80  hover:bg-red-500 hover:text-white left-36">
              BAGS
            </button>
          </div>
          <div className=" overflow-hidden relative ">
            <img
              src={immege6}
              className=" h-[50vh]  hover:scale-110 transition  "
              alt=""
            />
            <button className="bg-white p-2 w-25 text-center  absolute top-60  hover:bg-red-500 hover:text-white left-36">
              ACCESSORIES
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-center font-bold text-3xl">FEATURED PRODUCTS</h1>


          
            <div className="flex justify-center text-center items-center m-2 ">

            <Tabs aria-label="Default tabs" className="flex justify-center w-full">
      <Tabs.Item active title="NEW">
       <div className="flex p-3 max-md:my-5   max-md:mx-6   max-md:gap-5   max-md:flex-col gap-5 justify-center items-center">
        {
            productFiter.map((element, index) => 
            <div>
            
                <img src={element.imge}  className="w-[70%] h-[80%]" alt="" />
          
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
                <p className=" w-[70%]  hover:text-red-500  "  onClick={() => navigate(`/products/${element.name}`)}>{element.desc} </p>
                <p className="w-[60%] ">{element.prix}</p>
            </div>
            
            
            )
        }</div>
      </Tabs.Item>
      <Tabs.Item title="SALE" >
     <div className="flex p-3 gap-5    max-md:my-5   max-md:mx-6   max-md:gap-5 max-md:flex-col justify-center items-center">
      {
            productFiter1.map((element, index) => 
            <div>
                <img src={element.imge} className="w-[70%] h-[80%]" alt="" />
                <Button className=" " onClick={() => setOpenModal(true)} >ADD TO CART</Button>
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
                <p className=" w-[70%]  hover:text-red-500 " onClick={() => navigate(`/products/${element.name}`)}>{element.desc} </p>
                <p className="w-[60%] ">{element.prix}</p>
            </div>
            )
        }</div>
      </Tabs.Item>
      <Tabs.Item title="OLD">
      <div className="flex max-md:my-5   max-md:mx-6   max-md:gap-5    max-md:flex-col  justify-center items-center">
      {
            productFiter2.map((element, index) => 
            <div>
                <img src={element.imge} className="w-[70%] h-[80%]" alt="" />
                <Button className=" " onClick={() => setOpenModal(true) }   >ADD TO CART</Button>
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
                <p className=" w-[70%]  hover:text-red-500  "  onClick={() => navigate(`/products/${element.name}`)}>{element.desc} </p>
                <p className="w-[60%] ">{element.prix}</p>
            </div>
            )
        }
      </div>
      </Tabs.Item>
    </Tabs>

       

      
                </div>
      

      
      <div className=" h-[100%] max-md:flex-col   p-20 bg-[#f0f0f0f0]  flex justify-center items-center">
        <div className=" text-center relative text-white  flex flex-col   justify-center items-center   ">
          <div className="overflow-hidden">
            <img
              src={immege17}
              className="w-[80vw]  h-[60vh]  hover:scale-110 transition "
              alt=""
            />
          </div>
          <div className=" absolute ">
            <h2 className="font-bold text-2xl p-2">The Beauty</h2>
            <h1 className="font-bold text-6xl p-2">LOOKBOOK</h1>
            <a className="font-bold text-xl p-2 ">VIEW COLLECTION</a>
          </div>
        </div>
        <div className="w-[100%] relative overflow-hidden  bg-white">
          <img
            src={newDataBase.imge}
            className=" hover:scale-110 transition w-[80vw] h-[60vh] " 
            alt=""
          />
          <p className="absolute h-[100%] top-64 left-64 hover:text-red-600 max-md:text-center max-md:top-50  max-md:left-10 "  >
            Boxy2 T-Shirt with Roll Sleeve
          </p>
        </div>
      </div>
      <h1 className="text-center font-bold text-3xl m-10">OUR BLOG</h1>
      <div className="flex max-md:flex-col gap-6 justify-evenly m-12">
        <div className="overflow-hidden">
          <img
            src={immege18}
            className="w-[89%]  hover:scale-110 transition"
            alt=""
          />
          <p className="text-xl hover:text-red-500 w-[80%] p-2">
            Black Friday Guide: Best Sales & Discount Codes
          </p>
          <p className="text-gray-400  w-[80%] p-2">
            by fashe-theme Admin on Dec 28,2017
          </p>
          <p className="text-gray-400  w-[80%] p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
            turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
          </p>
        </div>
        <div className="overflow-hidden">
          <img src={immege20} className=" hover:scale-110 transition" alt="" />
          <p className="text-xl  hover:text-red-500 w-[80%] p-2">
            The White Sneakers Nearly Every Fashion Girls Own
          </p>
          <p className="text-gray-400  w-[80%] p-2">
            by fashe-theme Admin on Dec 28,2017
          </p>
          <p className="text-gray-400  w-[80%] p-2">
            Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
            pellentesque mattis augue id euismod. Inter-dum et...
          </p>
        </div>
        <div className="overflow-hidden ">
          <img
            src={immege21}
            className="w-[89%]  hover:scale-110 transition"
            alt=""
          />
          <p className="text-xl  hover:text-red-500 w-[80%] p-2">
            New York SS 2018 Street Style: By Annina Mislin
          </p>
          <p className="text-gray-400  w-[80%] p-2">
            by fashe-theme Admin on Dec 28,2017
          </p>
          <p className="text-gray-400  w-[80%] p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
            turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
          </p>
        </div>
      </div>
      <h1 className="text-center font-bold text-3xl m-10">
        @ FOLLOW US ON INSTAGRAM
      </h1>
      <div className="flex  max-md:flex-col  max-md:gap-6 justify-evenly m-10">
        <div>
          <p className="text-xl text-gray-400 text-center ">
            Free Delivery Worldwide
          </p>
          <p className=" text-gray-400 text-center ">
            Mirum est notare quam littera gothica
          </p>
        </div>
        <div className="textt px-10">
          <p className="text-xl text-gray-400 text-center  ">30 Days Return</p>
          <p className=" text-gray-400  text-center ">
            Simply return it within 30 days for an exchange.
          </p>
        </div>
        <div className="textt px-10">
          <p className="text-xl text-gray-400 text-center ">Store Opening</p>
          <p className=" text-gray-400  text-center ">
            Shop open from Monday to Sunday
          </p>
        </div>
      </div>{" "}
    </>
  );
};
