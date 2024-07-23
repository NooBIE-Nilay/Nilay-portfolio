"use client";
import CountUp from "react-countup";
const stats = [
  { end: 100, text: "Code Commits" },
  { end: 4, text: "Projects Completed" },
  { end: 8, text: "Technologies Mastered" },
  { end: 5000, text: "Hours Of Coding" },
];

export function Stats() {
  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 items-center justify-center gap-4 hover:text-accent xl:justify-start"
              >
                <CountUp
                  end={stat.end}
                  duration={4}
                  delay={1.5}
                  className="text-4xl font-extrabold xl:text-6xl"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
