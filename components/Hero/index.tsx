"use client";

import React from "react";
import { Logo } from "../Common/Logo";
import { BaseFormDialog } from "../BaseFormDialog/BaseFormDialog";

const Hero = () => {
  return (
    <section className="relative">
      <div className="px-4 py-10 mx-auto max-w-7xl md:py-16">
        <div className="w-full pb-5 mx-auto text-center md:w-11/12">
          <Logo />

          <div className="mt-8 mb-14">
            <h1 className="mb-4 text-xl xs:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl">
              Электровелосипеды
              <br />
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
                из Китая
              </span> */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-green-300 via-green-400 to-primary ">
                из Китая
              </span>
            </h1>

            <h4 className="mb-8 text-lg font-medium text-black dark:text-white">
              🔥 Аккумуляторы и запчасти - напрямую от производителя
            </h4>
          </div>

          <div className="flex justify-center gap-4">
            <BaseFormDialog />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
