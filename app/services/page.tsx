"use client";
import { easeIn, easeInOut, motion } from "framer-motion";
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
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.8, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-centergap-6 group"
              >
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent  transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
