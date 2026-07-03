"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Card,
  Box,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

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
    name: "Nabeel Khan",
    position: "Founder & CEO",
    image: "/team/team-1.jpg",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 2,
    name: "Ali Ahmed",
    position: "Full Stack Developer",
    image: "/team/team-2.jpg",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 3,
    name: "Fatima Noor",
    position: "UI / UX Designer",
    image: "/team/team-3.jpg",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 4,
    name: "Hassan Raza",
    position: "Project Manager",
    image: "/team/team-4.jpg",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 5,
    name: "Usman Tariq",
    position: "Frontend Developer",
    image: "/team/team-5.jpg",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    position: "Backend Developer",
    image: "/team/team-6.jpg",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
];

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <Card
      elevation={0}
      className="group"
      sx={{
        position: "relative",
        overflow: "hidden",
        height: 480,
        borderRadius: "24px",
        
        mt:2,
        mb:2,

        background: "#000",

        border: "1px solid rgba(0,220,130,.15)",

        transition: ".35s",

        "&:hover": {
          transform: "translateY(-10px)",
          borderColor: "#00dc82",
          boxShadow: "0 25px 50px rgba(0,220,130,.15)",
        },
      }}
    >
      {/* Image */}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          priority={false}
          style={{
            objectFit: "cover",
            transition: "transform .6s ease",
          }}
          className="group-hover:scale-110"
        />
      </Box>

      {/* Green Overlay */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background:
            "linear-gradient(to top, rgba(0,0,0,.95), rgba(0,220,130,.18), rgba(0,0,0,.05))",

          opacity: 0,

          transition: ".35s",

          ".group:hover &": {
            opacity: 1,
          },
        }}
      />

      {/* Social Icons */}

      <Stack
  direction="row"
  spacing={1}
  sx={{
    position: "absolute",

    left: "50%",
    bottom: 170, // Position above the info box

    transform: "translate(-50%, 30px)",

    opacity: 0,

    transition: "all .35s ease",

    zIndex: 5,

    ".group:hover &": {
      opacity: 1,
      transform: "translate(-50%, 0)",
    },
  }}
>
        <IconButton
          component={Link}
          href={member.facebook}
          sx={socialStyle}
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          component={Link}
          href={member.linkedin}
          sx={socialStyle}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          component={Link}
          href={member.twitter}
          sx={socialStyle}
        >
          <XIcon />
        </IconButton>

        <IconButton
          component={Link}
          href={member.instagram}
          sx={socialStyle}
        >
          <InstagramIcon />
        </IconButton>
      </Stack>

      {/* Bottom Glass Panel */}

      <Box
        sx={{
          position: "absolute",

          left: 20,

          right: 20,

          bottom: 20,

          p: 3,

          borderRadius: "18px",

          backdropFilter: "blur(16px)",

          background: "rgba(0,0,0,.55)",

          border: "1px solid rgba(255,255,255,.08)",

          transition: ".35s",

          ".group:hover &": {
            background: "rgba(0,0,0,.75)",
            borderColor: "rgba(0,220,130,.30)",
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            fontWeight: 700,
          }}
        >
          {member.name}
        </Typography>

        <Typography
          sx={{
            mt: .5,
            color: "#00dc82",
            fontWeight: 500,
          }}
        >
          {member.position}
        </Typography>
      </Box>

      {/* Hover Glow */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background:
            "radial-gradient(circle at top, rgba(0,220,130,.12), transparent 70%)",

          opacity: 0,

          transition: ".35s",

          pointerEvents: "none",

          ".group:hover &": {
            opacity: 1,
          },
        }}
      />
    </Card>
  );
};

const socialStyle = {
  width: 46,

  height: 46,

  bgcolor: "rgba(255,255,255,.15)",

  backdropFilter: "blur(10px)",

  color: "#fff",

  border: "1px solid rgba(255,255,255,.12)",

  transition: ".3s",

  "&:hover": {
    bgcolor: "#00dc82",
    color: "#000",
    transform: "translateY(-3px)",
  },
};