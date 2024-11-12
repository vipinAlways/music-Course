"use client"
import React from "react";

import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
function About() {
    const content = [
        {
          title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
          description:
            "Embark on a musical journey that's uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Collaborative Editing
            </div>
          ),
        },
        {
            title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
            description:
              "Embark on a musical journey that's uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
             
            </div>
          ),
        },
        {
            title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
            description:
              "Embark on a musical journey that's uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
              Version control
            </div>
          ),
        },
        {
          title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
          description:
            "Embark on a musical journey that's uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Running out of content
            </div>
          ),
        },
      ];
    return (
        <div className="about">
        <StickyScroll content={content} />
      </div>
  )
}

export default About