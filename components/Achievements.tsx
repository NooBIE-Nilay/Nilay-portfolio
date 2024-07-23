import { achievements } from "../app/resume/data";
import { ScrollArea } from "./ui/scroll-area";

export function Achievements() {
  return (
    <div className="gap=[30px] flex flex-col text-center xl:text-left">
      <h3 className="text-4xl font-bold">{achievements.title}</h3>
      <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
        {achievements.description}
      </p>
      <ScrollArea className="h-[480px]">
        <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
          {achievements.items.map((achievement, index) => {
            return (
              <li
                key={index}
                className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
              >
                <span className="text-accent">{achievement.period}</span>
                <h3 className="max-w-[260px] text-xl lg:text-left">
                  {achievement.title}
                </h3>
                <div className="mt-3 flex items-center gap-3">
                  <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
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
