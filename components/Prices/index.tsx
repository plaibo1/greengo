"use client";

import Image from "next/image";
import { Button } from "../Common/Button";
import { BaseFormDialog } from "../BaseFormDialog/BaseFormDialog";

const Prices = () => {
  return (
    <section className="bg-white dark:bg-black">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Тут что-то про компанию
          </h2>

          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            eligendi dolore, molestias omnis sint quas laudantium optio ad iure
            cum, iusto earum error maxime facilis. Optio qui quae provident.
            Necessitatibus minima voluptates accusamus!
          </p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            possimus? Ab, molestiae perferendis! Quos, ullam.
          </p>

          <BaseFormDialog>
            <button className="border-b font-semibold">Оставьте заявку</button>
          </BaseFormDialog>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src="/images/bikes/bike1.png"
            alt="office content 1"
            width={285}
            height={435}
          />

          <Image
            className="mt-4 w-full h-full object-cover lg:mt-10 rounded-lg"
            src="/images/bikes/bike2.png"
            alt="office content 2"
            width={285}
            height={435}
          />
        </div>
      </div>
    </section>
  );
};

export default Prices;
