// images
import Image from "next/image";
import add from "../../../assets/images/add-circle.png";
import React from 'react';

// components
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div>
      <div className="bg-white h-auto w-full overflow-auto rounded-xl  px-5 py-2">
        {/* header content  */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            {/* button one  */}
            <button
              className=" font-bold py-2 px-6  flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
              style={{
                backgroundColor: "#FFF5E9",
                border: "2px solid #FF951D",
              }}
            >
              <span style={{ color: "#FF951D" }} className=" ml-2 text-center ">
                Products
              </span>
            </button>
            {/* button two  */}
            <button
              className=" font-bold py-2 px-6  flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #E0E0E0",
              }}
            >
              <span style={{ color: "#828282" }} className=" ml-2 text-center ">
                Articles
              </span>
            </button>
            {/* button three  */}

            <button
              className=" font-bold py-2 px-6  flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #E0E0E0",
              }}
            >
              <span style={{ color: "#828282" }} className=" ml-2 text-center ">
                Reviews
              </span>
            </button>
          </div>
          <div>
            <button className="text-gray-800 font-bold py-2 px-4  inline-flex items-center bg-gradient-to-r from-pink-700 to-orange-500  rounded-lg">
              <Image src={add} alt="image" />
              <span className="text-white ml-2">Add Review </span>
            </button>
          </div>
        </div>

        <ProductCard />
      </div>
    </div>
  );
};

export default Product;
