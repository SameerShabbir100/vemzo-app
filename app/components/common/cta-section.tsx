"use client";

import Link from "next/link";

import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CTASectionProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const CTASection = ({
  badge = "Let's Work Together",
  title,
  highlight,
  description,
  buttonText,
  buttonLink,
}: CTASectionProps) => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            borderRadius: "28px",
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 10 },

            border: "1px solid rgba(0,220,130,.15)",

            background:
              "linear-gradient(180deg, rgba(0,220,130,.05), rgba(0,0,0,.9))",

            backdropFilter: "blur(12px)",

            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(0,220,130,.08), transparent 70%)",
              pointerEvents: "none",
            },
          }}
        >
          {/* Badge */}

          <Typography
            sx={{
              display: "inline-flex",
              px: 2.5,
              py: 1,
              mb: 3,
              borderRadius: "999px",
              border: "1px solid rgba(0,220,130,.2)",
              background: "rgba(0,220,130,.08)",
              color: "#00dc82",
              fontWeight: 600,
              fontSize: ".9rem",
            }}
          >
            {badge}
          </Typography>

          {/* Heading */}

          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: {
                xs: "2rem",
                md: "3.25rem",
              },
              lineHeight: 1.2,
            }}
          >
            {title}

            {highlight && (
              <Box
                component="span"
                sx={{
                  color: "#00dc82",
                }}
              >
                {" "}
                {highlight}
              </Box>
            )}
          </Typography>

          {/* Description */}

          <Typography
            sx={{
              mt: 3,
              maxWidth: 760,
              mx: "auto",
              color: "grey.400",
              fontSize: {
                xs: "1rem",
                md: "1.1rem",
              },
              lineHeight: 1.9,
            }}
          >
            {description}
          </Typography>

          {/* Button */}

          <Button
            component={Link}
            href={buttonLink}
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            sx={{
              mt: 5,

              px: 5,
              py: 1.7,

              borderRadius: "14px",

              textTransform: "none",

              fontSize: "1rem",

              fontWeight: 600,

              color: "#000",

              background: "#00dc82",

              boxShadow: "0 10px 30px rgba(0,220,130,.2)",

              transition: "all .3s ease",

              "&:hover": {
                background: "#00dc82",
                transform: "translateY(-4px)",
                boxShadow: "0 18px 40px rgba(0,220,130,.35)",
              },
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};