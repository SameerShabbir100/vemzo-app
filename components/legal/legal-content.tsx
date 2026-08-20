"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Link as MuiLink,
} from "@mui/material";

export interface LegalSection {
  id: string;
  title: string;
  content: string | string[];
  subsections?: {
    title: string;
    content: string | string[];
  }[];
}

interface LegalContentProps {
  sections: LegalSection[];
}

export const LegalContent = ({ sections }: LegalContentProps) => {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id ?? ""
  );

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleTocClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, idx) => (
        <Typography
          key={idx}
          sx={{
            color: "grey.400",
            lineHeight: 1.9,
            fontSize: "1rem",
            mb: idx < content.length - 1 ? 2 : 0,
          }}
        >
          {paragraph}
        </Typography>
      ));
    }

    return (
      <Typography
        sx={{
          color: "grey.400",
          lineHeight: 1.9,
          fontSize: "1rem",
        }}
      >
        {content}
      </Typography>
    );
  };

  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 }, px: 2 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            gap: 6,
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          {/* ===============================
                Sticky Table of Contents
          =============================== */}

          <Box
            sx={{
              width: { lg: 300 },
              flexShrink: 0,
              display: { xs: "none", lg: "block" },
            }}
          >
            <Box
              sx={{
                position: "sticky",
                top: 140,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: "rgba(0, 0, 0, 0.04)",
                  border: "1px solid rgba(0,220,130,0.15)",
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#fff",
                    mb: 2,
                    fontSize: "1rem",
                  }}
                >
                  Table of Contents
                </Typography>

                <Stack spacing={0.5}>
                  {sections.map((section) => (
                    <MuiLink
                      key={section.id}
                      component="button"
                      onClick={() => handleTocClick(section.id)}
                      underline="none"
                      sx={{
                        textAlign: "left",
                        color:
                          activeSection === section.id
                            ? "#00dc82"
                            : "grey.400",
                        py: 1,
                        px: 1.5,
                        borderRadius: 2,
                        fontSize: "0.875rem",
                        lineHeight: 1.5,
                        transition: "all .3s ease",
                        bgcolor:
                          activeSection === section.id
                            ? "rgba(0,220,130,0.08)"
                            : "transparent",
                        borderLeft:
                          activeSection === section.id
                            ? "2px solid #00dc82"
                            : "2px solid transparent",
                        "&:hover": {
                          color: "#00dc82",
                          bgcolor: "rgba(0,220,130,0.05)",
                        },
                      }}
                    >
                      {section.title}
                    </MuiLink>
                  ))}
                </Stack>
              </Paper>
            </Box>
          </Box>

          {/* ===============================
                Mobile Table of Contents
          =============================== */}

          <Box sx={{ display: { xs: "block", lg: "none" } }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                bgcolor: "rgba(0, 0, 0, 0.04)",
                border: "1px solid rgba(0,220,130,0.15)",
                borderRadius: 3,
                mb: 4,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#fff",
                  mb: 2,
                  fontSize: "1rem",
                }}
              >
                Table of Contents
              </Typography>

              <Stack spacing={0.5}>
                {sections.map((section) => (
                  <MuiLink
                    key={section.id}
                    component="button"
                    onClick={() => handleTocClick(section.id)}
                    underline="none"
                    sx={{
                      textAlign: "left",
                      color: "grey.400",
                      py: 0.75,
                      px: 1.5,
                      borderRadius: 2,
                      fontSize: "0.875rem",
                      transition: "all .3s ease",
                      "&:hover": {
                        color: "#00dc82",
                        bgcolor: "rgba(0,220,130,0.05)",
                      },
                    }}
                  >
                    {section.title}
                  </MuiLink>
                ))}
              </Stack>
            </Paper>
          </Box>

          {/* ===============================
                Content Sections
          =============================== */}

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Stack spacing={5}>
              {sections.map((section, index) => (
                <Paper
                  key={section.id}
                  id={section.id}
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 5 },
                    bgcolor: "rgba(0, 0, 0, 0.04)",
                    border: "1px solid rgba(0,220,130,0.15)",
                    borderRadius: 3,
                    transition: "all .3s ease",
                    scrollMarginTop: "120px",
                    "&:hover": {
                      borderColor: "rgba(0,220,130,0.4)",
                      bgcolor: "rgba(0,220,130,0.02)",
                    },
                  }}
                >
                  {/* Section Number + Title */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "rgba(0,220,130,0.1)",
                        border: "1px solid rgba(0,220,130,0.2)",
                        flexShrink: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#00dc82",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: { xs: "1.15rem", md: "1.35rem" },
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Box>

                  {/* Section Content */}
                  {renderContent(section.content)}

                  {/* Subsections */}
                  {section.subsections?.map((sub, subIdx) => (
                    <Box key={subIdx} sx={{ mt: 3, pl: { xs: 0, md: 2 } }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "1rem",
                          mb: 1.5,
                        }}
                      >
                        {sub.title}
                      </Typography>

                      {renderContent(sub.content)}
                    </Box>
                  ))}
                </Paper>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
