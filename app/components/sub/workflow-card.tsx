"use client";

type WorkflowCardProps = {
  step: string;
  title: string;
  description: string;
  index: number;
};

export const WorkflowCard = ({
  step,
  title,
  description,
}: WorkflowCardProps) => {
  return (
    <div className="relative rounded-2xl border border-[#2A0E61] bg-transparent hover:bg-[#090d1f]/20 transition-all duration-300 p-6 group backdrop-blur-sm">

      <div className="text-cyan-400 text-sm font-medium mb-3">
        STEP {step}
      </div>

      <h2 className="text-white text-xl font-semibold group-hover:text-cyan-400 transition">
        {title}
      </h2>

      <p className="text-gray-400 mt-3 leading-7">
        {description}
      </p>

      {/* subtle glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition border border-cyan-500/20 pointer-events-none" />
    </div>
  );
};