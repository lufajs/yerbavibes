import RatingStars from "@/app/components/RatingStars";
import { poorStory } from "@/app/components/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Popular() {
  async function fetchData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/get-top-list?size=3`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error("Response Error");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return null;
    }
  }
  const data = await fetchData();
  return (
    <div className="w-screen min-h-screen bg-gradient-to-l from-[#ebe7d2] flex flex-col justify-evenly items-center">
      <h2
        className={`text-3xl mb-5 mt-10 lg:mb-0 lg:mt-0 ${poorStory.className}`}
      >
        TOP RATED YERBAS
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full">
        {data &&
          data.map((e: any) => (
            <Link
              key={e._id}
              href={`/yerba/details?id=${e._id}`}
              className="w-[250px] lg:w-[350px] h-[420px] lg:h-[500px] shadow-md flex flex-col items-center justify-evenly my-5 lg:my-0"
            >
              <div className="w-[100%] h-[250px] lg:h-[350px] flex justify-center items-center">
                <Image
                  src={e.image}
                  alt="yerba"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  className="object-cover w-[100%] h-[auto]"
                />
              </div>
              <div className="flex flex-col items-center mb-5">
                <h1 className="text-2xl h-[64px] text-center flex items-center mb-2">
                  {e.title}
                </h1>
                <div className="flex items-center text-[#888] text-[17px] gap-1.5">
                  <RatingStars rating={e.ratingValue} w={7} />({e.ratingCount})
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
