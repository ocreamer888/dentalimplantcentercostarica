"use client";
import Image from "next/image";

const Trusted = () => {
  return (
    <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div className="grid grid-cols-12 justify-center items-center">
          <div className="col-span-5 justify-center items-center">
            <div className="py-2 text-balance bg-primary/15 rounded-full w-fit">
              <p className=" text-8xl text-balance font-bold">Trusted by <span className="text-purple-600">+2000</span> USA customers</p>
            </div>
            <h1 className="text-80 font-bold">
              Dedicated to bring happines to your life.
            </h1>
            <button className="bg-primary text-xl font-semibold py-6 px-20 mt-4 rounded-full hover:bg-darkmode">
            Get My FREE Estimate
            </button>
          </div>
          <div className="col-span-7">
            <Image
              src="/images/hero/banner-image.png"
              alt="banner image"
              width={600}
              height={600}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
