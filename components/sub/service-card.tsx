"use client";

import { SvgIconComponent } from "@mui/icons-material";

type ServiceCardProps = {
  icon: SvgIconComponent;
  title: string;
  description: string;
};

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-[rgba(0,220,130,0.15)]
        bg-[#090d1f]/40
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[rgba(0,220,130,0.3)]
      "
    >
      {/* Icon */}
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-[rgba(0,220,130,0.2)]
          bg-[rgba(0,220,130,0.1)]
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        <Icon
          sx={{
            fontSize: 32,
            color: "#00dc82",
          }}
        />
      </div>

      {/* Title */}
      <h3
        className="
          mb-4
          text-2xl
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
      <p className="leading-7 text-gray-400">{description}</p>

      {/* Hover Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(0,220,130,0.08),transparent_70%)]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </div>
  );
};
