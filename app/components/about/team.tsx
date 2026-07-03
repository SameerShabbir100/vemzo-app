"use client";

import { Box, Container, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "./team.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  instagram: string;
}

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "John Doe",
    position: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 2,
    name: "Ali Ahmed",
    position: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 3,
    name: "Fatima Noor",
    position: "UI / UX Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 4,
    name: "Hassan Raza",
    position: "Project Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 5,
    name: "Usman Tariq",
    position: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    position: "Backend Developer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
];

import { TeamCard } from "../common/team-card";

export const Team = () => {
  return (
    <Box
      component="section"
      id="team"
      sx={{
        position: "relative",
        py: {
          xs: 10,
          md: 14,
        },
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(0,220,130,.05), transparent 65%)",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Heading */}

        <Box
          sx={{
            textAlign: "center",
            mb: 8,
          }}
        >
          <Typography
            sx={{
              display: "inline-flex",
              px: 2,
              py: 1,
              borderRadius: "999px",
              bgcolor: "rgba(0,220,130,.10)",
              border: "1px solid rgba(0,220,130,.20)",
              color: "#00dc82",
              fontWeight: 600,
              fontSize: ".875rem",
              mb: 3,
            }}
          >
            Our Team
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: {
                xs: "2.2rem",
                md: "3.4rem",
              },
            }}
          >
            Meet The Experts Behind
            <Box
              component="span"
              sx={{
                color: "#00dc82",
              }}
            >
              {" "}
              VEMZO
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "grey.400",
              mt: 3,
              maxWidth: 760,
              mx: "auto",
              lineHeight: 1.9,
              fontSize: "1.05rem",
            }}
          >
            Our talented designers, developers and digital strategists work
            together to build high-quality software solutions that help
            businesses innovate, scale, and succeed.
          </Typography>
        </Box>

        {/* Swiper */}

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          speed={900}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {TEAM.map((member) => (
            <SwiperSlide key={member.id}>
              <TeamCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};