import React from "react";
import logo from "../Assets/main_bg.jpeg";
import { HiArrowNarrowRight } from "react-icons/hi";
import SocialContact from "./SubComponents/SocialContact";

const Home = () => {
  return (
    <div name="home" className="w-full flex h-screen bg-[#0f0f0f] px-16">
      {/* <div className="w-full h-screen lg:flex justify-center  items-center hidden">
        <img className=" w-full h-full hue-rotate-30" src={logo} alt="lgoo" />
      </div> */}
      <div className="h-full flex flex-col justify-center mx-auto">
        <div className=" text-2xl px-[10%] text-gray-200">
          <p className="font-[Rokkitt] ">Hi, my name is</p>
          <h1 className="text-4xl my-3 sm:text-7xl text-shadow-purple-glow text-[#fdc1fd]">
            Javeria Lodhi
          </h1>
          <h3 className="text-3xl sm:text-6xl font-[Rokkitt] text-gray-300 ">
            I'm a Full-Stack Developer fluent in AWS
          </h3>
          <p className="text-base sm:text-lg tracking-wide mt-5 mb-3">
            Welcome to a Portfolio Fusing Full-Stack Expertise with AWS Mastery.
            I'm dedicated to architecting innovation and delivering seamless
            solutions as an AWS Practitioner and Full-Stack Developer.
          </p>
          <div className="mb-4">
            <SocialContact />
          </div>
          <div>
            <button className="group flex justify-between items-center w-[150px] h-[40px] text-lg border-2 text-white px-4 hover:border-[#711971] hover:shadow hover:shadow-[#711971] hover:text-[#711971]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
