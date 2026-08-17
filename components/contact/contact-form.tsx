"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    if (!name || !email || !message) {
      setErrorMsg("Please fill in your Name, Email, and Message.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMsg(
          "Thank you! Your message has been sent directly to info@vemzo.io. Our team will reply shortly."
        );
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setErrorMsg(data.error || "Failed to send message. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Network error occurred. Please try again or use WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const formattedMessage = encodeURIComponent(
      `Hi Vemzo Technologies!\n\n` +
        `👤 Name: ${name || "Client"}\n` +
        `📧 Email: ${email || "Not specified"}\n` +
        `📌 Subject: ${subject || "General Inquiry"}\n\n` +
        `💬 Message:\n${message || "Hi, I want to discuss a new project."}`
    );

    window.open(`https://wa.me/923045421167?text=${formattedMessage}`, "_blank");
  };

  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "24px",
        background: "#00000059",
        backdropFilter: "blur(14px)",
        border: "1px solid #00dc8226",
        transition: "all .35s ease",
        "&:hover": {
          borderColor: "#00dc82",
          boxShadow: "0 20px 45px #00dc821f",
        },
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, #00dc8214, transparent 65%)",
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

        {successMsg && (
          <Alert
            severity="success"
            onClose={() => setSuccessMsg("")}
            sx={{
              mb: 3,
              bgcolor: "#00dc8226",
              color: "#00dc82",
              border: "1px solid #00dc82",
            }}
          >
            {successMsg}
          </Alert>
        )}

        {errorMsg && (
          <Alert
            severity="error"
            onClose={() => setErrorMsg("")}
            sx={{
              mb: 3,
              bgcolor: "#ff555526",
              color: "#ff5555",
              border: "1px solid #ff5555",
            }}
          >
            {errorMsg}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField
            fullWidth
            required
            placeholder="Your Name *"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={fieldStyle}
          />

          <TextField
            fullWidth
            required
            type="email"
            placeholder="Email Address *"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={fieldStyle}
          />

          <TextField
            fullWidth
            placeholder="Subject (e.g. Custom SaaS Query)"
            variant="outlined"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            sx={fieldStyle}
          />

          <TextField
            fullWidth
            required
            multiline
            rows={5}
            placeholder="Tell us about your project requirements..."
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={fieldStyle}
          />

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              type="submit"
              disabled={loading}
              variant="contained"
              size="large"
              startIcon={
                loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <SendIcon />
                )
              }
              sx={{
                flex: 1,
                py: 1.8,
                borderRadius: "14px",
                textTransform: "none",
                fontSize: "0.95rem",
                fontWeight: 700,
                bgcolor: "#00dc82",
                color: "#000",
                boxShadow: "none",
                transition: ".3s",
                "&:hover": {
                  bgcolor: "#00c474",
                  transform: "translateY(-2px)",
                  boxShadow: "0 15px 35px #00dc8240",
                },
              }}
            >
              {loading ? "Sending Message..." : "Send Message"}
            </Button>

            <Button
              onClick={handleWhatsAppRedirect}
              variant="outlined"
              size="large"
              startIcon={<WhatsAppIcon />}
              sx={{
                py: 1.8,
                px: 3,
                borderRadius: "14px",
                textTransform: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
                borderColor: "#ffffff33",
                color: "#fff",
                "&:hover": {
                  borderColor: "#00dc82",
                  color: "#00dc82",
                },
              }}
            >
              WhatsApp Us
            </Button>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

const fieldStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    color: "#fff",
    background: "#ffffff05",
    transition: ".3s",
    "& fieldset": {
      borderColor: "#00dc8226",
    },
    "&:hover fieldset": {
      borderColor: "#00dc8259",
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
    color: "#ffffff8c",
    opacity: 1,
  },
};