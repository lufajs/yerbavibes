import PostImage from "@/app/components/PostImage";
import Ratings from "@/app/components/Ratings";
import DropSelect from "@/app/components/main/DropSelect";
import FavoriteButton from "@/app/components/main/FavoriteButton";
import PaginationControls from "@/app/components/main/PaginationControls";
import { HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Filter from "./Filter";
import YerbaListRating from "./YerbaListRating";
import { StarSkeleton } from "@/app/components/Skeletons";
import FilterMobile from "./FilterMobile";

export default async function Yerba({
  page,
  per_page,
  producer,
  flavor,
  strength,
  category,
  origin,
  tags,
  title,
  sort,
}: any) {
  async function fetchData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/get-products`,
        { cache: "no-store" }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      return Promise.resolve(data);
    } catch (error) {
      return null;
    }
  }

  const data = await fetchData();
  let filteredData: any = [...data];
  if (producer !== "") {
    filteredData = filteredData.filter((e: any) => e.producer === producer);
  }

  if (flavor !== "") {
    filteredData = filteredData.filter((e: any) => e.flavor === flavor);
  }

  if (strength !== "") {
    filteredData = filteredData.filter((e: any) => e.strength === strength);
  }

  if (category !== "") {
    filteredData = filteredData.filter((e: any) => e.category === category);
  }

  if (origin !== "") {
    filteredData = filteredData.filter((e: any) => e.origin === origin);
  }

  if (tags !== "") {
    filteredData = filteredData.filter((e: any) => e.tags.includes(tags));
  }

  if (title !== "") {
    filteredData = filteredData.filter((e: any) =>
      e.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (sort !== "") {
    if (sort === "popular") {
      filteredData.sort((a: any, b: any) => b.ratingCount - a.ratingCount);
    }
    if (sort === "top") {
      filteredData.sort((a: any, b: any) => b.ratingValue - a.ratingValue);
    }
    if (sort === "low") {
      filteredData.sort((a: any, b: any) => a.ratingValue - b.ratingValue);
    }
  }

  let dataCount = filteredData.length;

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  let entries = filteredData.slice(start, end);
  let totalPages = Math.ceil(filteredData / per_page);

  return (
    <>
      <div className="hidden lg:flex select-none flex-col mx-7 justify-center items-center w-[400px] h-[70%] border-[1px] rounded-xl border-[#ccc]">
        <Filter data={data} filteredData={filteredData} />
      </div>
      <div className="w-[100%] lg:mr-20 mb-10 flex flex-col items-center">
        <div className="hidden lg:flex w-[98%] px-2 py-4 border-y-[1px] border-[#ccc] mb-5 justify-between items-center">
          <div className="text-[#888] text-sm">{dataCount} results</div>
          <div className="flex gap-5">
            <DropSelect
              filters={{
                producer,
                flavor,
                strength,
                category,
                origin,
                tags,
                title,
                sort,
              }}
            />
            <PaginationControls
              hasNextPage={end < dataCount}
              hasPrevPage={start > 0}
              totalPages={totalPages}
              filters={{
                producer,
                flavor,
                strength,
                category,
                origin,
                tags,
                title,
                sort,
              }}
            />
          </div>
        </div>
        <div className="lg:hidden flex justify-evenly items-center w-[100%] py-3 border-b-[1px] border-[#00000020]">
          <div className="text-[#888] text-sm">{dataCount} results</div>
          <PaginationControls
            hasNextPage={end < dataCount}
            hasPrevPage={start > 0}
            totalPages={totalPages}
            filters={{
              producer,
              flavor,
              strength,
              category,
              origin,
              tags,
              title,
              sort,
            }}
          />
        </div>
        <div className="lg:hidden flex justify-evenly items-center w-[100%] py-3 mb-3 border-b-[1px] border-[#00000020]">
          <FilterMobile data={data} filteredData={filteredData} />
          <DropSelect
            filters={{
              producer,
              flavor,
              strength,
              category,
              origin,
              tags,
              title,
              sort,
            }}
          />
        </div>
        <div className="w-[100%] flex flex-col lg:flex-row lg:flex-wrap gap-x-[20px] gap-y-[40px] justify-start pt-[30px] lg:pt-0">
          {entries.map((e: any) => (
            <div
              key={e._id}
              className="w-[100%] lg:w-[30%] group hover:shadow-xl rounded-xl pb-5 px-2 border-b-[1px] border-[#ccc] transition"
            >
              <div className="min-w-[100%] h-[200px] sm:h-[350px] lg:h-[0] relative lg:pt-[100%] flex justify-center">
                <Link
                  href={`/yerba/details?id=${e._id}`}
                  className="absolute top-[50%] translate-y-[-50%]"
                >
                  <Image
                    rel="stylesheet preload prefetch"
                    src={e.image}
                    alt="img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={`rounded-xl object-cover object-left select-none w-[100%] h-[200px] sm:h-[350px] lg:h-auto`}
                  />
                </Link>
              </div>

              <div className="w-[100%] min-h-[216px] flex flex-col justify-between">
                <div className="p-5 flex flex-col items-center lg:items-start">
                  <div>
                    <Link href={`/yerba/details?id=${e._id}`}>{e.title}</Link>
                    <div>
                      <div className="my-1">
                        <Suspense fallback={<StarSkeleton w={5} />}>
                          <YerbaListRating data={e} />
                        </Suspense>
                      </div>
                    </div>
                    <div className="text-sm">
                      Producer <span className="text-[#777]">{e.producer}</span>
                    </div>
                    <div className="text-sm">
                      Flavor <span className="text-[#777]">{e.flavor}</span>
                    </div>
                    <div className="text-sm">
                      Origin <span className="text-[#777]">{e.origin}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2 relative">
                  <Link
                    href={`/yerba/details?id=${e._id}`}
                    className="px-5 py-2 bg-pageTheme rounded-lg hover:brightness-[90%] transition"
                  >
                    Explore
                  </Link>
                  <button className="text-[#888]">
                    <FavoriteButton id={e._id} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {dataCount ? (
          <div className="w-[90%] py-4 border-t-[1px] border-[#ccc] flex justify-center lg:justify-end items-center">
            <div className="flex gap-5">
              <PaginationControls
                hasNextPage={end < dataCount}
                hasPrevPage={start > 0}
                totalPages={totalPages}
                filters={{
                  producer,
                  flavor,
                  strength,
                  category,
                  origin,
                  tags,
                }}
              />
            </div>
          </div>
        ) : (
          <div className="w-[90%] py-4 border-t-[1px] border-[#ccc] flex justify-center items-center">
            <div className="flex text-lg text-[#888]">
              No yerba mate to display
            </div>
          </div>
        )}
      </div>
    </>
  );
}
