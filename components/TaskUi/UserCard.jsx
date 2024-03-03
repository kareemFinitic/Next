'use client'

import React from "react";

// images
import user from "../../assets/images/user.png";
import Image from "next/image";

// images boxs
import UserStick from "../../assets/images/user-tick.svg";
import TwoTone from "../../assets/images/twotone.svg";
import Magic from "../../assets/images/magic.svg";
const UserCard = () => {
  return (
    <div>
      <div className="bg-white h-auto w-11/12 rounded-lg px-9 py-8">
        {/* Image User  */}
        <div>
          <Image src={user} alt="user" />
        </div>

        {/* Content User  */}
        <div className="my-4">
          <h3 className="text-xl font-bold">Hala Ahmed </h3>
        </div>
        <div className="my-4">
          <p className="text-sm">
            I am Hala Ahmed, I am the owner of the local brand called Beauty
            which is for Mackeup and Skin Care.
          </p>
        </div>

        <div className="mt-7 flex gap-5">
          {/* Following  */}
          <div
            className="w-1/3 rounded-lg px-3 py-4 flex"
            style={{ backgroundColor: "#FFF5E9" }}
          >
            <div className="text-center mt-2">
              <Image src={UserStick} alt="user" />
            </div>
            <div className="ms-4">
              <h3 className="text-sm font-bold">5 </h3>
              <h3 className="text-sm">Following </h3>
            </div>
          </div>
          {/* Followers  */}
          <div
            className="w-1/3 rounded-lg px-3 py-4 flex"
            style={{ backgroundColor: "#FFF5E9" }}
          >
            <div className="text-center mt-2">
              <Image src={TwoTone} alt="user" />
            </div>
            <div className="ms-4">
              <h3 className="text-sm font-bold">5 </h3>
              <h3 className="text-sm">Followers </h3>
            </div>
          </div>

          {/* Rate  */}
          <div
            className="w-1/3 rounded-lg px-3 py-4 flex"
            style={{ backgroundColor: "#FFF5E9" }}
          >
            <div className="text-center mt-2">
              <Image src={Magic} alt="user" />
            </div>
            <div className="ms-4">
              <div className="flex">
                <h3 className="text-sm font-bold">4.2 </h3>
                <p className="text-xs ms-1">(15) </p>
              </div>
              <h3 className="text-sm">Rate </h3>
            </div>
          </div>
        </div>

        {/* Button  */}
    <button className="text-gray-800 font-bold py-3 px-4  flex items-center justify-center bg-gradient-to-r from-pink-700 to-orange-500  rounded-xl w-full mt-6 ">
          <span className="text-white ml-2 text-center ">Follow</span>
        </button>    
      </div>
    </div>
  );
};

export default UserCard;
