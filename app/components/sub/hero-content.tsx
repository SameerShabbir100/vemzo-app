"use client";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Image from "next/image";

export const HeroContent = () => {
  return (
    <div
      className="
        z-[20]
        mx-auto
        flex
        w-full
        max-w-7xl
        flex-col
        items-center
        justify-between
        gap-12
        px-6
        pt-24
        sm:px-10
        lg:flex-row
        lg:px-20
        lg:pt-32
      "
    >
      {/* LEFT CONTENT */}
      <div
        className="
          flex
          w-full
          flex-col
          items-center
          justify-center
          text-center
          lg:w-1/2
          lg:items-start
          lg:text-left
        "
      >
        {/* Badge */}
        <div
          className="
            mb-5
            inline-flex
            items-center
            rounded-full
            border
            border-[rgba(0,220,130,0.2)]
            bg-[rgba(0,220,130,0.1)]
            px-4
            py-2
            text-sm
            font-medium
            text-[#00dc82]
          "
        >
          <AutoAwesomeIcon
            sx={{
              fontSize: 18,
              color: "#00dc82",
              mr: 1,
            }}
          />
          Custom Software Development Company
        </div>

        {/* Heading */}
        <div
          className="
            mt-6
            flex
            max-w-[750px]
            flex-col
            gap-6
            text-4xl
            font-bold
            leading-tight
            text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          <span>
            We design & build{" "}
            <span className="text-[#00dc82]">high-impact</span> digital
            experiences
          </span>
        </div>

        {/* Description */}
        <p
          className="
            mt-6
            max-w-[650px]
            text-base
            leading-8
            text-gray-400
            sm:text-lg
          "
        >
          We empower businesses with custom software, web applications, mobile
          apps, and cloud-based solutions. Our experienced team delivers
          scalable, reliable, and user-focused products that drive growth and
          success.
        </p>

        {/* Button */}
        <a
          href="/services"
          className="
            mt-8
            w-fit
            rounded-lg
            bg-[#00dc82]
            px-8
            py-3
            text-center
            font-medium
            text-black
            transition-colors
            duration-300
            hover:bg-[#00c474]
          "
        >
          Learn More
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="
          hidden
          w-full
          items-center
          justify-center
          md:flex
          lg:w-1/2
        "
      >
        <Image
          src="/hero-bg.svg"
          alt="Software Development Agency"
          width={650}
          height={650}
          priority
          draggable={false}
          className="
            h-auto
            w-[280px]
            select-none
            sm:w-[400px]
            md:w-[500px]
            lg:w-[650px]
          "
        />
      </div>
    </div>
  );
};
