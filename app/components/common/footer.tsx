"use client";

import NextLink from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
  Paper,
  Divider,
  IconButton,
} from "@mui/material";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

import { FOOTER_LINKS, SERVICES, SOCIAL_LINKS } from "@/constants";

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  // useEffect(() => {
  //   setCurrentYear(new Date().getFullYear());
  // }, []);

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(0,220,130,0.15)",
        mt: 10,
        bgcolor: "#000003",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Grid container spacing={8}>
          {/* ===============================
                Company
          =============================== */}

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Stack spacing={3}>
              <Link
                component={NextLink}
                href="/"
                underline="none"
                color="inherit"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  width: "fit-content",
                }}
              >
                <Image
                  src="/nuxt-logo.svg"
                  alt="Vemzo Technologies"
                  width={52}
                  height={52}
                  priority
                />

                <Typography
                  variant="h5"
                  sx={{
                    ml: 2,
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  Vemzo
                </Typography>
              </Link>

              <Typography
                variant="body2"
                sx={{
                  color: "grey.400",
                  lineHeight: 1.9,
                  maxWidth: 320,
                }}
              >
                We build modern Shopify stores, scalable web applications, and
                high-performance digital experiences that help businesses
                launch, grow, and scale.
              </Typography>
            </Stack>
          </Grid>

          {/* ===============================
                Quick Links
          =============================== */}

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, color: "#fff" }}
            >
              Quick Links
            </Typography>

            <Stack spacing={1}>
              {FOOTER_LINKS.map((item) => (
                <Link
                  key={item.name}
                  component={NextLink}
                  href={item.href}
                  underline="none"
                  sx={{
                    color: "grey.400",
                    py: 1,
                    px: 1,
                    borderRadius: 2,
                    width: "fit-content",
                    transition: ".3s",
                    "&:hover": {
                      color: "#00dc82",
                      backgroundColor: "rgba(0,220,130,0.08)",
                      transform: "translateX(6px)",
                    },
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* ===============================
                Services
          =============================== */}

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, color: "#fff" }}
            >
              Services
            </Typography>

            <Stack spacing={1}>
              {SERVICES.map((service) => (
                <Link
                  key={service.title}
                  component={NextLink}
                  href="/services"
                  underline="none"
                  sx={{
                    color: "grey.400",
                    py: 1,
                    px: 1,
                    borderRadius: 2,
                    width: "fit-content",
                    transition: "all .3s ease",
                    "&:hover": {
                      color: "#00dc82",
                      backgroundColor: "rgba(0,220,130,0.08)",
                      transform: "translateX(6px)",
                    },
                  }}
                >
                  {service.title}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* ===============================
                Contact
          =============================== */}

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, color: "#fff" }}
            >
              Contact
            </Typography>

            <Stack spacing={2.5}>
              {/* Email Card */}
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  bgcolor: "rgba(0, 0, 0, 0.04)",
                  border: "1px solid rgba(0,220,130,0.15)",
                  borderRadius: 3,
                  transition: "all .3s ease",
                  "&:hover": {
                    borderColor: "rgba(0,220,130,0.4)",
                    bgcolor: "rgba(0,220,130,0.05)",
                  },
                }}
              >
                <EmailRoundedIcon
                  sx={{
                    color: "#00dc82",
                    fontSize: 24,
                  }}
                />

                <Box>
                  <Typography variant="caption" sx={{ color: "#fff" }}>
                    Email
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    info@vemzo.io
                  </Typography>
                </Box>
              </Paper>

              {/* Address Card */}
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  bgcolor: "rgba(0, 0, 0, 0.04)",
                  border: "1px solid rgba(0,220,130,0.15)",
                  borderRadius: 3,
                  transition: "all .3s ease",
                  "&:hover": {
                    borderColor: "rgba(0,220,130,0.4)",
                    bgcolor: "rgba(0,220,130,0.05)",
                  },
                }}
              >
                <LocationOnRoundedIcon
                  sx={{
                    color: "#00dc82",
                    fontSize: 24,
                  }}
                />

                <Box>
                  <Typography variant="caption" sx={{ color: "#fff" }}>
  Location
</Typography>

<Typography variant="body2" sx={{ color: "#fff" }}>
  Lahore, Pakistan
</Typography>
                </Box>
              </Paper>

              {/* Social Icons */}
              <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
                {SOCIAL_LINKS.map(({ icon: Icon, href, name }) => (
                  <IconButton
                    key={name}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      border: "1px solid rgba(0,220,130,0.2)",
                      color: "#D1D5DB",
                      bgcolor: "transparent",
                      transition: "all .3s ease",
                      "&:hover": {
                        bgcolor: "#00dc82",
                        borderColor: "#00dc82",
                        color: "#000000",
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 25px rgba(0,220,130,0.3)",
                      },
                    }}
                  >
                    <Icon size={20} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* ==========================================
                Bottom Copyright
        ========================================== */}

        <Divider
          sx={{
            mt: 8,
            mb: 4,
            borderColor: "rgba(0,220,130,0.15)",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "grey.500",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            © {currentYear}{" "}
            <Box
              component="span"
              sx={{
                color: "#00dc82",
                fontWeight: 600,
              }}
            >
              Vemzo Technologies
            </Box>
            . All rights reserved.
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link
              component={NextLink}
              href="/privacy-policy"
              underline="none"
              sx={{
                color: "grey.500",
                transition: ".3s",
                "&:hover": {
                  color: "#00dc82",
                },
              }}
            >
              Privacy Policy
            </Link>

            <Link
              component={NextLink}
              href="/terms"
              underline="none"
              sx={{
                color: "grey.500",
                transition: ".3s",
                "&:hover": {
                  color: "#00dc82",
                },
              }}
            >
              Terms & Conditions
            </Link>

            <Link
              component={NextLink}
              href="/contact"
              underline="none"
              sx={{
                color: "grey.500",
                transition: ".3s",
                "&:hover": {
                  color: "#00dc82",
                },
              }}
            >
              Contact
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};