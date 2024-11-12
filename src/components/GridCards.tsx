import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { title } from "process";
import { link } from "fs";

function GridCards() {
    const projects =[
      
            {
              title: 'Understanding Music Theory',
              description:
                'Dive deep into the fundamentals of music theory and enhance your musical skills.',
              slug: 'understanding-music-theory',
              isFeatured: true,
            },
            {
              title: 'The Art of Songwriting',
              description:
                'Learn the craft of songwriting from experienced musicians and songwriters.',
              slug: 'the-art-of-songwriting',
              isFeatured: true,
            },
            {
              title: 'Mastering Your Instrument',
              description:
                'Advanced techniques to master your musical instrument of choice.',
              slug: 'mastering-your-instrument',
              isFeatured: true,
            },
            {
              title: 'Music Production Essentials',
              description:
                'Get started with music production with this comprehensive overview.',
              slug: 'music-production-essentials',
              isFeatured: true,
            },
            // Added two more webinars
            {
              title: 'Live Performance Techniques',
              description:
                'Enhance your live performance skills with expert tips and strategies.',
              slug: 'live-performance-techniques',
              isFeatured: true,
            },
            {
              title: 'Digital Music Marketing',
              description:
                'Learn how to promote your music effectively in the digital age.',
              slug: 'digital-music-marketing',
              isFeatured: true,
            },

    ]
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-[#0D9488]">
          FEATURED WEBINARS
        </h1>
        <h1 className="text-4xl font-bold mt-5">
          Enhance Your Musical Journey
        </h1>
      </div>
      <div className="w-full">
      <div className="max-w-full mx-auto px-8">
        <HoverEffect items={projects.map((project)=>(
                  {title: project.title,
                    description:project.description,
                    link:"/"
                  }
        ))} />
      </div>
      </div>
      <div className="mt-20 text-center ">
        <Link
          href={"/courses"}
          className="p-3 bg-gradient-to-b from-neutral-50 to-neutral-400 rounded-full"
        >
          {" "}
          View All Webinars
        </Link>
      </div>
    </div>
  );
}

export default GridCards;
