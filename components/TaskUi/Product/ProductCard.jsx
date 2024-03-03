'use client'
import Image from "next/image";
import React, { useState } from "react";

// images
import hot from "../../../assets/images/hot.PNG";
import live from "../../../assets/images/live.PNG";
import heart from "../../../assets/images/heart.svg";
import heartRed from '../../../assets/images/heart-red.png'
const ProductCard = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);

  const toggleHeart = (setToggle, toggle) => {
    setToggle(!toggle);
  };
  return (
    <div className="my-8">
      <div className="flex gap-2">
        <h3 className="text-3xl font-bold"> Products</h3>
        <h3 className="text-lg mt-1"> (15)</h3>
      </div>

      <div className="flex g-3 mt-6">
        {/* left side  */}
        <div>
          <Image src={live} width={200} height={200} alt='image'/>
        </div>

        {/* right side  */}
        <div className="mt-6 ms-3 w-9/12">
          <div className="flex  justify-between ">
            <h5 className="text-lg">
              Six-piece clothing set (blouse - pants - hat and ...
            </h5>
       <div className="cursor-pointer" onClick={()=>toggleHeart(setToggle, toggle)}>
       {
                toggle ?   <Image src={heartRed} alt="heart" width={30} /> :  <Image src={heart} alt="heart" width={30} />
            }
       </div>
           
          </div>{" "}
          <div className="flex gap-1 mt-4">
            <h5 className="text-lg text-zinc-400">Starting price</h5>
            <h5 className="text-lg font-bold">1000 EGP</h5>
          </div>
          <div className="flex gap-10 mt--8">
            <div className="mt-8">
              <h5 className="text-lg text-zinc-400">Lot starts in</h5>
            </div>
            <div className="flex gap-3 h-9 ">
              <button
                className=" font-bold py-5 px-4  text-xl flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
                style={{
                  backgroundColor: "#FFF5E9",
                  border: "2px solid #FF951D",
                }}
              >
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center text-xl"
                >
                  2{" "}
                </span>
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center text-sm mt-1"
                >
                  {" "}
                  Days
                </span>
              </button>

              <button
                className=" font-bold py-5 px-4  flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
                style={{
                  backgroundColor: "#FFF5E9",
                  border: "2px solid #FF951D",
                }}
              >
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center  text-xl"
                >
                  10{" "}
                </span>
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center "
                >
                  {" "}
                  Hours
                </span>
              </button>

              <button
                className=" font-bold py-5 px-5 text-sm  flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
                style={{
                  backgroundColor: "#FFF5E9",
                  border: "2px solid #FF951D",
                }}
              >
                <div className="flex">
                  <span
                    style={{ color: "#FF951D" }}
                    className=" ml-2 text-center  text-xl"
                  >
                    50{" "}
                  </span>
                  <span
                    style={{ color: "#FF951D" }}
                    className=" ml-2 text-center mt-1 "
                  >
                    {" "}
                    minutes
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex g-3 mt-6">
        {/* left side  */}
        <div>
          <Image src={live} width={200} height={200} />
        </div>

        {/* right side  */}
        <div className="mt-6 ms-3 w-9/12">
        <div className="flex  justify-between ">
            <h5 className="text-lg">
              Six-piece clothing set (blouse - pants - hat and ...
            </h5>
       <div className="cursor-pointer" onClick={()=>toggleHeart(setToggle1, toggle1)}>
       {
                toggle1 ?   <Image src={heartRed} alt="heart" width={30} /> :  <Image src={heart} alt="heart" width={30} />
            }
       </div>
           
          </div>{" "}
          <div className="flex gap-1 mt-4">
            <h5 className="text-lg text-zinc-400">Starting price</h5>
            <h5 className="text-lg font-bold">1000 EGP</h5>
          </div>
          <div className="flex gap-10 mt--8">
            <div className="mt-8">
              <h5 className="text-lg text-zinc-400">Lot starts in</h5>
            </div>
            <div className="flex gap-3 h-9 ">
              <button
                className=" font-bold py-5 px-4  text-xl flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
                style={{
                  backgroundColor: "#FFF5E9",
                  border: "2px solid #FF951D",
                }}
              >
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center text-xl"
                >
                  2{" "}
                </span>
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center text-sm mt-1"
                >
                  {" "}
                  Days
                </span>
              </button>

              <button
                className=" font-bold py-5 px-4  flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
                style={{
                  backgroundColor: "#FFF5E9",
                  border: "2px solid #FF951D",
                }}
              >
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center  text-xl"
                >
                  10{" "}
                </span>
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center "
                >
                  {" "}
                  Hours
                </span>
              </button>

              <button
                className=" font-bold py-5 px-5 text-sm  flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
                style={{
                  backgroundColor: "#FFF5E9",
                  border: "2px solid #FF951D",
                }}
              >
                <div className="flex">
                  <span
                    style={{ color: "#FF951D" }}
                    className=" ml-2 text-center  text-xl"
                  >
                    50{" "}
                  </span>
                  <span
                    style={{ color: "#FF951D" }}
                    className=" ml-2 text-center mt-1 "
                  >
                    {" "}
                    minutes
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex g-3 mt-6">
        {/* left side  */}
        <div>
          <Image src={live} width={200} height={200} />
        </div>

        {/* right side  */}
        <div className="mt-6 ms-3 w-9/12">
        <div className="flex  justify-between ">
            <h5 className="text-lg">
              Six-piece clothing set (blouse - pants - hat and ...
            </h5>
       <div className="cursor-pointer" onClick={()=>toggleHeart(setToggle2, toggle2)}>
       {
                toggle2 ?   <Image src={heartRed} alt="heart" width={30} /> :  <Image src={heart} alt="heart" width={30} />
            }
       </div>
           
          </div>
          <div className="flex gap-1 mt-4">
            <h5 className="text-lg text-zinc-400">Starting price</h5>
            <h5 className="text-lg font-bold">1000 EGP</h5>
          </div>
          <div className="flex gap-10 mt--8">
            <div className="mt-8">
              <h5 className="text-lg text-zinc-400">Lot starts in</h5>
            </div>
            <div className="flex gap-3 h-9 ">
              <button
                className=" font-bold py-5 px-4  text-xl flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
                style={{
                  backgroundColor: "#FFF5E9",
                  border: "2px solid #FF951D",
                }}
              >
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center text-xl"
                >
                  2{" "}
                </span>
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center text-sm mt-1"
                >
                  {" "}
                  Days
                </span>
              </button>

              <button
                className=" font-bold py-5 px-4  flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
                style={{
                  backgroundColor: "#FFF5E9",
                  border: "2px solid #FF951D",
                }}
              >
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center  text-xl"
                >
                  10{" "}
                </span>
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center "
                >
                  {" "}
                  Hours
                </span>
              </button>

              <button
                className=" font-bold py-5 px-5 text-sm  flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
                style={{
                  backgroundColor: "#FFF5E9",
                  border: "2px solid #FF951D",
                }}
              >
                <div className="flex">
                  <span
                    style={{ color: "#FF951D" }}
                    className=" ml-2 text-center  text-xl"
                  >
                    50{" "}
                  </span>
                  <span
                    style={{ color: "#FF951D" }}
                    className=" ml-2 text-center mt-1 "
                  >
                    {" "}
                    minutes
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex g-3 mt-6">
        {/* left side  */}
        <div>
          <Image src={hot} width={200} height={200} alt='image'/>
        </div>

        {/* right side  */}
        <div className="mt-6 ms-3 w-9/12">
        <div className="flex  justify-between ">
            <h5 className="text-lg">
              Six-piece clothing set (blouse - pants - hat and ...
            </h5>
       <div className="cursor-pointer" onClick={()=>toggleHeart(setToggle3, toggle3)}>
       {
                toggle3 ?   <Image src={heartRed} alt="heart" width={30} /> :  <Image src={heart} alt="heart" width={30} />
            }
       </div>
           
          </div>
          <div className="flex gap-1 mt-4">
            <h5 className="text-lg text-zinc-400">Starting price</h5>
            <h5 className="text-lg font-bold">1000 EGP</h5>
          </div>

          <div className="flex gap-10 mt--8">
            <div className="mt-8">
              <h5 className="text-lg text-zinc-400">Lot starts in</h5>
            </div>
            <div className="flex gap-3 h-9 ">
              <button
                className=" font-bold py-5 px-4  text-xl flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
                style={{
                  backgroundColor: "#FFF5E9",
                  border: "2px solid #FF951D",
                }}
              >
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center text-xl"
                >
                  2{" "}
                </span>
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center text-sm mt-1"
                >
                  {" "}
                  Days
                </span>
              </button>

              <button
                className=" font-bold py-5 px-4  flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
                style={{
                  backgroundColor: "#FFF5E9",
                  border: "2px solid #FF951D",
                }}
              >
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center  text-xl"
                >
                  10{" "}
                </span>
                <span
                  style={{ color: "#FF951D" }}
                  className=" ml-2 text-center "
                >
                  {" "}
                  Hours
                </span>
              </button>

              <button
                className=" font-bold py-5 px-5 text-sm  flex items-center justify-center  rounded-2xl w-full mt-6 text-amber-500"
                style={{
                  backgroundColor: "#FFF5E9",
                  border: "2px solid #FF951D",
                }}
              >
                <div className="flex">
                  <span
                    style={{ color: "#FF951D" }}
                    className=" ml-2 text-center  text-xl"
                  >
                    50{" "}
                  </span>
                  <span
                    style={{ color: "#FF951D" }}
                    className=" ml-2 text-center mt-1 "
                  >
                    {" "}
                    minutes
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
