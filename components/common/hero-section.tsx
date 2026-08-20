"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

export const HeroSection = () => {
  return (
    <Box
      sx={{
        maxWidth: { lg: "1440px", xl: "1600px" },
        mx: "auto",
      }}
    >
      <Grid container sx={{ px: { sm: 8 }, mb: { sm: 15 } }}>
        {/* Left Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              textAlign: { xs: "center", sm: "left" },
              px: { xs: 4, sm: 0 },
            }}
          >
            <Chip
              label="Digital Agency"
              variant="outlined"
              sx={{
                px: 2,
                py: 2.5,
                borderRadius: 50,
                borderColor: "rgba(0,220,130,0.2)",
                backgroundColor: "rgba(0,220,130,0.1)",
                color: "#00dc82",
                fontWeight: 500,
                fontSize: "0.875rem",
                mb: 4,
                "& .MuiChip-label": {
                  px: 1,
                },
              }}
            />

            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: {
                  xs: "2rem",

                  md: "2.5rem",
                  lg: "4rem",
                  xl: "4.5rem",
                },
                lineHeight: 1.15,
                mb: 3,
                pr: { sm: 4 },
              }}
            >
              We design & build{" "}
              <Box
                component="span"
                sx={{
                  color: "#00dc82",
                }}
              >
                high-impact
              </Box>{" "}
              digital experiences
            </Typography>

            <Typography
              variant="h6"
              sx={{
                maxWidth: 650,
                lineHeight: { xs: 1.5, sm: 1.8 },
                fontSize: { xs: 14, sm: 18, lg: 20 },
                fontWeight: 400,
                color: "#9ca3af",
                mb: 5,
                mx: { xs: "auto", md: 0 },
              }}
            >
              We empower businesses with custom software, web applications,
              mobile apps, and cloud-based solutions. Our experienced team
              delivers scalable, reliable, and user-focused products that drive
              growth and success.
            </Typography>

            <Button
              component={Link}
              href="/services"
              variant="contained"
              size="large"
              sx={{
                px: { xs: 3, sm: 5 },
                py: { sm: 1.5 },
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                color: "#000",
                backgroundColor: "#00dc82",

                "&:hover": {
                  backgroundColor: "#00c474",
                },
              }}
            >
              Let's Get Started
            </Button>
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "center",
            }}
          >
            <Image
              src="/hero-bg.svg"
              alt="Software Development Agency"
              width={650}
              height={650}
              priority
              draggable={false}
              style={{
                width: "100%",
                maxWidth: "650px",
                height: "auto",
                userSelect: "none",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
