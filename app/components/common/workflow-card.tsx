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
        borderRadius: "16px",
        border: "1px solid rgba(0,220,130,0.15)",
        bgcolor: "transparent",
        p: 3,
        transition: "all 0.3s ease",
        backdropFilter: "blur(4px)",
        "&:hover": {
          bgcolor: "rgba(0,220,130,0.05)",
        },
      }}
      className="group"
    >
      <Typography
        variant="body2"
        sx={{
          color: "#00dc82",
          fontWeight: 500,
          mb: 1.5,
          fontSize: "0.875rem",
        }}
      >
        STEP {step}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#ffffff",
          fontSize: "1.25rem",
          fontWeight: 600,
          transition: "color 0.3s ease",
          "&:hover": {
            color: "#00dc82",
          },
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "grey.400",
          mt: 1.5,
          lineHeight: 1.75,
        }}
      >
        {description}
      </Typography>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "16px",
          opacity: 0,
          transition: "opacity 0.3s ease",
          border: "1px solid rgba(0,220,130,0.2)",
          pointerEvents: "none",
          "&:hover": {
            opacity: 1,
          },
        }}
      />
    </Paper>
  );
};