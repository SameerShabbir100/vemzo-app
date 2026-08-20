"use client";

import { Box, Typography, Chip, Container, Grid } from "@mui/material";
import { Flag, Person, TagFaces, Work } from "@mui/icons-material";

import CounterCard from "../common/counter-card";

const cards = [
  {
    icon: Work,
    number: 50,
    suffix: "+",
    label: "Projects",
  },
  {
    icon: Person,
    number: 20,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Flag,
    number: 5,
    suffix: "+",
    label: "Countries Served",
  },
  {
    icon: TagFaces,
    number: 99,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function StatsSection() {
  return (
    // <Box
    //   component="section"
    //   sx={{
    //     px: { xs: 2, sm: 3.75, md: 6, lg: 8, xl: 16 },
    //     py: { xs: 10, sm: 15, lg: 20 },
    //     mx: "auto",
    //   }}
    // ></Box>
    <Container maxWidth="lg" sx={{ mt: { xs: 10, lg: 15 } }}>
      <Box sx={{ textAlign: "center" }}>
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-sm font-medium mb-5">
            Our Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Delivering Measurable Results That Drive
            <span className="text-[#00dc82]"> Business Growth</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
            We help startups and businesses turn ambitious ideas into scalable
            digital solutions. Every project is built with performance, quality,
            and long-term success in mind, delivering measurable results that
            make a real impact.
          </p>
        </div>
      </Box>
      <Grid
        container
        rowSpacing={{ xs: 2 }}
        columnSpacing={{ xs: 2, sm: 2, lg: 4, xl: 4.2 }}
      >
        {cards.map((card, index) => (
          <Grid key={index} size={{ xs: 6, md: 3 }} className="stagger-item">
            <CounterCard data={card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
