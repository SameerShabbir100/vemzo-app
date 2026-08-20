"use client";

import { Paper, Typography, Box } from "@mui/material";

interface WorkflowCardProps {
  step: string;
  title: string;
  description: string;
}

export const WorkflowCard = ({
  step,
  title,
  description,
}: WorkflowCardProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        borderRadius: "20px",
        border: "1px solid rgba(0,220,130,0.12)",
        background: "#000000",
        p: { xs: 3, md: 4 },
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        mt: 2, // Space for the overlapping step badge
        "&:hover": {
          transform: "translateY(-4px)",
          border: "1px solid rgba(0,220,130,0.35)",
          boxShadow: "0 12px 35px rgba(0,220,130,0.08), 0 1px 3px rgba(0,220,130,0.1)",
          background: "#000000",
          "& .step-badge": {
            background: "linear-gradient(135deg, #00ff9d 0%, #00dc82 100%)",
            color: "#080c14",
            boxShadow: "0 0 15px rgba(0,220,130,0.4)",
            borderColor: "#00ff9d",
          },
          "& .card-glow": {
            opacity: 1,
          }
        },
      }}
      className="group"
    >
      {/* Step badge positioned directly on the border */}
      <Box
        className="step-badge"
        sx={{
          position: "absolute",
          top: 0,
          left: 32,
          transform: "translateY(-50%)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2.5,
          py: 0.75,
          borderRadius: "30px",
          border: "1.5px solid rgba(0,220,130,0.4)",
          background: "#000000",
          color: "#00dc82",
          fontWeight: 800,
          fontSize: "0.8rem",
          letterSpacing: "1px",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 10,
        }}
      >
        STEP {step}
      </Box>

      {/* Absolute glow spot inside the card */}
      <Box
        className="card-glow"
        sx={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,220,130,0.15) 0%, transparent 70%)",
          opacity: 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h6"
          sx={{
            color: "#00dc82",
            fontSize: "1.35rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            mt: 0.5,
            transition: "color 0.3s ease",
            "group:hover &": {
              color: "#00ff9d",
            },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "grey.400",
            mt: 2,
            lineHeight: 1.8,
            fontSize: "0.95rem",
            fontWeight: 400,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Paper>
  );
};