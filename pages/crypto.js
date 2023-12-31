import Image from "next/image";
import React from "react";
import { Crypto, Netflix, Property, Twitch } from "../public/assets/projects";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Data = ["React", "JavaScript", "Tailwind", "React-Native"];

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh]  relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Property}
          alt="/"
        />
        <div className="z-10 p-2 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          <h2 className="py-2">Crypto</h2>
          <h3>React / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <p>Project</p>
          <h2>OverView</h2>
          <p>This app is built for helping buyer/seller of cryptocurrencies/</p>
          <button className="px-8 py-2  mt-4 mr-8">Demo</button>
          <button className="px-8 py-2  mt-4">Code</button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1">
            {Data?.map((item, i) => (
              <div key={i}>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
