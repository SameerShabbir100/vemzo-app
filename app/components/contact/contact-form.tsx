"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export const ContactForm = () => {
  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "24px",

        background: "rgba(0, 0, 0, 0.35)",

        backdropFilter: "blur(14px)",

        border: "1px solid rgba(0,220,130,0.15)",

        transition: "all .35s ease",

        "&:hover": {
          borderColor: "#00dc82",
          boxShadow: "0 20px 45px rgba(0,220,130,.12)",
        },
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(0,220,130,.08), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <CardContent
        sx={{
          position: "relative",
          p: {
            xs: 3,
            md: 5,
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: 700,
            mb: 4,
          }}
        >
          Send Message
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField
            fullWidth
            placeholder="Your Name"
            variant="outlined"
            sx={fieldStyle}
          />

          <TextField
            fullWidth
            type="email"
            placeholder="Email Address"
            variant="outlined"
            sx={fieldStyle}
          />

          <TextField
            fullWidth
            placeholder="Subject"
            variant="outlined"
            sx={fieldStyle}
          />

          <TextField
            fullWidth
            multiline
            rows={6}
            placeholder="Tell us about your project..."
            variant="outlined"
            sx={fieldStyle}
          />

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 1,

              py: 1.8,

              borderRadius: "14px",

              textTransform: "none",

              fontSize: "1rem",

              fontWeight: 600,

              bgcolor: "#00dc82",

              color: "#000",

              boxShadow: "none",

              transition: ".3s",

              "&:hover": {
                bgcolor: "#00c474",
                transform: "translateY(-3px)",
                boxShadow: "0 15px 35px rgba(0,220,130,.25)",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const fieldStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",

    color: "#fff",

    background: "rgba(255,255,255,.02)",

    transition: ".3s",

    "& fieldset": {
      borderColor: "rgba(0,220,130,.15)",
    },

    "&:hover fieldset": {
      borderColor: "rgba(0,220,130,.35)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#00dc82",
      borderWidth: "2px",
    },
  },

  "& .MuiInputBase-input": {
    color: "#fff",
  },

  "& .MuiInputBase-input::placeholder": {
    color: "rgba(255,255,255,.55)",
    opacity: 1,
  },
};