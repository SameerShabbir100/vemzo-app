"use client";

import CountUp from "react-countup";

const STATS = [
  {
    number: 50,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    number: 20,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    number: 5,
    suffix: "+",
    label: "Countries Served",
  },
  {
    number: 99,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export const Statistics = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="
            rounded-3xl
            border
            border-[rgba(0,220,130,0.2)]
            bg-[#000003]
            backdrop-blur-xl
            p-12
          "
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#00dc82]">
                  <CountUp
                    end={stat.number}
                    duration={2}
                    enableScrollSpy
                  />
                  {stat.suffix}
                </div>

                <p className="text-gray-400 mt-4 text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};