import { education } from "../app/resume/data";
import { ScrollArea } from "./ui/scroll-area";

export function Education() {
  return (
    <div className="gap=[30px] flex flex-col text-center xl:text-left">
      <h3 className="text-4xl font-bold">{education.title}</h3>
      <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
        {education.description}
      </p>
      <ScrollArea className="h-[480px]">
        <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
          {education.items.map((education, index) => {
            return (
              <li
                key={index}
                className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
              >
                <span className="text-accent">{education.period}</span>
                <h3 className="min-h-[20px] max-w-[260px] text-center text-lg lg:text-left">
                  {education.degree}
                </h3>
                <div className="text-white/80">
                  {education.remarks}:{" "}
                  <span className="text-accent">{education.value}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{education.institution}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}
