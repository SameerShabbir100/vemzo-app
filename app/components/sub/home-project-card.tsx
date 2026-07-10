import Image from "next/image";
import Link from "next/link";

interface HomeProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
}

export const HomeProjectCard = ({
  title,
  description,
  image,
  demoUrl,
}: HomeProjectCardProps) => {
  return (
    <Link
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        block
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
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="
            mb-3
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

        <p className="leading-7 text-gray-400">{description}</p>

        <div
          className="
            mt-5
            flex
            items-center
            font-medium
            text-[#00dc82]
            transition-transform
            duration-300
            group-hover:translate-x-2
          "
        >
          View Live Demo →
        </div>
      </div>

      {/* Hover Border */}
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

      {/* Hover Glow */}
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
    </Link>
  );
};
