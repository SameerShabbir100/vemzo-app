import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import type { ElementType } from "react";
import Image, { StaticImageData } from "next/image";

import warehouseIcon from "@/public/warehouse.svg";
import CountUp from "react-countup";

interface CardData {
  icon: StaticImageData | ElementType;
  number: number;
  suffix: string;
  label: string;
}

interface CardProps {
  sx?: SxProps<Theme>;
  data?: CardData;
}

const isStaticImage = (
  icon: StaticImageData | ElementType,
): icon is StaticImageData => {
  return typeof icon === "object" && "src" in icon;
};

export default function CounterCard({
  sx,
  data = {
    icon: warehouseIcon,
    number: 5,
    suffix: "+",
    label: "Title",
  },
}: CardProps) {
  const Icon = !isStaticImage(data.icon) ? data.icon : null;

  return (
    <Box
      sx={{
        ...sx,
        position: "relative",
        height: { xs: 194, sm: 232, lg: 292, xl: 320 },

        "&::before": {
          content: '""',
          position: "absolute",
          inset: "-1px",
          background: "transparent",
          border: "2px dashed #00DC82",
          clipPath: {
            xs: "polygon(0px 0px, 100% 0px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0px 100%)",
            sm: "polygon(0px 0px, 100% 0px, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0px 100%)",
          },
          zIndex: 0,
        },
        // "&::before": {
        //   content: '""',
        //   position: "absolute",
        //   inset: 0,
        //   outline: "2px dashed #00dc824d",
        //   outlineOffset: "-2px",
        //   clipPath: {
        //     xs: "polygon(0px 0px, 100% 0px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0px 100%)",
        //     sm: "polygon(0px 0px, 100% 0px, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0px 100%)",
        //   },
        // },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          p: { xs: 1.25, sm: 3 },
          pb: { xs: 4, sm: 3 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          clipPath: {
            xs: "polygon(0px 0px, 100% 0px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0px 100%)",
            sm: "polygon(0px 0px, 100% 0px, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0px 100%)",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: 40, sm: 60 },
            height: { xs: 40, sm: 60 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isStaticImage(data.icon) ? (
            <Image
              src={data.icon}
              alt={data.suffix}
              width={60}
              height={60}
              style={{ objectFit: "contain" }}
            />
          ) : (
            Icon && (
              <Icon
                sx={{
                  fontSize: { xs: 40, sm: 60 },
                  color: "#00DC82",
                }}
              />
            )
          )}
        </Box>

        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: 36, sm: 48, md: 60, xl: 88 },
              color: "#ffffff",
              mb: 2,
            }}
          >
            <div>
              <div className="text-5xl md:text-6xl text-[#00dc82] font-bold">
                <CountUp end={data.number} duration={2} enableScrollSpy />
                {data.suffix}
              </div>
            </div>
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: 14, md: 20 },
              color: "#ffffff",
            }}
          >
            {data.label}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
