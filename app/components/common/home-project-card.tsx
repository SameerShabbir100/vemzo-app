"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface HomeProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
}

export const HomeProjectCard = ({
  title,
  description,
  image,
  demoUrl,
}: HomeProjectCardProps) => {
  return (
    <Card
      component={Link}
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      elevation={0}
      sx={{
        display: "block",
        overflow: "hidden",
        borderRadius: "16px",
        border: "1px solid rgba(0,220,130,0.15)",
        bgcolor: "rgba(3,0,20,0.4)",
        backdropFilter: "blur(8px)",
        transition: "all 0.3s ease",
        height: "100%",
        textDecoration: "none",
        "&:hover": {
          borderColor: "rgba(0,220,130,0.4)",
          transform: "translateY(-4px)",
        },
      }}
      className="group"
    >
      {/* Image */}
      <Box
        sx={{
          position: "relative",
          height: 220,
          overflow: "hidden",
          bgcolor: "rgba(0,220,130,0.05)",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
          className="group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(3,0,20,0.8), transparent, transparent)",
          }}
        />
      </Box>

      {/* Content */}
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{
            color: "#ffffff",
            fontWeight: 600,
            mb: 1.5,
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#00dc82",
            },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "grey.400",
            lineHeight: 1.75,
          }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
            color: "#00dc82",
            fontWeight: 500,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateX(4px)",
            },
          }}
        >
          View Live Demo
          <ArrowForwardIcon sx={{ ml: 0.5, fontSize: 18 }} />
        </Box>
      </CardContent>

      {/* Hover Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "16px",
          border: "1px solid rgba(0,220,130,0.2)",
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          "&:hover": {
            opacity: 1,
          },
        }}
      />
    </Card>
  );
};