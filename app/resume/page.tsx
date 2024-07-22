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
import { Achievements } from "@/components/acheivements";

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio quae ea earum assumenda repellendus.",
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
        className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="skills"
            className="flex flex-col gap-[60px] xl:flex-row"
          >
            <TabsList className="max-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
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
                education
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
}
