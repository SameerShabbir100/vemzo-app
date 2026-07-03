"use client";

import { Card, CardContent, Box, Typography } from "@mui/material";

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export const ContactInfoCard = ({
  icon,
  title,
  value,
}: ContactInfoCardProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "24px",

        background: "rgba(0, 0, 0, 0.35)",

        backdropFilter: "blur(14px)",

        border: "1px solid rgba(0,220,130,0.15)",

        transition: "all .35s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "#00dc82",
          boxShadow: "0 20px 45px rgba(0,220,130,.12)",
        },
      }}
    >
      {/* Hover Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(0,220,130,.10), transparent 65%)",
          opacity: 0,
          transition: ".35s",
          pointerEvents: "none",

          ".MuiCard-root:hover &": {
            opacity: 1,
          },
        }}
      />

      <CardContent sx={{ p: 3.5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "18px",

              bgcolor: "rgba(0,220,130,.10)",

              border: "1px solid rgba(0,220,130,.20)",

              color: "#00dc82",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              transition: ".3s",

              ".MuiCard-root:hover &": {
                bgcolor: "#00dc82",
                color: "#000",
                transform: "scale(1.08)",
              },

              "& svg": {
                fontSize: 30,
              },
            }}
          >
            {icon}
          </Box>

          {/* Text */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "grey.400",
                lineHeight: 1.8,
              }}
            >
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};