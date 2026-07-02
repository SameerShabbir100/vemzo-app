"use client";

import Image from "next/image";
import Link from "next/link";

import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";

export const HeroSection = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        pt: { xs: 14, md: 18 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 6, md: 10 }}
      >
        {/* Left Content */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Stack spacing={4}>
            <Chip
              label="Custom Software Development Company"
              variant="outlined"
              sx={{
                px: 2,
                py: 2.5,
                borderRadius: 50,
                borderColor: "rgba(0, 220, 130, 0.2)",
                backgroundColor: "rgba(0, 220, 130, 0.1)",
                color: "#00dc82",
                fontWeight: 500,
                fontSize: "0.875rem",
                width: "fit-content",
                alignSelf: { xs: "center", md: "flex-start" },
                "& .MuiChip-label": {
                  px: 1,
                },
              }}
            />

            <Typography
              variant="h2"
              sx={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: {
                  xs: "2.5rem",
                  sm: "3rem",
                  md: "4rem",
                },
                lineHeight: 1.15,
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
                lineHeight: 1.8,
                fontWeight: 400,
                color: "#9ca3af",
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
                px: 5,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                color: "#000000",
                backgroundColor: "#00dc82",
                width: "fit-content",
                alignSelf: { xs: "center", md: "flex-start" },
                "&:hover": {
                  backgroundColor: "#00c474",
                },
              }}
            >
              Lets Get Started
            </Button>
          </Stack>
        </Box>

        {/* Right Image */}
        <Box
          sx={{
            flex: 1,
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
      </Stack>
    </Container>
  );
};