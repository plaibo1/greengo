import React from "react";
import SectionHeader from "../Common/SectionHeader";

export const Product = () => {
  return (
    <section className="bg-white py-8 antialiased dark:bg-black md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            headerInfo={{
              title: "Продукт",
              subtitle: "Мы продаем не абы что!",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.`,
            }}
          />
          <div className="my-8 xl:mb-16 xl:mt-12">
            <img
              className="w-full dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-showcase.svg"
              alt=""
            />
            <img
              className="hidden w-full dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-showcase-dark.svg"
              alt=""
            />
          </div>
          <div className="mx-auto max-w-2xl space-y-6">
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium commodi vero ad? Dolor distinctio, saepe fugiat, cum
              officia consequuntur assumenda eos, id blanditiis ullam facilis?
              Consectetur aliquam dolorem tempora, nemo libero ea sit?
            </p>

            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              Фишкечки и хуишечки:
            </p>
            <ul className="list-outside list-disc space-y-4 pl-4 text-lg font-normal text-gray-500 dark:text-gray-400">
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {" "}
                  Brilliant 4.5K Retina display:{" "}
                </span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                quia, sequi expedita reprehenderit pariatur impedit beatae enim
                suscipit temporibus voluptate dolorem veritatis nobis? Nostrum
                doloremque accusamus magnam quam, dolorum quas? Placeat quis
                obcaecati aliquam non deserunt distinctio, fugiat,
                necessitatibus laboriosam, minus explicabo debitis! Corporis?
              </li>

              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {" "}
                  Studio-quality mics for high-quality conversations:{" "}
                </span>
                whether on a video call with a friend, cutting a track, or
                recording a podcast, the microphones on iMac make sure you come
                through loud, crisp, and clear. The studio-quality three-mic
                array is designed to reduce feedback, so conversations flow more
                naturally and you interrupt each other less. And beamforming
                technology helps the mics ignore background noise. Which means
                everyone hears you - not whs going on around you.
              </li>
            </ul>
          </div>
          <div className="my-6 md:my-12">
            <iframe
              className="h-[260px] md:h-[540px] w-[85%] mx-auto rounded-lg"
              src="https://www.youtube.com/embed/ksRP-WUiGdo?si=IncbrF3I6OI59OYH"
              title="FOOD DELIVERY POV (E-Bike Edition)"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen
            ></iframe>
          </div>
          <div className="mx-auto mb-6 max-w-3xl space-y-6 md:mb-12">
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Connectivity includes two Thunderbolt / USB 4 ports and two USB 3
              ports (all with a USB-C connector), a 3.5 mm headphone jack
              conveniently mounted on the left edge of the display, Wi-Fi 6
              (802.11ax), and Bluetooth 5.0.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
