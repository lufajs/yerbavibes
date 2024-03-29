"use client";
import { poorStory } from "@/app/components/fonts";
import Link from "next/link";
import React, { useState } from "react";
import Popup from "../Popup";

export default function Footer() {
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }
    setError("");
    setPopup(true);
  };
  return (
    <>
      {popup && (
        <Popup
          message={"Signed up for newsletter!"}
          onClose={() => setPopup(false)}
        />
      )}
      <div className="max-w-screen h-[400px] lg:h-[200px] bg-[#222] flex flex-col lg:flex-row text-white justify-evenly lg:justify-center">
        <div className="min-w-[187px] lg:w-1/6 flex flex-col justify-center items-center">
          <div className={`${poorStory.className} text-4xl`}>YerbaVibes</div>
          <div className="text-xs">
            COPYRIGHT &copy; FSInnovations {new Date().getFullYear()}
          </div>
        </div>
        <div className="lg:w-1/6 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-3 lg:gap-0">
            <Link href={"/contact"} className="text-xl">
              CONTACT
            </Link>
            <Link href={"/privacy"} className="text-xl">
              PRIVACY
            </Link>
            <Link href={"/terms"} className="text-xl">
              TERMS
            </Link>
          </div>
        </div>
        <div className="lg:w-[29%] flex flex-col justify-center items-center lg:items-start lg:ml-10">
          <div className={`${poorStory.className} text-2xl xs:text-4xl mb-3`}>
            Sign up to newsletter
          </div>
          <div className="max-w-[400px] w-[90%] lg:w-full">
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    type="search"
                    id="location-search"
                    className={`block ${
                      !error ? `border-bodyTheme` : `border-red-500`
                    } p-2.5 w-full rounded-xl z-20 text-white border-2 bg-[#222] focus:outline-none  focus:ring-pageTheme focus:border-pageTheme focus:shadow-lg`}
                    placeholder="Email"
                    required
                  />
                  <button
                    type="submit"
                    className={`absolute top-0 end-0 h-full text-sm p-2.5 font-medium text-white bg-pageTheme rounded-e-lg border border-pageTheme hover:brightness-[90%]`}
                  >
                    <span>Sign Up</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
