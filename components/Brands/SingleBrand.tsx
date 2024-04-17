import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, id } = brand;

  return (
    <div className="w-full flex justify-center">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        className="animate_top mx-w-full relative block h-10 w-[150px]"
      >
        <Image
          className="opacity-65 transition-all duration-300 hover:opacity-100 object-contain"
          src={image}
          alt={name}
          fill
        />
      </motion.div>
    </div>
  );
};

export default SingleBrand;
