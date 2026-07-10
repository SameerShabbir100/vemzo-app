"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

type FAQCardProps = {
  question: string;
  answer: string;
};

export const FAQCard = ({
  question,
  answer,
}: FAQCardProps) => {
  const [open, setOpen] = useState(false);

  return (
<div className="rounded-2xl border border-[#2A0E61] bg-transparent hover:bg-[#090d1f]/20 transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-6 flex justify-between items-center text-left rounded-2xl border border-[#2A0E61] bg-[#090d1f]/80 backdrop-blur-xl overflow-hidden transition-all duration-300"
      >
        <h2 className="text-white text-lg font-semibold">
          {question}
        </h2>

        {open ? (
          <FiMinus className="text-cyan-400 text-2xl" />
        ) : (
          <FiPlus className="text-cyan-400 text-2xl" />
        )}
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-40 pb-6 px-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-400 leading-7">
          {answer}
        </p>
      </div>
    </div>
  );
};