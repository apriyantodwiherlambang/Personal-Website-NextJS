"use client";

import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import { BsSend } from "react-icons/bs";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";
import Image from "next/image";

interface landingPage1Props {}

const landingPage1: FC<landingPage1Props> = ({}) => {
  return (
    <div className="container mx-auto mt-[75px]">
      <div className="grid grid-cols-2 gap-4">
        <div className="col flex flex-col">
          <div className="ml-[150px] mt-[75px]">
            <p className="text-lg">WEB DEVELOPER</p>
          </div>

          <div className="ml-[150px] mt-8">
            <p className="text-3xl">Hello, my name is</p>
          </div>

          <div className="ml-[150px]">
            <p className="text-3xl">Apriyanto Dwi Herlambang</p>
          </div>

          <div className="ml-[150px] mt-8">
            <p className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              fuga eum consectetur quo quae, ad ratione aliquid rem! Nihil,
              amet! Odio eius unde cupiditate harum quam! Placeat facilis beatae
              dolorem.
            </p>
          </div>

          <div className="ml-[150px] mt-4">
            <Button className="mr-4 rounded-full">
              Contact Me <BsSend className="w-4 h-4 ml-2" />
            </Button>
            <Button className="rounded-full">
              Download CV <AiOutlineDownload className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="ml-[150px] mt-4">
            <div className="flex">
              <AiOutlineLinkedin className="w-8 h-8 mr-4" />
              <AiFillGithub className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="col flex justify-center items-center relative">
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <Image
              src="/assets/shape.svg"
              width={400}
              height={400}
              className="object-cover"
              alt="Background shape"
            />
          </div>
          <p className="text-3xl relative z-10">
            <Image
              src="/assets/picture.png"
              width={400}
              height={400}
              alt="Picture of owner Personal Website"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default landingPage1;
