"use client";

import Image from "next/image";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
}: SkillDataProviderProps) => {
  return (
    <div>
      <Image src={`/skills/${src}`} alt={name} width={width} height={height} />
    </div>
  );
};
