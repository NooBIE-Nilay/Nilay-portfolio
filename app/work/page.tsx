"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "./data";
import Link from "next/link";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { SliderButtons } from "@/components/ui/sliderButtons";
export default function Work() {
  const [project, setProject] = useState(projects[0]);

  function HandleSlideChange(swiper: typeof Swiper.arguments) {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[30px]">
              <div className="text-outline text-8xl font-extrabold leading-none text-transparent">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.desc}</p>
              <ul className="flex gap-4">
                {/* @ts-ignore */}
                {project.stack.map((tech, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {tech.name}
                      {/* @ts-ignore */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="item-center my-2 flex gap-4">
                {/* @ts-ignore */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5 duration-500">
                        <SiGithub className="group-hover:transition-45 text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* @ts-ignore */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5 duration-500 hover:rotate-45">
                        <BsArrowUpRight className="group-hover:transition-45 text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={HandleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="group relative flex h-[460px] items-center justify-center bg-pink-50/20">
                      <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-black/10"></div>
                      <div className="relative h-full w-full">
                        <Image
                          fill
                          src={project.image}
                          alt="Project Image"
                          className="delay-500"
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-accent/60 xl:bg-accent hover:bg-accent-hover text-primary text-[22px] h-[88px]  w-[32px] mx-1 xl:mx-0 xl:h-[44px] xl:w-[44px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
