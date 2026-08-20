"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

type ReviewCardProps = {
  image: string;
  name: string;
  position: string;
  review: string;
};

export const ReviewCard = ({
  image,
  name,
  position,
  review,
}: ReviewCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[rgba(0,220,130,0.15)] bg-[#000000] backdrop-blur-xl p-8 h-[350px] flex flex-col justify-between transition-all duration-500 group hover:border-[rgba(0,220,130,0.4)] hover:-translate-y-2">
      {/* Glow Effects */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[rgba(0,220,130,0.08)] rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[rgba(0,220,130,0.08)] rounded-full blur-3xl" />

      {/* Quote Icon */}
      <FaQuoteLeft className="text-[#00dc82] text-4xl z-10 opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Review Text */}
      <p className="text-gray-300 leading-7 z-10 flex-grow flex items-center">
        {review}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4 z-10 mt-4 pt-4 border-t border-[rgba(0,220,130,0.1)] group-hover:border-[rgba(0,220,130,0.2)] transition-colors">
        <Image
          src={image}
          alt={name}
          width={70}
          height={70}
          className="rounded-full border-2 border-[rgba(0,220,130,0.3)] object-cover group-hover:border-[#00dc82] transition-all group-hover:scale-105"
        />

        <div>
          <h3 className="text-white text-xl font-semibold group-hover:text-[#00dc82] transition-colors">
            {name}
          </h3>

          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};