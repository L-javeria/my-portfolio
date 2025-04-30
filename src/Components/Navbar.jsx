import React, { useState } from "react";
import logo2 from "../Assets/removal.ai-javeria-lodhi.png";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [context, setContext] = useState(false);

  const handleIcons = () => {
    setContext(!context);
  };

  return (
    <div className="fixed w-full h-[75px] s text-white flex justify-between items-end px-14 z-10 backdrop-blur-md ">
      <div className="w-[100px] flex justify-center items-center h-full mx-4 ">
        <img
          className=""
          src={logo2}
          alt="logo"
        />
      </div>
      <ul className="hidden md:flex h-full text-lg uppercase pt-2 font-[Rokkitt] ">
        <li className="hover-underline-animation px-6">Home</li>
        <li className="hover-underline-animation px-6">Experience</li>
        <li className="hover-underline-animation px-6">Skills</li>
        <li className="hover-underline-animation px-6">Work</li>
        <li className="hover-underline-animation px-6">Contact</li>
      </ul>
      <div className="md:hidden pb-6 cursor-pointer" onClick={handleIcons}>
        {!context ? <FaBars /> : <IoMdClose size={20} />}
      </div>

      <ul
        className={
          context
            ? "fixed left-[60%] top-0 border-r w-[40%] h-full bg-slate-600 border-r-gray-700 z-10 md:hidden "
            : "fixed left-[-100%]"
        }
      >
        <p className="m-4 p-3 px-[82%] cursor-pointer" onClick={handleIcons}>
          <IoMdClose size={20} />
        </p>
        <ul className="py-[20px] px-3 flex flex-col text-lg uppercase font-[Rokkitt]">
          <li className=" border-b border-gray-400">Home</li>
          <li className=" border-b border-gray-400">About</li>
          <li className="border-b border-gray-400">Skills</li>
          <li className="border-b border-gray-400">Work</li>
          <li className="">Contact</li>
        </ul>
      </ul>

      {/* <div className="hidden lg:flex flex-col top-[400px] absolute left-0 z-10 ">
        <ul>
          <li className="w-[160px] h-[60px] m-0 p-4 flex ml-[-100px] justify-center rounded-sm hover:ml-[-10px] bg-blue-600 duration-500 ">
            <a
              className="flex justify-between items-center w-full  "
              href="/"
            >
              LinkedIn <FaLinkedin size={27} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] m-0 p-4 rounded-sm flex justify-center ml-[-100px] bg-[#353b3c] hover:ml-[-10px] duration-500 ">
            <a
              className="flex justify-between items-center w-full text-white "
              href="/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] m-0 p-4 rounded-sm flex justify-center ml-[-100px] bg-[#6fc2b0] hover:ml-[-10px] duration-500 ">
            <a
              className="flex justify-between items-center w-full text-white "
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] m-0 p-4 rounded-sm flex justify-center ml-[-100px] bg-[#565f69] hover:ml-[-10px] duration-500 ">
            <a
              className="flex justify-between items-center w-full text-white "
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
