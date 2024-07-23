import { about } from "@/app/resume/data";

export function About() {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="mx-auto max-w-[700px] text-white/60 xl:mx-0">
        {about.description}
      </p>
      <ul className="mx-auto grid max-w-[700px] grid-cols-1 gap-y-6 xl:grid-cols-2">
        {about.info.map((details, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center gap-4 xl:justify-start"
            >
              <span className="text-white/60">{details.fieldName}</span>
              <span className="text-lg">{details.fieldValue}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
