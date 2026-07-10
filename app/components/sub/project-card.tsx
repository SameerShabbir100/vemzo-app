"use client";

import Image from "next/image";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  category: string;
  onClick?: () => void;
};

export const ProjectCard = ({
  src,
  title,
  description,
  category,
  onClick,
}: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className="
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-2xl
        border
        border-[rgba(0,220,130,0.15)]
        bg-[#090d1f]/20
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[rgba(0,220,130,0.3)]
      "
    >
      {/* Image */}
      <div className="relative h-[250px] overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#030014]
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div
          className="
            mb-4
            inline-flex
            rounded-full
            border
            border-[rgba(0,220,130,0.2)]
            bg-[rgba(0,220,130,0.1)]
            px-3
            py-1
            text-xs
            font-medium
            text-[#00dc82]
          "
        >
          {category}
        </div>

        {/* Title */}
        <h3
          className="
            text-xl
            font-semibold
            text-white
            transition-colors
            duration-300
            group-hover:text-[#00dc82]
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-gray-400">{description}</p>

        {/* CTA */}
        <div
          className="
            mt-6
            font-medium
            text-[#00dc82]
            transition-transform
            duration-300
            group-hover:translate-x-2
          "
        >
          View Case Study →
        </div>
      </div>

      {/* Glow Border */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          border
          border-[rgba(0,220,130,0.2)]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Glow Effect */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(0,220,130,0.08),transparent_60%)]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </div>
  );
};
