"use client";

import React, { FC } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { AiOutlineUser, AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk, MdOutlineCalendarMonth } from "react-icons/md";

interface LandingPage2Props {}

const LandingPage2: FC<LandingPage2Props> = ({}) => {
  return (
    <>
      <div className="flex justify-center mt-[150px] font-bold">About Me</div>

      <div className="container mx-auto mt-[80px]">
        <div className="grid grid-cols-2 gap-4">
          <div className="col">
            <div className="col flex justify-center items-center relative">
              <div className="absolute bottom-[-35px] left-5 z-0">
                <Image
                  src="/assets/shape2.svg"
                  width={300}
                  height={500}
                  className="object-cover"
                  alt="Background shape"
                />
              </div>
              <div className="text-3xl relative z-10">
                <Image
                  src="/assets/picture.png"
                  width={400}
                  height={400}
                  alt="Picture of owner Personal Website"
                />
              </div>
            </div>
          </div>
          {/* Kosongkan konten */}

          <div className="col">
            <div className="w-full">
              <Tabs defaultValue="personalInfo" className="w-auto">
                <TabsList className="grid grid-cols-3 rounded-full max-w-96">
                  <TabsTrigger
                    value="personalInfo"
                    className="p-1 rounded-full"
                  >
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger
                    value="qualifications"
                    className="p-1 rounded-full"
                  >
                    Qualifications
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="p-1 rounded-full">
                    Skills
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="personalInfo">
                  <div className="text-lg mt-8">WEB DEVELOPER</div>
                  <div className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo cum unde praesentium blanditiis, quidem excepturi
                    nesciunt quam soluta, sed iste porro, eos voluptas
                    provident. Iusto rem accusantium et consectetur distinctio.
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
                    <div>
                      <div className="flex items-center">
                        <AiOutlineUser className="w-5 h-5" />
                        <span className="ml-2">Apriyanto Dwi Herlambang</span>
                      </div>

                      <div className="flex items-center mt-2">
                        <AiOutlineMail className="w-5 h-5" />
                        <span className="ml-2">
                          dwiherlambangapri@gmail.com
                        </span>
                      </div>

                      <div className="flex items-center mt-2">
                        <IoSchoolOutline className="w-5 h-5" />
                        <span className="ml-2">Information Technology.</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-start mt-2">
                        <MdOutlinePhoneInTalk className="w-5 h-5" />
                        <span className="ml-2">+62 812-8517-0186</span>
                      </div>

                      <div className="flex items-center justify-start mt-2">
                        <MdOutlineCalendarMonth className="w-5 h-5" />
                        <span className="ml-2">Born on 14 Apr, 1999</span>
                      </div>

                      <div className="flex items-center justify-start mt-2">
                        <AiOutlineHome className="w-5 h-5" />
                        <span className="ml-2">
                          South Tangerang City - Indonesia
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    Language Skill
                    <Separator className="mt-2"/>
                    <p className="mt-2">Indonesia, English</p>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">Qualifications</TabsContent>
                <TabsContent value="skills">Skills</TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage2;
