import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import type { ElementType } from "react";
import Image, { StaticImageData } from "next/image";

import warehouseIcon from "@/public/warehouse.svg";

interface CardData {
  icon: StaticImageData | ElementType;
  title: string;
  subtitle: string;
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

export default function Card({
  sx,
  data = {
    icon: warehouseIcon,
    title: "Title",
    subtitle: "Subtitle Title",
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
          border: "2px dashed #00dc824d",
          clipPath: {
            xs: "polygon(0px 0px, 100% 0px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0px 100%)",
            sm: "polygon(0px 0px, 100% 0px, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0px 100%)",
          },
          zIndex: 0,
        },
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
              alt={data.title}
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
            {data.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: 14, md: 20 },
              color: "#ffffff",
            }}
          >
            {data.subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
