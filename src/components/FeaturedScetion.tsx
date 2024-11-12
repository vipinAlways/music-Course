"use client"
import Image from "next/image"
import { BackgroundGradient } from "./ui/background-gradient"
import Link from "next/link"
import CourseData from "../data/Music_courses.json"

interface Course{
        id: number,
        title: string,
        slug: string,
        description:string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        image: string 
}

function FeaturedScetion() 
{
   const CoursesFeatured=  CourseData.courses.filter((course:Course)=> course.isFeatured)
  return (
    <div className="py-12 bg-gray-900">
        <div>
            <h2 className="text-center text-teal-500 font-semibold tracking-wide "> FEATURED COURSES</h2>
            <h1 className="text-center text-3xl leading-8 tracking-tighter sm:text-4xl mt-4 font-bold  text-gradient-to-b from-neutral-50 to-neutral-400 "> LREAN WITH THE BEST</h1>
        </div>
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
               {CoursesFeatured.map((course:Course,index)=>(
                <div key={index} className="flex justify-center">
                     <BackgroundGradient
                  className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                      <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                      <Link href={`/courses/${course.slug}`}>
                      Learn More
                      </Link>
                  </div>
               </BackgroundGradient>
                </div>
               ))}
            </div>
        </div>
        <div className="mt-20 text-center ">
            <Link href={"/courses"} className="p-3 bg-gradient-to-b from-neutral-50 to-neutral-400 rounded-full"> View All Courses</Link>
        </div>
    </div>
  )
}

export default FeaturedScetion

