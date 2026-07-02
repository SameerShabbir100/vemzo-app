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
                borderRadius: 5,
                px: 1,
                color: "#ffffff",
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
              We design & build <Box component="span">high-impact</Box> digital
              experiences
            </Typography>

            <Typography
              variant="h6"
              sx={{
                maxWidth: 650,
                lineHeight: 1.8,
                fontWeight: 400,
                color: "#ffffff",
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
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 600,
                color: "#000000",
                backgroundColor: "#ffffff",
              }}
            >
              Learn More
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
