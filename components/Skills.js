import Image from "next/image";
import React from "react";
import {
  Html,
  Css,
  Firebase,
  Github,
  JavaScriptLogo,
  ReactLogo,
} from "../public/assets/skills";

const skillSet = [
  {
    name: "HTML",
    img: Html,
  },
  {
    name: "Github",
    img: Github,
  },
  {
    name: "Css",
    img: Css,
  },
  {
    name: "Firebase",
    img: Firebase,
  },
  {
    name: "JavaScript",
    img: JavaScriptLogo,
  },
  {
    name: "React",
    img: ReactLogo,
  },
];

const Skills = () => {
  return (
    <div id="skills" className=" w-full lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651ef]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillSet.map((item, index) => (
            <div
              key={index}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
              <div className="grid grid-cols-2 gap-4  justify-center items-center ">
                <div className="m-auto">
                  <Image src={item?.img} width="64" height="64" alt="/" />
                </div>
                <div className=" flex flex-col items-center justify-center">
                  <h3>{item?.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
