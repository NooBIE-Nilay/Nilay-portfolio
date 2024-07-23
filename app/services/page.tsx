"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Backend Development",
    description:
      "Skilled in architecting and building scalable backend systems. Passionate about solving complex problems and delivering exceptional user experiences through efficient API development.",
    href: "",
  },
  {
    num: "02",
    title: "Frontend Development",
    description:
      "Passionate frontend developer crafting exceptional user experiences with React and Next.js. Skilled in building robust, scalable web applications. Let's create something amazing together!",
    href: "",
  },
  {
    num: "03",
    title: "Robotics Engineering",
    description:
      "I am also into Robotics as an secondary hobby, I'm a full-stack developer by day, building cool stuff on the web. By night (and weekends, let's be real), I geek out on robotics. Think of me as a code-slinging robot enthusiast.",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="justify-centergap-6 group flex flex-1 flex-col"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white transition-all duration-500 hover:-rotate-45 group-hover:bg-accent"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 group-hover:text-accent">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="w-full border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
