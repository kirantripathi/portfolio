import Image from "next/image";
import React from "react";
import { Crypto, Netflix, Property, Twitch } from "../public/assets/projects";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const projectInfo = [
  {
    name: "Crypto",
    img: Crypto,
    route: "/crypto",
  },
  {
    name: "Netflix",
    img: Netflix,
    route: "/property",
  },
  {
    name: "Property",
    img: Property,
    route: "/property",
  },
  {
    name: "Twitch",
    img: Twitch,
    route: "/property",
  },
];

const Project = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px]  px-2 py-16 mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className=" grid  md:grid-cols-2 gap-8">
          {projectInfo?.map((item, index) => (
            <ProjectItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
