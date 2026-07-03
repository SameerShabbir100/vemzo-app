"use client";

import Link from "next/link";

import {
  Box,
  IconButton,
  Tooltip,
  Zoom,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const WhatsAppButton = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
      }}
    >
     <Tooltip
  title="Chat with us"
  placement="left"
  arrow
>
  <IconButton
    component={Link}
    href="https://wa.me/447XXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      width: 64,
      height: 64,
      bgcolor: "#25D366",
      color: "#fff",
      border: "2px solid rgba(255,255,255,.15)",
      boxShadow: "0 10px 30px rgba(37,211,102,.35)",
      transition: "all .3s ease",

      "&:hover": {
        bgcolor: "#20bd5a",
        transform: "scale(1.08)",
        boxShadow: "0 15px 35px rgba(37,211,102,.5)",
      },
    }}
  >
    <WhatsAppIcon sx={{ fontSize: 36 }} />
  </IconButton>
</Tooltip>
    </Box>
  );
};