"use client";

import React, { useState, useRef, useEffect } from "react";
import { Box, Paper, IconButton, Typography, TextField, Button, Avatar, Fab, CircularProgress, Tooltip } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
  isAction?: boolean;
}

const PRESET_ANSWERS: Record<string, string> = {
  services: "We specialize in custom web applications, enterprise SaaS platforms, Shopify development, API integrations, and UI/UX design. What kind of digital product are you planning to build?",
  process: "Our workflow is split into 5 core phases:\n1. Requirement Gathering (defining scope)\n2. UI/UX Design (modern Figma prototypes)\n3. Agile Development (Next.js, Vue, Node.js)\n4. Testing & Optimization (95+ PageSpeed boost)\n5. Cloud Deployment (Vercel, AWS, Cloudflare)\n\nThis ensures rapid delivery in 8 to 21 days depending on package choice.",
  pricing: "We offer fixed-scope, transparent pricing packages:\n\n• Shopify Custom Store: $950 (PKR 266,000)\n• MERN / MEVN Web App: $1,100 - $1,200\n• Custom HRM / CRM: $1,400 - $1,800\n• Shopify App: $1,600 (PKR 448,000)\n• LMS Platforms: $1,900 (PKR 532,000)\n• POS Systems: $2,100 (PKR 588,000)\n• Custom SaaS Build: From $2,200 (PKR 616,000)\n\nAll packages include a flat, one-time price with no hidden costs. You can calculate a detailed custom quote using our [Online Project Estimator](#project-estimator) or book a quick call!",
  book: "You can book a 15-minute discovery call directly with our team! [Click here to open Calendly](https://calendly.com/vemzo) or choose a time that works best for you.",
  support: "Yes! We provide full maintenance, performance optimization, bug fixes, security updates, and new feature development after your project is deployed.",
  payments: "Yes, we integrate Stripe, PayPal, and other secure payment gateways for subscriptions, recurring billing, one-time payments, and custom checkout flows.",
  contact: "You can reach us through multiple channels:\n\n📧 Email: info@vemzo.io\n📞 Phone/WhatsApp: +92 304 5421167\n📍 Address: 432 Jade Ext. St 5, Park View City Lahore, Pakistan\n\nOr click on the WhatsApp button on the bottom left to chat instantly!",
  location: "Our physical headquarters is located at:\n📍 432 Jade Ext. St 5, Park View City Lahore, Pakistan.\n\nHowever, we serve clients globally across USA, UK, Europe, and the Middle East online.",
  policies: "Here are links to our official business policy pages:\n\n• [Privacy Policy](/privacy-policy)\n• [Terms & Conditions](/terms-and-conditions)\n• [Refund & Return Policy](/refund-policy)\n• [Service Delivery Policy](/service-delivery-policy)\n\nFeel free to review them, or ask me any questions about our delivery guarantees!",
  default: "Thanks for reaching out! I'm the Vemzo AI Assistant. You can ask me about our 'services', 'pricing', 'payment integration', 'post-launch support', 'contact details', 'policies', or how to 'book a call'. Alternatively, leave your email below!"
};

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi! Welcome to Vemzo. 👋 I'm your AI Assistant. How can I help you build your digital product today?",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSuggest = (key: string) => {
    handleSend(PRESET_ANSWERS[key] || PRESET_ANSWERS.default, true);
  };

  const handleSend = (textToSend?: string, isPreset: boolean = false) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    if (!isPreset) {
      setMessages((prev) => [
        ...prev,
        { sender: "user", text, timestamp: new Date() },
      ]);
      setInput("");
      setIsTyping(true);

      // Simulate bot processing/typing response
      setTimeout(() => {
        setIsTyping(false);
        let responseText = PRESET_ANSWERS.default;

        const lowerText = text.toLowerCase();
        if (lowerText.includes("service") || lowerText.includes("build") || lowerText.includes("develop")) {
          responseText = PRESET_ANSWERS.services;
        } else if (lowerText.includes("process") || lowerText.includes("workflow") || lowerText.includes("how you work")) {
          responseText = PRESET_ANSWERS.process;
        } else if (lowerText.includes("pricing") || lowerText.includes("cost") || lowerText.includes("how much") || lowerText.includes("quote") || lowerText.includes("estimate") || lowerText.includes("calculator") || lowerText.includes("scope")) {
          responseText = PRESET_ANSWERS.pricing;
        } else if (lowerText.includes("book") || lowerText.includes("call") || lowerText.includes("meeting") || lowerText.includes("calendly")) {
          responseText = PRESET_ANSWERS.book;
        } else if (lowerText.includes("support") || lowerText.includes("maintenance") || lowerText.includes("after launch")) {
          responseText = PRESET_ANSWERS.support;
        } else if (lowerText.includes("payment") || lowerText.includes("stripe") || lowerText.includes("paypal") || lowerText.includes("gateway")) {
          responseText = PRESET_ANSWERS.payments;
        } else if (lowerText.includes("time") || lowerText.includes("long") || lowerText.includes("duration") || lowerText.includes("day") || lowerText.includes("week")) {
          responseText = PRESET_ANSWERS.process;
        } else if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("phone") || lowerText.includes("whatsapp") || lowerText.includes("reach")) {
          responseText = PRESET_ANSWERS.contact;
        } else if (lowerText.includes("location") || lowerText.includes("address") || lowerText.includes("office") || lowerText.includes("where")) {
          responseText = PRESET_ANSWERS.location;
        } else if (lowerText.includes("policy") || lowerText.includes("privacy") || lowerText.includes("terms") || lowerText.includes("refund") || lowerText.includes("return") || lowerText.includes("delivery")) {
          responseText = PRESET_ANSWERS.policies;
        } else if (lowerText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)) {
          responseText = "Perfect! I've captured your email. Our team will review your conversation history and reach out to you shortly.";
        }

        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: responseText, timestamp: new Date() },
        ]);
      }, 1200);
    } else {
      // Simulate preset message click flow
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text, timestamp: new Date() },
        ]);
      }, 800);
    }
  };

  const renderMessageText = (text: string) => {
    // Basic Markdown Link rendering for Calendly link
    const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = markdownLinkRegex.exec(text)) !== null) {
      const precedingText = text.substring(lastIndex, match.index);
      if (precedingText) {
        parts.push(precedingText);
      }
      const linkText = match[1];
      const linkUrl = match[2];
      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00dc82] underline font-semibold hover:text-[#00ff9d]"
        >
          {linkText}
        </a>
      );
      lastIndex = markdownLinkRegex.lastIndex;
    }

    const remainingText = text.substring(lastIndex);
    if (remainingText) {
      parts.push(remainingText);
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <Box sx={{ position: "fixed", bottom: { xs: 20, sm: 28 }, right: { xs: 20, sm: 28 }, zIndex: 10000 }}>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Tooltip title="AI Assistant" placement="left" arrow disableTouchListener>
          <Fab
            onClick={() => setIsOpen(true)}
            sx={{
              width: 56,
              height: 56,
              bgcolor: "#00dc82",
              color: "#080c14",
              boxShadow: "0 8px 30px rgba(0,220,130,0.4)",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#00ff9d",
                transform: "scale(1.08) rotate(5deg)",
              },
            }}
          >
            <ChatIcon />
          </Fab>
        </Tooltip>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <Paper
          elevation={12}
          sx={{
            width: { xs: "295px", sm: "380px" },
            maxWidth: "100%",
            height: { xs: "440px", sm: "500px" },
            maxHeight: "80vh",
            borderRadius: "24px",
            border: "1px solid rgba(0,220,130,0.15)",
            background: "linear-gradient(135deg, #05080f 0%, #0c101d 100%)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 15px 50px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2.5,
              borderBottom: "1px solid rgba(0,220,130,0.1)",
              background: "rgba(0,220,130,0.03)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar sx={{ bgcolor: "#00dc82", width: 36, height: 36 }}>
                <SmartToyIcon sx={{ color: "#080c14", fontSize: 20 }} />
              </Avatar>
              <Box>
                <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem" }}>
                  Vemzo Assistant
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#00dc82", animation: "pulse 1.5s infinite" }} />
                  <Typography sx={{ color: "#00dc82", fontSize: "0.75rem", fontWeight: 500 }}>
                    Online
                  </Typography>
                </Box>
              </Box>
            </Box>
            <IconButton onClick={() => setIsOpen(false)} sx={{ color: "grey.400", "&:hover": { color: "#ffffff" } }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Messages Body */}
          <Box
            sx={{
              flexGrow: 1,
              p: 2.5,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              "&::-webkit-scrollbar": { width: "6px" },
              "&::-webkit-scrollbar-thumb": { bgcolor: "rgba(255,255,255,0.08)", borderRadius: "4px" },
            }}
          >
            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  gap: 1.5,
                  maxWidth: "85%",
                }}
              >
                {msg.sender === "bot" && (
                  <Avatar sx={{ width: 28, height: 28, bgcolor: "rgba(0,220,130,0.1)", border: "1px solid rgba(0,220,130,0.2)" }}>
                    <SmartToyIcon sx={{ color: "#00dc82", fontSize: 16 }} />
                  </Avatar>
                )}

                <Box
                  sx={{
                    p: 2,
                    borderRadius: msg.sender === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                    bgcolor: msg.sender === "user" ? "#00dc82" : "rgba(255,255,255,0.03)",
                    border: msg.sender === "user" ? "none" : "1px solid rgba(255,255,255,0.05)",
                    color: msg.sender === "user" ? "#080c14" : "#e2e8f0",
                  }}
                >
                  <Typography sx={{ fontSize: "0.875rem", lineHeight: 1.5, fontWeight: msg.sender === "user" ? 500 : 400 }}>
                    {renderMessageText(msg.text)}
                  </Typography>
                </Box>
              </Box>
            ))}

            {isTyping && (
              <Box sx={{ display: "flex", alignSelf: "flex-start", gap: 1.5, alignItems: "center" }}>
                <Avatar sx={{ width: 28, height: 28, bgcolor: "rgba(0,220,130,0.1)" }}>
                  <SmartToyIcon sx={{ color: "#00dc82", fontSize: 16 }} />
                </Avatar>
                <Box sx={{ p: 1.5, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center" }}>
                  <CircularProgress size={16} sx={{ color: "#00dc82" }} />
                </Box>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          {/* Quick Preset Buttons */}
          <Box
            sx={{
              px: 2.5,
              pb: 1.5,
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="outlined"
              size="small"
              onClick={() => handleSuggest("services")}
              sx={{
                borderRadius: "20px",
                borderColor: "rgba(0,220,130,0.25)",
                color: "#00dc82",
                fontSize: "0.75rem",
                textTransform: "none",
                "&:hover": { borderColor: "#00dc82", bgcolor: "rgba(0,220,130,0.05)" },
              }}
            >
              💼 Services
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={() => handleSuggest("pricing")}
              sx={{
                borderRadius: "20px",
                borderColor: "rgba(0,220,130,0.25)",
                color: "#00dc82",
                fontSize: "0.75rem",
                textTransform: "none",
                "&:hover": { borderColor: "#00dc82", bgcolor: "rgba(0,220,130,0.05)" },
              }}
            >
              💰 Pricing
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={() => handleSuggest("book")}
              sx={{
                borderRadius: "20px",
                borderColor: "rgba(0,220,130,0.25)",
                color: "#00dc82",
                fontSize: "0.75rem",
                textTransform: "none",
                "&:hover": { borderColor: "#00dc82", bgcolor: "rgba(0,220,130,0.05)" },
              }}
            >
              📅 Book Meeting
            </Button>
          </Box>

          {/* Input Footer */}
          <Box
            sx={{
              p: 2,
              borderTop: "1px solid rgba(0,220,130,0.1)",
              bgcolor: "rgba(0,220,130,0.01)",
              display: "flex",
              gap: 1.5,
              alignItems: "center",
            }}
          >
            <TextField
              placeholder="Ask me anything..."
              variant="standard"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  style: { color: "#ffffff", fontSize: "0.9rem" },
                }
              }}
              sx={{
                flexGrow: 1,
                bgcolor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "30px",
                px: 2.5,
                py: 1,
              }}
            />
            <IconButton
              onClick={() => handleSend()}
              disabled={!input.trim()}
              sx={{
                bgcolor: input.trim() ? "#00dc82" : "rgba(255,255,255,0.05)",
                color: input.trim() ? "#080c14" : "grey.600",
                "&:hover": { bgcolor: "#00ff9d" },
                width: 40,
                height: 40,
                transition: "all 0.3s ease",
              }}
            >
              <SendIcon fontSize="small" />
            </IconButton>
          </Box>
        </Paper>
      )}
    </Box>
  );
};
