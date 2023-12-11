import React from "react";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import javaScript from "../Assets/javascript.png";
import java from "../Assets/java-logo.png";
import react from "../Assets/react.png";
import nodeJs from "../Assets/node.png";
import springBoot from "../Assets/springboot.png";
import tailwind from "../Assets/tailwind.png";
import sql from "../Assets/sql.png";
import postgres from "../Assets/PostgreSQL-Logo.png";
import aws from "../Assets/aws.png";
import github from "../Assets/github.png";
import canva from "../Assets/canva.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-red-400">
      <div className="flex flex-col mx-auto w-full h-full max-w-[1000px] p-4">
          <div className=" mb-[40px] ">
            <h1 className="font-bold text-4xl inline border-b-4 border-rose-700"> Experience </h1>
            <p className="py-4 text-lg ">
              {" "}
              These are the technologies I have worked with{" "}
            </p>
          </div>
          <div className=" grid sm:grid-cols-4 gap-4 grid-cols-2 w-full">
          <div className=" rounded-md hover:shadow-2xl shadow-xl hover:scale-110 duration-500">
              <div className="flex flex-col justify-center items-center">
                <img className="py-2 w-20 mx-auto " src={aws} alt="html-logo" />
                <div className="my-4">
                  <p>AWS</p>
                </div>
              </div>
            </div>
            <div className="rounded-md hover:shadow-2xl shadow-xl hover:scale-110 duration-500">
              <div className="flex flex-col justify-center items-center ">
                <img className="py-2 w-20 mx-auto" src={html} alt="html-logo" />
                  <p className="my-4">HTML </p>
              </div>
            </div>
            <div className="rounded-md hover:shadow-2xl shadow-xl hover:scale-110 duration-500">
              <div className="flex flex-col justify-center items-center">
                <img className="py-2 w-20 mx-auto" src={css} alt="html-logo" />
                <div className="my-4">
                  <p>CSS </p>
                </div>
              </div>
            </div>
            <div className=" rounded-md hover:shadow-2xl shadow-xl hover:scale-110 duration-500">
              <div className="flex flex-col justify-center items-center">
                <img className="py-2 w-20 mx-auto" src={javaScript} alt="html-logo" />
                <div className="my-4">
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 rounded-md hover:shadow-2xl shadow-xl">
              <div className="flex flex-col justify-center items-center">
                <img className="py-2 w-20 mx-auto" src={java} alt="html-logo" />
                <div className="my-4">
                  <p>Java </p>
                </div>
              </div>
            </div>
            <div className=" hover:scale-110 duration-500 rounded-md hover:shadow-2xl shadow-xl">
              <div className="flex flex-col justify-center items-center">
                <img className="py-2 w-20 mx-auto" src={react} alt="html-logo" />
                <div className="my-4">
                  <p>ReactJs</p>
                </div>
              </div>
            </div>
            <div className=" rounded-md hover:shadow-2xl shadow-xl hover:scale-110 duration-500">
              <div className="flex flex-col justify-center items-center">
                <img className="py-2 w-20 mx-auto" src={nodeJs} alt="html-logo" />
                <div className="my-4">
                  <p>NodeJs</p>
                </div>
              </div>
            </div>
            <div className=" rounded-md hover:shadow-2xl shadow-xl hover:scale-110 duration-500">
              <div className="flex flex-col justify-center items-center">
                <img className="py-2 w-[86px] mx-auto" src={springBoot} alt="html-logo" />
                <div className="my-4">
                  <p>Spring Boot</p>
                </div>
              </div>
            </div>
            <div className=" rounded-md hover:shadow-2xl shadow-xl hover:scale-110 duration-500">
              <div className="flex flex-col justify-center items-center">
                <img className="py-2 w-20 mx-auto" src={sql} alt="html-logo" />
                <div className="my-4">
                  <p>MySQl</p>
                </div>
              </div>
            </div>
            <div className=" rounded-md hover:shadow-2xl shadow-xl hover:scale-110 duration-500">
              <div className="flex flex-col w-[230px] justify-center items-center">
                <img className="py-2 w-20 mx-auto" src={postgres} alt="html-logo" />
                <div className="my-4">
                  <p>PostgreSQL</p>
                </div>
              </div>
            </div>
            <div className=" rounded-md hover:shadow-2xl shadow-xl hover:scale-110 duration-500">
              <div className="flex flex-col justify-center items-center">
                <img className="py-2 w-20 mx-auto" src={tailwind} alt="html-logo" />
                <div className="my-4">
                  <p>TailwindCSS</p>
                </div>
              </div>
            </div>
            
            <div className=" rounded-md hover:shadow-2xl shadow-xl hover:scale-110 duration-500">
              <div className="flex flex-col justify-center items-center">
                <img className="py-2 w-20 mx-auto" src={github} alt="html-logo" />
                <div className="my-4">
                  <p>GitHub</p>
                </div>
              </div>
            </div>
            <div className=" rounded-md hover:shadow-2xl shadow-xl hover:scale-110 duration-500">
              <div className="flex flex-col justify-center items-center">
                <img className="py-2 w-20 mx-auto" src={canva} alt="html-logo" />
                <div className="my-4">
                  <p>Canva</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Skills;
