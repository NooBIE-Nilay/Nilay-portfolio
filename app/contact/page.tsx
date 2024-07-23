"use client";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 8167 5880 98",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "nbanerjee02.asn@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Durgapur, West Bengal, India",
  },
];
export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10">
              <h3 className="text-3xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                Let's build something amazing together! Have a project in mind
                or simply want to connect? Feel free to reach out. I'm eager to
                discuss your ideas and explore potential collaborations.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="full_stack">
                      Full Stack Development
                    </SelectItem>
                    <SelectItem value="front_end">
                      Front End Development
                    </SelectItem>
                    <SelectItem value="back_end">
                      Backend Development
                    </SelectItem>
                    <SelectItem value="robotics">
                      Robotics/Embedded Systems
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              <Button size="md" className="max-w-40 capitalize">
                send message
              </Button>
            </form>
          </div>
          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:h-[72px] xl:w-[72px]">
                      <div className="text-[22px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
