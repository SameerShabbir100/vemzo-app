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
    <div className="relative overflow-hidden rounded-3xl border border-[#2A0E61] bg-[#081121]/80 backdrop-blur-xl p-8 h-[350px] flex flex-col justify-between transition-all duration-500">

      {/* Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

      <FaQuoteLeft className="text-cyan-400 text-4xl z-10" />

      <p className="text-gray-300 leading-7 z-10">
        {review}
      </p>

      <div className="flex items-center gap-4 z-10">
        <Image
          src={image}
          alt={name}
          width={70}
          height={70}
          className="rounded-full border-2 border-cyan-500 object-cover"
        />

        <div>
          <h3 className="text-white text-xl font-semibold">
            {name}
          </h3>

          <p className="text-gray-400">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};