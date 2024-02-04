import { poorStory } from "@/app/components/fonts";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="max-w-screen h-[200px] bg-[#222] flex text-white justify-center">
      <div className="w-1/6 flex flex-col justify-center items-center">
        <div className={`${poorStory.className} text-4xl`}>YerbaVibes</div>
        <div className="text-xs">
          COPYRIGHT &copy; FS Innovations {new Date().getFullYear()}
        </div>
      </div>
      <div className="w-1/6 flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <Link href={""} className="text-xl">
            CONTACT
          </Link>
          <Link href={""} className="text-xl">
            PRIVACY
          </Link>
          <Link href={""} className="text-xl">
            TERMS
          </Link>
        </div>
      </div>
      <div className="w-1/4 flex flex-col justify-center items-center ml-10">
        <div className={`${poorStory.className} text-4xl mb-3`}>
          Sign up to newsletter
        </div>
        <div className="w-full">
          <form>
            <div className="flex">
              <div className="relative w-full">
                <input
                  type="search"
                  id="location-search"
                  className="block p-2.5 w-full rounded-xl z-20 text-white border-2 border-gray-300 bg-[#222] focus:outline-none  focus:ring-pageTheme focus:border-pageTheme focus:shadow-lg"
                  placeholder="Email"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 h-full text-sm p-2.5 font-medium text-white bg-pageTheme rounded-e-lg border border-pageTheme hover:brightness-[90%] focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  <span>Sign Up</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}