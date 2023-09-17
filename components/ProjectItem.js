import Image from "next/image";
import React from "react";
import { Crypto, Netflix, Property, Twitch } from "../public/assets/projects";
import Link from "next/link";

const ProjectItem = ({ item, index }) => {
  return (
    <div
      key={index}
      className="relative flex items-center justify-center h-auto  w-full shadow-xl shadow-gray-400 rounded-xl p-4  group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={item?.img}
        alt="/"
      />
      <div className=" hidden group-hover:block absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]  ">
        <h3 className=" text-2xl text-white tracking-wider text-center">
          {item?.name}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React JS</p>
        <Link href={item?.route}>
          <p className="text-center px-[30px] py-3 rounded-lg bg-white text-gray-700">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
