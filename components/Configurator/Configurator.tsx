/* eslint-disable @next/next/no-img-element */
"use client";

import React, { ReactNode, useState } from "react";
import { Button } from "../Common/Button";

const options: Record<string, { title: string; img: string }> = {
  "1-1": { title: "1", img: "" },
  "1-2": { title: "2", img: "" },
  "1-3": { title: "3", img: "" },

  "2-1": { title: "4", img: "" },
  "2-2": { title: "5", img: "" },
  "2-3": { title: "6", img: "" },

  "3-1": { title: "7", img: "" },
  "3-2": { title: "8", img: "" },
  "3-3": { title: "9", img: "" },
};

const ACC_VAT_OPTIONS_TITLES = ["300vt", "400vt", "500vt"];
const CIRCLE_TYPE_OPTIONS_TITLES = ["Лето", "Межсезон", "Зима"];

const ImageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-full w-[850px] h-[550px] relative shadow-solid-3">
      <img
        src="https://images.squarespace-cdn.com/content/v1/52712b93e4b0aa61f185f485/1665516105137-Z9FGMWZA9X4UTKG45WPP/MOTO+EBIKE-2.jpg"
        alt="e-bike"
        className="w-full h-full object-cover rounded-3xl"
      />
      <span className="text-white text-2xl absolute left-4 top-4">
        {children}
      </span>
    </div>
  );
};

type Option = {
  accVat: number;
  circleType: number;
};

type ConfigOptionButtons = {
  optionsArr: string[];
  option: Option;
  setOption: React.Dispatch<React.SetStateAction<Option>>;
  keyName: keyof Option;
};

const ConfigOptionButtons = ({
  optionsArr,
  option,
  setOption,
  keyName,
}: ConfigOptionButtons) => {
  return (
    <div className="flex gap-4 md:flex-col">
      {optionsArr.map((optionName, index) => {
        return (
          <Button
            key={optionName}
            onClick={() => setOption((p) => ({ ...p, [keyName]: index + 1 }))}
            variant={option[keyName] === index + 1 ? "default" : "secondary"}
            className="w-[100px]"
          >
            {optionName}
          </Button>
        );
      })}
    </div>
  );
};

export const Configurator = () => {
  const [option, setOption] = useState<Option>({ accVat: 1, circleType: 1 }); // max 9 variants
  const selectedOption = `${option.accVat}-${option.circleType}`;

  return (
    <div className="my-8.5 gap-4 flex-col flex items-center justify-center md:flex-row">
      <ConfigOptionButtons
        keyName="accVat"
        option={option}
        setOption={setOption}
        optionsArr={ACC_VAT_OPTIONS_TITLES}
      />

      <ImageWrapper>{options[selectedOption].title} </ImageWrapper>

      <ConfigOptionButtons
        keyName="circleType"
        option={option}
        setOption={setOption}
        optionsArr={CIRCLE_TYPE_OPTIONS_TITLES}
      />
    </div>
  );
};
