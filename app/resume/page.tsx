"use client";

import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";

const skills = {
  title: "My Skills",
  description:
    "Proficient Full Stack developer with expertise in MERN stack and Next.js. Possessing a strong foundation in JavaScript, React, Node.js, Express, and MongoDB. Passionate about crafting robust and scalable web applications. Additionally, skilled in robotics with a focus on Embedded Systems",
  skillsList: [
    {
      icons: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icons: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icons: <FaJs />,
      name: "Javascript",
    },
    {
      icons: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icons: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icons: <SiExpress />,
      name: "Express",
    },
    {
      icons: <SiReact />,
      name: "React",
    },

    {
      icons: <SiNodedotjs />,
      name: "Node.js",
    },
    {
      icons: <SiTailwindcss />,
      name: "Tailwind",
    },
  ],
};
export default function Resume() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="skills"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] max-auto xl:mx-0 gap-6">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="about">About Me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="achievements" className="w-full">
                <Achievements />
              </TabsContent>
              <TabsContent value="skills" className="w-full">
                Skiils
              </TabsContent>
              <TabsContent value="about" className="w-full">
                about
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <Education />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
}
