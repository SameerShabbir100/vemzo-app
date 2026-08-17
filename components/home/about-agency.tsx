"use client";

import Image from "next/image";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CountUp from "react-countup";

export default function AboutAgency() {
  return (
    <Box
      sx={{
        maxWidth: { lg: "1440px", xl: "1600px" },
        mx: "auto",
        px: { sm: 8 },
      }}
    >
      <Grid container spacing={{ sm: 5, lg: 10 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              height: {
                xs: 200,
                sm: 420,
                md: 520,
                lg: 620,
              },
            }}
          >
            <Image
              fill
              src="/about-agency.png"
              alt="Agency"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: { sm: "none" },
            py: 8,
            mx: "auto",
          }}
        >
          <Image
            width={375}
            height={200}
            src="/about-agency.png"
            alt="Agency"
            style={{
              objectFit: "cover",
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            sx={{
              color: "#00DC82",
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              mb: 2,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            About Our Agency
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              lineHeight: 1.05,
              fontSize: {
                xs: 32,
                sm: 42,
                lg: 58,
                xl: 70,
              },
              color: "#ffffff",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            AI-Driven Agency
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              lineHeight: 1.05,
              fontSize: {
                xs: 32,
                sm: 42,
                lg: 58,
                xl: 70,
              },
              mb: 1,
              color: "#ffffff",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Promote Your Brand's
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: 28,
                sm: 32,
                lg: 48,
              },
              fontWeight: 300,
              mb: { xs: 4, lg: 8 },
              color: "#ffffff",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Growth And Success
          </Typography>

          <Grid container>
            <Grid size={{ xs: 12, sm: 6, md: 5 }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: 70,
                    sm: 100,
                    lg: 140,
                  },
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <CountUp end={5} duration={2} />+
              </Typography>

              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: 18,
                  textTransform: "uppercase",
                  textAlign: { xs: "center", sm: "left" },
                  mb: { xs: 5, sm: 0 },
                }}
              >
                Years Of Experience
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography
                sx={{
                  color: "#ffffff",
                  lineHeight: 1.8,
                  mb: 5,
                  textAlign: { xs: "center", sm: "left" },
                  px: { xs: 4, sm: 0 },
                }}
              >
                We're a team of expert designers, web developers and marketers
                delivering modern digital experiences that help businesses grow,
                scale and stand out in today's competitive market.
              </Typography>
              <Box
                sx={{
                  display: { xs: "flex", sm: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  endIcon={<ArrowOutwardIcon />}
                  sx={{
                    bgcolor: "#00DC82",
                    color: "#000",
                    px: 4,
                    py: 1.5,
                    borderRadius: 50,
                    fontWeight: 700,

                    "&:hover": {
                      bgcolor: "#00c975",
                    },
                  }}
                >
                  Explore More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
