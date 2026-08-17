"use client";

import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { FAQCard } from "../common/faq-card";

const FAQS = [
  {
    question: "What services do you provide?",
    answer:
      "We specialize in custom web applications, enterprise SaaS platforms, Shopify development, API integrations, UI/UX design.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We work with React, Next.js, Vue.js, Nuxt.js, Node.js, Express.js, MongoDB, PostgreSQL, Tailwind CSS, Material UI, and Shopify.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We provide maintenance, performance optimization, bug fixes, security updates, and new feature development after deployment.",
  },
  {
    question: "Can you build custom SaaS applications?",
    answer:
      "Absolutely. We build scalable SaaS platforms with authentication, dashboards, subscriptions, APIs, payment gateways, and cloud deployment.",
  },
  {
    question: "Do you integrate payment gateways?",
    answer:
      "Yes. We integrate Stripe, PayPal, and other secure payment gateways for subscriptions, one-time payments, and custom checkout flows.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on complexity. Simple websites typically take 1–3 weeks, while SaaS and enterprise applications can take several months.",
  },
];

export const FAQ = () => {
  const [expanded, setExpanded] = useState<number | false>(0);

  return (
    <Box
      component="section"
      id="faq"
      sx={{
        position: "relative",
        py: 12,
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(0,220,130,0.05), transparent 65%)",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              display: "inline-flex",
              px: 2,
              py: 1,
              borderRadius: "999px",
              bgcolor: "rgba(0,220,130,0.1)",
              border: "1px solid rgba(0,220,130,0.2)",
              color: "#00dc82",
              fontWeight: 500,
              fontSize: "0.875rem",
              mb: 3,
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: {
                xs: "2.2rem",
                md: "3rem",
              },
            }}
          >
            Everything You Need to
            <Box
              component="span"
              sx={{
                color: "#00dc82",
              }}
            >
              {" "}
              Know
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "grey.400",
              mt: 3,
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            Find answers to the most common questions about our services,
            technologies, development process, and ongoing support.
          </Typography>
        </Box>

        {/* FAQ List */}
        <Box>
          {FAQS.map((faq, index) => (
            <FAQCard
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              expanded={expanded === index}
              onChange={() =>
                setExpanded(expanded === index ? false : index)
              }
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};