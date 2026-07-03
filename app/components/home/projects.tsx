"use client";

import Link from "next/link";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { PROJECT } from "@/constants";
import { HomeProjectCard } from "../common/home-project-card";

export const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mb: 12,
        py: 8,
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(0,220,130,0.05), transparent 60%)",
        }}
      />

      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2rem", md: "2.75rem" },
          fontWeight: 600,
          color: "#00dc82",
          my: 5,
        }}
      >
        Our Recent Projects
      </Typography>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {PROJECT.slice(0, 3).map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.title}>
              <HomeProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                demoUrl={project.demoUrl}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            component={Link}
            href="/projects"
            variant="contained"
            sx={{
              py: 1.5,
              px: 5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
              color: "#000000",
              backgroundColor: "#00dc82",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#00c474",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 25px rgba(0,220,130,0.3)",
              },
            }}
          >
            Explore More Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};