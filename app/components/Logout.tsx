"use client";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import React, { useState } from "react";

export default function Logout() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleLogout = async () => {
    if (!isSubmitting) {
      setIsSubmitting(true);
      try {
        await signOut({ redirect: true, callbackUrl: "/login" });
      } catch (error) {
        console.error("Error signing out:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return (
    <button
      disabled={isSubmitting}
      onClick={handleLogout}
      className="w-full h-full focus:bg-[#00000010]"
    >
      <ArrowLeftStartOnRectangleIcon className="w-7 hidden lg:block" />
      <div className="block lg:hidden">Sign out</div>
    </button>
  );
}
