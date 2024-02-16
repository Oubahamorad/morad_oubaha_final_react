import React, { createContext, useState } from "react";
import immege7 from "../assets/img/item-02.jpg";
import immege8 from "../assets/img/item-03.jpg";
import immege9 from "../assets/img/item-06.jpg";
import immege10 from "../assets/img/item-07.jpg";
import immege11 from "../assets/img/item-10.jpg";
import immege12 from "../assets/img/item-11.jpg";
import immege13 from "../assets/img/item-12.jpg";
import immege14 from "../assets/img/item-13.jpg";
import immege15 from "../assets/img/item-15.jpg";
import immege16 from "../assets/img/item-16.jpg";
import immege17 from "../assets/img/item-17.jpg";






export const MyContext = createContext();
export const MyProvider = ({ children }) => {
   
const [cart ,setCart] = useState([])

    
  const [test, setTest] = useState([
    {
      name: "Boxy1 T-Shirt with Roll Sleeve",
      desc: "0 Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
      prix: "$20.00",
      size: ["s", "M", "L", "XL"],
      color: ["red", "grey", "black"],
      imge: immege7,
      button: "ADD TO CART",
      getrgory:'NEW'
    },
    {
        name: "Boxy2 T-Shirt with Roll Sleeve",
        desc: "2 Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
        prix: "$20.00",
        size: ["s", "M", "L", "XL"],
        color: ["red", "grey", "black"],
        imge: immege13,
        button: "ADD TO CART",
        getrgory:'NEW'
      },
      {
        name: "Boxy3 T-Shirt with Roll Sleeve",
        desc: "3 Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
        prix: "$20.00",
        size: ["s", "M", "L", "XL"],
        color: ["red", "grey", "black"],
        imge: immege14,
        button: "ADD TO CART",
        getrgory:'OLD' 
        // NEW
      },

      {
        name: "Boxy4 T-Shirt with Roll Sleeve",
        desc: "4 Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
        prix: "$20.00",
        size: ["s", "M", "L", "XL"],
        color: ["red", "grey", "black"],
        imge: immege17,
        button: "ADD TO CART",
        getrgory:'OLD'
      },

    {
      name: "Boxy5 T-Shirt with Roll Sleeve",
      desc: "1 Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
      prix: "$20.00",
      size: ["s", "M", "L", "XL"],
      color: ["red", "grey", "black"],
      imge: immege8,
      getrgory:'NEW',
    //   SALE
    },
    {
      name: "Boxy6 T-Shirt with Roll Sleeve",
      desc: "5 Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
      prix: "$20.00",
      size: ["s", "M", "L", "XL"],
      color: ["red", "grey", "black"],
      imge: immege9,
      getrgory:'OLD',
    },
    {
        name: "Boxy7 T-Shirt with Roll Sleeve",
        desc: "6 Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
        prix: "$20.00",
        size: ["s", "M", "L", "XL"],
        color: ["red", "grey", "black"],
        imge: immege15,
        getrgory:'OLD',
      },
    {
      name: "Boxy8 T-Shirt with Roll Sleeve",
      desc: "7 Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
      prix: "$20.00",
      size: ["s", "M", "L", "XL"],
      color: ["red", "grey", "black"],
      imge: immege10,
      getrgory:'SALE',
    },
    {
      name: "Boxy10 T-Shirt with Roll Sleeve",
      desc: "8 Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
      prix: "$20.00",
      size: ["s", "M", "L", "XL"],
      color: ["red", "grey", "black"],
      imge: immege11,
      getrgory:'SALE',
    },
    {
        name: "Boxy9 T-Shirt with Roll Sleeve",
        desc: " 9 Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
        prix: "$20.00",
        size: ["s", "M", "L", "XL"],
        color: ["red", "grey", "black"],
        imge: immege16,
        getrgory:'SALE',
      },
      {
        name: "Boxy10 T-Shirt with Roll Sleeve",
        desc: "10 Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
        prix: "$20.00",
        size: ["s", "M", "L", "XL"],
        color: ["red", "grey", "black"],
        imge: immege8,
        getrgory:'SALE',
       
      },
    {
      name: "Boxy11 T-Shirt with Roll Sleeve",
      desc: "11 Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
      prix: "$20.00",
      size: ["s", "M", "L", "XL"],
      color: ["red", "grey", "black"],
      imge: immege12,
      getrgory:'NEW',
    },

  ]);

  return (
    <>
      <MyContext.Provider value={[test, setTest, cart, setCart]} >
        {children}
      </MyContext.Provider>
    </>
  );
};
