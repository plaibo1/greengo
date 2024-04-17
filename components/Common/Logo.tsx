"use client";

import Image from "next/image";
import logo from "@/public/logo.svg";

export const Logo = () => {
  return (
    <div className="flex items-center flex-col mb-4.5">
      <Image src={logo} width={65} height={65} alt="GreenGo logo" />

      <div className="text-2xl font-semibold text-slate-700 dark:text-slate-100 mt-1">
        GreenGo
      </div>
    </div>
  );
};
