"use client";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export const SkillText = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center">
      {/* Badge */}
      <div
        className="
          Welcome-box
          border
          border-[rgba(0,220,130,0.2)]
          bg-[rgba(0,220,130,0.1)]
          px-[7px]
          py-[8px]
          opacity-90
        "
      >
        <AutoAwesomeIcon
          sx={{
            fontSize: 20,
            color: "#00dc82",
            mr: "10px",
          }}
        />

        <h1 className="Welcome-text text-[13px] text-[#00dc82]">
          Think better with Vemzo Technologies
        </h1>
      </div>

      {/* Heading */}
      <div className="mt-[10px] mb-[15px] text-center text-[30px] font-medium text-white">
        Making applications with modern technologies.
      </div>

      {/* Subtitle */}
      <div className="cursive mt-[10px] mb-10 text-center text-[20px] text-gray-400">
        Never miss a task, deadline or idea.
      </div>
    </div>
  );
};
