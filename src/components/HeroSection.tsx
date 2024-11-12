import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";


function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full flex flex-col justify-center items-center overflow-hidden mx-auto  my-auto md:py-0 py-10 rounded-md  bg-grid-white/[0.02]">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <h1 className="mt-10 max-md:mt-56 text-4xl md:text-7xl  max-md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          MARTER THE ART OF MUSIC{" "}
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Drive into our comprehensive music courses and tranform your musical
          journey today. Whether you&#39re a beginner or looking to refine your
          skills ,join us to unlock your true potential.{" "}
        </p>
        <div className="mt-10">
          <Link href={"/courses"}>
            <Button borderRadius="1.75rem" className="bg-white dark:bg-transparent text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
