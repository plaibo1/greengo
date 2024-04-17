"use client";

import React, { ReactNode, useRef } from "react";

import styles from "./hero.module.scss";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0  pt-[160px]">
      {children}
    </div>
  );
};

const Circle = ({
  children,
  secondary,
}: {
  children: ReactNode;
  secondary?: boolean;
}) => {
  return (
    <div className={`${styles.circle} ${secondary ? styles.secondary : ""}`}>
      <div className={styles["circle-bg"]}></div>
      {children}
    </div>
  );
};

export const Hero2 = () => {
  return (
    <Container>
      <div className="relative flex gap-4">
        <div className="min-w-20  flex flex-col items-center justify-center py-2">
          <div className="bg-transparent border-2 w-3 h-3 rounded-full mb-1"></div>
          <div
            style={{ height: 218 }}
            className={`${styles.line} ${styles.lineStart}`}
          ></div>
          <Circle>a{/* <BsTelephoneForward className="text-xl" /> */}</Circle>
          <div className={`${styles.line}`}></div>
          <Circle secondary>a{/* <Bag /> */}</Circle>
          <div className={`${styles.line} ${styles.lineEnd}`}></div>
        </div>

        <div className="w-full">
          <div className="">
            <h1 className="text-black text-[96px] font-bold leading-none mb-6">
              Электровелосипеды
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-green-300 via-green-400 to-primary ">
                из Китая
              </span>
            </h1>
            <h2 className="text-[24px] leading-none">
              The world’s leading AI-powered developer platform.
            </h2>
          </div>

          <div>
            <input />
            <button>go</button>
          </div>
        </div>
      </div>
    </Container>
  );
};
