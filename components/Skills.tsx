import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiC,
  SiCplusplus,
  SiArduino,
  SiStmicroelectronics,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const skills = {
  title: "My Skills",
  description:
    "Proficient Full Stack developer with expertise in MERN stack and Next.js. Passionate about crafting robust and scalable web applications. Additionally, skilled in robotics with a focus on Embedded Systems",
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
    {
      icons: <SiC />,
      name: "C",
    },
    {
      icons: <SiCplusplus />,
      name: "C++",
    },
    {
      icons: <SiArduino />,
      name: "Arduino",
    },
    {
      icons: <SiStmicroelectronics />,
      name: "STM",
    },
  ],
};
export function Skills() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">
          {skills.description}
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 xl:gap-[30px]">
        {skills.skillsList.map((skill, index) => {
          return (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      {skill.icons}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className=" capitalize">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
