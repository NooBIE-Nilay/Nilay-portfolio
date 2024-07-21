import { Socials } from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span>Software Developer</span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent"> Nilay Banerjee</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a software developer from India who enjoys transforming ideas
              into digital realities. Skilled in both frontend and backend
              development using MERN and Next.js, I also have a deep
              appreciation for the intricacies of C/C++ programming.
            </p>
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9   border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          photo
        </div>
      </div>
    </section>
  );
}
