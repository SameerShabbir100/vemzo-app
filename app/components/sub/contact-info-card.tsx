type Props = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

export const ContactInfoCard = ({
  icon,
  title,
  value,
}: Props) => {
  return (
    <div className="relative rounded-2xl border border-[#2A0E61] bg-transparent p-6 backdrop-blur-sm hover:bg-[#090d1f]/20 transition-all duration-300 group">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
          {icon}
        </div>

        <div>
          <h3 className="text-white font-semibold">
            {title}
          </h3>

          <p className="text-gray-400 mt-2">
            {value}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl border border-cyan-500/20 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
    </div>
  );
};