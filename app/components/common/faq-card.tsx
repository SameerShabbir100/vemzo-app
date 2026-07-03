"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface FAQCardProps {
  question: string;
  answer: string;
  expanded: boolean;
  onChange: () => void;
}

export const FAQCard = ({
  question,
  answer,
  expanded,
  onChange,
}: FAQCardProps) => {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      elevation={0}
      disableGutters
      sx={{
        bgcolor: "transparent",
        border: "1px solid rgba(0,220,130,0.15)",
        borderRadius: "16px !important",
        overflow: "hidden",
        mb: 2,

        "&:before": {
          display: "none",
        },

        "&:hover": {
          borderColor: "rgba(0,220,130,0.35)",
        },

        "&.Mui-expanded": {
          borderColor: "#00dc82",
          boxShadow: "0 10px 30px rgba(0,220,130,.08)",
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          expanded ? (
            <RemoveIcon sx={{ color: "#00dc82" }} />
          ) : (
            <AddIcon sx={{ color: "#00dc82" }} />
          )
        }
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.08)",
          backdropFilter: "blur(12px)",
          px: 3,
          py: 1,

          "& .MuiAccordionSummary-content": {
            my: 1.5,
          },

          "& .MuiAccordionSummary-expandIconWrapper": {
            transition: "transform .3s",
          },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 600,
            fontSize: {
              xs: "1rem",
              md: "1.125rem",
            },
          }}
        >
          {question}
        </Typography>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          px: 3,
          pb: 3,
          bgcolor: "rgba(255,255,255,0.01)",
        }}
      >
        <Typography
          sx={{
            color: "grey.400",
            lineHeight: 1.9,
          }}
        >
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};