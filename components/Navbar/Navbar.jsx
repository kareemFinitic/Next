import Image from "next/image";
import React from "react";

import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import bell from "../../assets/images/bell.svg";
import user from "../../assets/images/user.png";
import add from "../../assets/images/add-circle.png";
import globel from "../../assets/images/global.svg";
import Link from "next/link";
const Navbar = () => {

  
  return (

    <div>
      <header style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8 xl:px-28 bg-white">
         <Link href="/" className="block text-teal-600">
            <Image src={logo} />
         </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 active:text-blue-500 active:underline text-lg"
                    href="/"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 active:text-blue-500 active:underline text-lg"
                    href="/task"
                  >
                    {" "}
                    UI-Task{" "}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div className="mx-6 mt-2">
                  <Image src={search} alt="image" />
                </div>
                <div className="mt-2">
                  <Image src={bell} alt="image" />
                </div>

                <div className="mx-7 mt-2">
                  <Image
                    src={user}
                    width={40}
                    height={20}
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "20px",
                    }}
                    alt="image"
                  />
                </div>
            <button className="text-gray-800 font-bold xl:py-2 xl:px-4 lg:py-2 lg:px-4 md:py-2 md:px-4 sm:py-1 sm:px-1 inline-flex  items-center bg-gradient-to-r from-pink-700 to-orange-500  rounded-lg ">
                  <Image src={add} />
                  <span className="text-white ml-2">Add new product</span>
                </button>
                <div className="mt-2 ms-2">
                  <Image src={globel} alt="image" />
                </div>
                <p className="mt-2 font-bold"> EN</p>
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};


export default Navbar;
