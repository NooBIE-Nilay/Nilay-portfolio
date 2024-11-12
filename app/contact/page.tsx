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
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { resolve } from "path";

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
function containsOnlyAlphabetsOrNumbers(str: string) {
  return str.split("").reduce((acc, char) => {
    return (
      acc &&
      ((char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        (char >= "0" && char <= "9"))
    );
  }, true);
}
function checkValidName(name: string): Boolean {
  if (name.length < 0) return false;
  if (name.length > 15) return false;
  if (!containsOnlyAlphabetsOrNumbers(name)) return false;
  return true;
}

function validateEmail(email: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
function checkValidEmail(email: string): Boolean {
  if (email.length <= 0) return false;
  if (email.length > 25) return false;

  if (!validateEmail(email)) return false;
  return true;
}
function validatePhone(str: string) {
  return str.split("").reduce((acc, char) => {
    return (acc && char >= "0" && char <= "9") || char == " ";
  }, true);
}

function checkValidPhone(phone: string) {
  if (phone.length >= 18) return false;
  return validatePhone(phone);
}

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (e: any) => {
    e.preventDefault();
    checkValidEmail(email);
    if (email == "" && phone == "") {
      toast.warn("Please Enter Either Email Or Contact No! ");
      return;
    }
    if (message == "") {
      toast.warn("Please Enter A Message!");
      return;
    }
    try {
      const subject = "Contact Request From NilayCodes.in";
      const body = {
        firstName,
        lastName,
        email_id: email,
        phone,
        service,
        message,
      };
      const myMail = "nbanerjee02.asn@gmail.com";
      const emails = email ? email + ", " + myMail : myMail;
      const timeout = new Promise((res, rej) => setTimeout(rej, 100000));
      toast.promise(timeout, {
        pending: "Sending Email ✉️",
        success: "Email sent Successful",
        error: "Email Sending Failed! ❌",
      });

      //TODO: use Promise to make this better
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          subject,
          body,
          email: emails,
        }),
      });
      const data = await res.json();
      if (data.status === 200) {
        toast.dismiss();
        toast.success("Email Sent Successfully 🎉");
        return;
      } else {
        toast.dismiss();
        toast.error("Email Sending Failed! ❌");
      }
    } catch (error) {
      console.log("Error sending Email", error);
    }
  };
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
                <Input
                  type="firstname"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => {
                    const temp = e.target.value;
                    if (checkValidName(temp)) setFirstName(temp);
                  }}
                />
                <Input
                  type="lastname"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => {
                    const temp = e.target.value;
                    if (checkValidName(temp)) setLastName(temp);
                  }}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => {
                    const temp = e.target.value;
                    if (checkValidPhone(temp)) {
                      setPhone(temp);
                    }
                  }}
                />
              </div>
              <Select
                onValueChange={(value) => setService(value)}
                defaultValue={service}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Full Stack Development">
                      Full Stack Development
                    </SelectItem>
                    <SelectItem value="Front End Development">
                      Front End Development
                    </SelectItem>
                    <SelectItem value="Back End Development">
                      Backend Development
                    </SelectItem>
                    <SelectItem value="Robotics/Embedded Systems">
                      Robotics/Embedded Systems
                    </SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                size="md"
                className="max-w-40 capitalize"
                onClick={sendMessage}
              >
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
