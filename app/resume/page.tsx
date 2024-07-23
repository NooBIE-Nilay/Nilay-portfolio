"use client";
import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
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
              <TabsContent value="skills" className="h-full w-full">
                <Skills />
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
