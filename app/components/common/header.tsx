"use client";

import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Paper,
  Stack,
  Link,
  IconButton,
  Tooltip,
  Drawer,
  Divider,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          height: "65px",
          background: "rgba(3,0,20,0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0,220,130,0.15)",
          borderBottom: "none",
          zIndex: 50,
        }}
      >
        <Container 
          maxWidth="xl" 
          sx={{ 
            height: "100%",
            px: { xs: 2, md: 5 },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              height: "100%",
              minHeight: "65px",
              justifyContent: "space-between",
              px: "10px",
            }}
          >
            {/* ================================= */}
            {/* Logo + Name */}
            {/* ================================= */}

            <Link
              component={NextLink}
              href="/"
              underline="none"
              color="inherit"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/nuxt-logo.svg"
                alt="Vemzo Technologies"
                width={56}
                height={56}
                priority
                draggable={false}
                style={{ cursor: "pointer" }}
              />

              <Typography
                variant="h6"
                sx={{
                  ml: "10px",
                  fontWeight: 700,
                  color: "#d1d5db",
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  fontSize: "1rem",
                }}
              >
                Vemzo Technologies
              </Typography>
            </Link>

            {/* ================================= */}
            {/* Desktop Navigation */}
            {/* ================================= */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                width: "500px",
                height: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                mr: "20px",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "auto",
                  border: "1px solid rgba(0,220,130,0.2)",
                  bgcolor: "#000003",
                  borderRadius: "999px",
                  px: "20px",
                  py: "10px",
                  color: "#d1d5db",
                  mr: "15px",
                }}
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.title}
                    component={NextLink}
                    href={link.link}
                    underline="none"
                    sx={{
                      cursor: "pointer",
                      color: "#d1d5db",
                      fontSize: "0.95rem",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "#00dc82",
                      },
                    }}
                  >
                    {link.title}
                  </Link>
                ))}
              </Paper>
            </Box>

            {/* ================================= */}
            {/* Desktop Social Icons */}
            {/* ================================= */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                flexDirection: "row",
                gap: "20px",
                alignItems: "center",
              }}
            >
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "#00dc82",
                    },
                  }}
                >
                  <Icon size={24} />
                </Link>
              ))}
            </Box>

            {/* ================================= */}
            {/* Hamburger Menu */}
            {/* ================================= */}

            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                color: "#ffffff",
                fontSize: "2rem",
                p: 0,
                "&:hover": {
                  color: "#00dc82",
                  bgcolor: "transparent",
                },
              }}
            >
              ☰
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ================================= */}
      {/* Mobile Menu */}
      {/* ================================= */}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: "100%",
            bgcolor: "#000003",
            color: "#d1d5db",
            top: "65px",
            height: "calc(100% - 65px)",
            p: 3,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              width: "100%",
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                component={NextLink}
                href={link.link}
                onClick={() => setMobileOpen(false)}
                underline="none"
                sx={{
                  cursor: "pointer",
                  color: "#d1d5db",
                  fontSize: "1rem",
                  textAlign: "center",
                  transition: "color 0.2s ease",
                  py: 1,
                  width: "100%",
                  "&:hover": {
                    color: "#00dc82",
                  },
                }}
              >
                {link.title}
              </Link>
            ))}
          </Box>

          {/* Social Icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              mt: 3,
            }}
          >
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.2s ease",
                  "&:hover": {
                    color: "#00dc82",
                  },
                }}
              >
                <Icon size={32} />
              </Link>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};