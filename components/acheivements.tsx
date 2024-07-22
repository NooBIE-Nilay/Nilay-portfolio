import { achievements } from "../app/resume/data";
import { ScrollArea } from "./ui/scroll-area";

export function Achievements() {
  return (
    <div className="flex flex-col gap=[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{achievements.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {achievements.description}
      </p>
      <ScrollArea className="h-[480px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {achievements.items.map((achievement, index) => {
            return (
              <li
                key={index}
                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <span className="text-accent">{achievement.period}</span>
                <h3 className="text-cl max-w-[260px] min-h-[60px] text-center lg:text-left">
                  {achievement.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{achievement.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}
