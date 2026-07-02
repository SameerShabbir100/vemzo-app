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
          // background: "rgba(3,0,20,.45)",
          backgroundColor: "transparent",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(76,29,149,.35)",
          boxShadow: "0 8px 32px rgba(42,14,97,.25)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 72,
              justifyContent: "space-between",
            }}
          >
            {/* ================================= */}
            {/* Logo */}
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
                src="/logo.png"
                alt="Vemzo Technologies"
                width={56}
                height={56}
                priority
              />

              <Typography
                variant="h6"
                sx={{
                  ml: 1.5,
                  fontWeight: 700,
                  color: "#fff",
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                Vemzo Technologies
              </Typography>
            </Link>

            {/* ================================= */}
            {/* Desktop Navigation */}
            {/* ================================= */}

            <Paper
              elevation={0}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "center",
                px: 2.5,
                py: 1,
                borderRadius: "999px",
                bgcolor: "rgba(3,0,20,.45)",
                border: "1px solid rgba(112,66,248,.35)",
                backdropFilter: "blur(18px)",
                gap: 2,
              }}
            >
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.title}
                  component={NextLink}
                  href={item.link}
                  underline="none"
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 99,
                    color: "grey.300",
                    fontSize: 15,
                    fontWeight: 500,
                    transition: ".25s",

                    "&:hover": {
                      color: "#A855F7",
                      bgcolor: "rgba(168,85,247,.08)",
                    },
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </Paper>

            {/* ================================= */}
            {/* Desktop Social Icons */}
            {/* ================================= */}

            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "center",
              }}
            >
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Tooltip key={name} title={name} arrow>
                  <IconButton
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      color: "grey.300",
                      border: "1px solid rgba(112,66,248,.35)",
                      bgcolor: "rgba(255,255,255,.02)",
                      transition: "all .3s ease",

                      "&:hover": {
                        bgcolor: "#7C3AED",
                        color: "#fff",
                        transform: "translateY(-3px)",
                        borderColor: "#8B5CF6",
                        boxShadow: "0 10px 25px rgba(124,58,237,.35)",
                      },
                    }}
                  >
                    <Icon size={20} />
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>

            {/* ================================= */}
            {/* Mobile Menu Button */}
            {/* ================================= */}

            <IconButton
              onClick={handleDrawerOpen}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                width: 48,
                height: 48,
                borderRadius: 3,
                color: "#fff",
                border: "1px solid rgba(112,66,248,.35)",
                bgcolor: "rgba(255,255,255,.03)",

                "&:hover": {
                  bgcolor: "rgba(124,58,237,.20)",
                },
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ================================= */}
      {/* Mobile Drawer */}
      {/* ================================= */}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerClose}
        sx={{
          width: 320,
          bgcolor: "#030014",
          color: "#fff",
          borderLeft: "1px solid rgba(112,66,248,.25)",
          backgroundImage: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <Typography variant="h6">Menu</Typography>

          <IconButton
            onClick={handleDrawerClose}
            sx={{
              color: "#fff",
            }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Box>

        <Divider
          sx={{
            borderColor: "rgba(112,66,248,.25)",
          }}
        />

        {/* Added navigation links to drawer */}
        <Box sx={{ p: 2 }}>
          <Stack spacing={1}>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.title}
                component={NextLink}
                href={item.link}
                onClick={handleDrawerClose}
                underline="none"
                sx={{
                  display: "block",
                  py: 1.5,
                  px: 2,
                  borderRadius: 2,
                  color: "grey.300",
                  fontSize: 16,
                  fontWeight: 500,
                  transition: ".25s",

                  "&:hover": {
                    color: "#A855F7",
                    bgcolor: "rgba(168,85,247,.08)",
                  },
                }}
              >
                {item.title}
              </Link>
            ))}
          </Stack>
        </Box>

        <Divider
          sx={{
            borderColor: "rgba(112,66,248,.25)",
          }}
        />

        {/* Social icons in drawer */}
        <Box sx={{ p: 3 }}>
          <Stack direction="row" spacing={1.5}>
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <IconButton
                key={name}
                component="a"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  color: "grey.300",
                  border: "1px solid rgba(112,66,248,.35)",
                  bgcolor: "rgba(255,255,255,.02)",
                  transition: "all .3s ease",

                  "&:hover": {
                    bgcolor: "#7C3AED",
                    color: "#fff",
                    transform: "translateY(-3px)",
                    borderColor: "#8B5CF6",
                    boxShadow: "0 10px 25px rgba(124,58,237,.35)",
                  },
                }}
              >
                <Icon size={20} />
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};
