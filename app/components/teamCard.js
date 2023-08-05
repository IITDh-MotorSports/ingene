"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function TeamCard(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  const name = props.name;
  const link = props.link;
  return (
    <div className="backdrop-brightness-50 rounded-lg" data-aos="fade-up">
      <div className="z-2 h-full w-full rounded-lg transition ease-in-out duration-600 delay-100 hover:shadow-lg hover:scale-105 hover:backdrop-brightness-0">
        <div className="z-2 grid grid-cols-2">
          <div className="flex flex-row-3">
            <div className="p-5 h-52  grayscale transition ease-in-out duration-500 delay-100 hover:scale-105 hover:grayscale-0">
              <img
                alt="member card"
                src={props.link}
                className="max-h-full max-w-full aspect-auto"
              />
            </div>
            <div></div>
          </div>
          <div>
            <div className="p-5">
              <p className="font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-base text-white">
                {props.name}
              </p>
              <p className="xl:text-base xl:block lg:text-xs lg:block md:block md:text-sm sm:hidden text-white">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
