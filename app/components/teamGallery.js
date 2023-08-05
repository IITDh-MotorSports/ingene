"use client";
const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "500+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];
import Image from "next/image";
import Navbar from "../components/navbar";
export default function TeamGallery() {
  return (
    <div className="max-w-screen h-screen overflow-hidden py-10 ">
      <Navbar />
      <div className="w-screen max-h-screen overflow-hidden fixed -z-10 top-0">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 w-screen h-screen">
          <div className="grid grid-rows-3 h-screen">
            <div className="h-1/3">
              <Image
                src="/TeamImages/IMG_20230321_192316 - Arindam Thander.jpg"
                height={1000}
                width={500}
                className="w-full grayscale"
              />
            </div>
            <div className="h-1/3">
              <Image
                src="/TeamImages/IMG_20220307_183329__01__01 - Yadav Vansh Suresh.jpg"
                height={1000}
                width={500}
                className="w-full grayscale"
              />
            </div>
            <div className="h-1/3 ">
              <Image
                src="/TeamImages/IMG_20230520_124748 - Harsh Vardhan Chowdhary.jpg"
                height={1000}
                width={500}
                className="w-full grayscale "
              />
            </div>
          </div>
          <div className="grid grid-rows-2 h-screen">
            <div className="h-1/2 ">
              <Image
                src="/TeamImages/IMG_20221126_220957~2 - Varun Shantanu Limaye.jpg"
                height={1000}
                width={500}
                className="w-full grayscale "
              />
            </div>
            <div className="h-1/2 ">
              <Image
                src="/TeamImages/_MG_0431-min - Hari Prasad P.jpg"
                height={1000}
                width={500}
                className="w-full grayscale "
              />
            </div>
          </div>
          <div className="grid grid-rows-2 h-screen">
            <div className="h-3/5 ">
              <Image
                src="/TeamImages/02584B0C-C50E-4205-A4FD-F6D13D5D1215 - Gudapareddy Naganandini.jpeg"
                height={1000}
                width={500}
                className="w-full grayscale "
              />
            </div>
            <div className="h-2/5 ">
              <Image
                src="/TeamImages/20230514_120609 - Soham Khapre.jpg"
                height={1000}
                width={500}
                className="w-full grayscale "
              />
            </div>
          </div>
        </div>
        <div className="absolute h-screen w-screen backdrop-blur-sm backdrop-brightness-50 -z-9 top-0"></div>
      </div>
      {/* <div className="max-w-screen overflow-hidden"> */}
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="-z-8 aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="-z-8 absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="-z-8 aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
        {/* </div> */}
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 z-9">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl z-10">
            Meet The Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Our club brings together a diverse range of students from various
            disciplines, including engineering, computer science, business, and
            design, who share a common enthusiasm for motorsports. We believe in
            fostering teamwork, innovation, and excellence, both on and off the
            track.
          </p>
        </div>
        {/* <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-500">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div> */}
      </div>
    </div>
  );
}
