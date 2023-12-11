import React from "react";
import logo from "../Assets/main_bg.jpeg";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name='home' className="w-full flex h-screen bg-red-400">
      <div className="w-full h-screen lg:flex justify-center  items-center hidden">
        <img className=" w-full h-full" src={logo} alt="lgoo" />
      </div>
      <div className="h-full flex flex-col justify-center mx-auto">
        <div className=" text-2xl px-12 ">
          <p className="font-[Rokkitt]"> Hi, my name is</p>
            <h1 className="text-4xl my-3 sm:text-7xl"> Javeria Lodhi </h1>
            <h3 className="text-3xl sm:text-6xl font-[Rokkitt]  ">I'm a Full-Stack Developer fluent in AWS</h3>
            <p className="text-base sm:text-lg tracking-wide my-5 ">Welcome to a Portfolio Fusing Full-Stack Expertise with AWS Mastery. I'm dedicated to architecting innovation and delivering seamless solutions as an AWS Practitioner and Full-Stack Developer.</p>
        <div >
          <button className="group flex justify-between items-center w-[150px] h-[40px] text-lg border-2 text-white px-4 hover:bg-gray-400 hover:border-gray-600 hover:shadow-gray-600 hover:shadow-md hover:text-gray-700"> 
          View Work 
          <span className="group-hover:rotate-90 duration-300">
          < HiArrowNarrowRight/>
          </span>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
