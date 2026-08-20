"use client";

import React, { useState, useMemo } from "react";
import { Box, Container, Typography, Grid, Paper, Checkbox, TextField, Button, Stepper, Step, StepLabel, Slider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SendIcon from "@mui/icons-material/Send";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";

const PROJECT_TYPES = [
  { id: "saas", name: "Custom SaaS Application", basePrice: 2200, baseDays: 14, icon: "🚀", desc: "Multi-tenant platforms with user onboarding, subscriptions, and billing engines." },
  { id: "crm", name: "Custom CRM System", basePrice: 1800, baseDays: 8, icon: "📊", desc: "Turnkey pipeline management, lead conversion trackers, and activity timelines." },
  { id: "shopify-store", name: "Shopify Custom Store", basePrice: 950, baseDays: 7, icon: "🛍️", desc: "Highly optimized custom-branded e-commerce storefronts built to convert." },
  { id: "shopify-app", name: "Shopify App Development", basePrice: 1600, baseDays: 10, icon: "🏪", desc: "Embeddable store dashboards, background queue syncs, and custom admin extensions." },
  { id: "pos", name: "Custom POS System", basePrice: 2100, baseDays: 10, icon: "🖨️", desc: "Real-time POS software with invoice print formatting and local receipt tracking." },
  { id: "lms", name: "LMS Learning Platform", basePrice: 1900, baseDays: 12, icon: "🎓", desc: "Online course managers, interactive student portals, and PDF certificate builders." },
];

const ADDONS = [
  { id: "auth", name: "Advanced Authentication & RBAC", price: 200, days: 2, category: "Security", desc: "Role-based access permissions, SSO, and OAuth integration." },
  { id: "stripe", name: "Stripe Recurring Billing & Subscriptions", price: 300, days: 3, category: "Payments", desc: "Secure multi-tier checkout, webhook listeners, and invoices." },
  { id: "realtime", name: "Socket.io Live Chat & WebSockets", price: 250, days: 3, category: "Core Features", desc: "Instant messages, online presence states, and notifications." },
  { id: "ai", name: "GPT-4 AI Merchant / Assistant", price: 350, days: 3, category: "Artificial Intelligence", desc: "Custom AI recommendations, support bot workflows, and automated text generators." },
  { id: "analytics", name: "Interactive Charts & BI Analytics", price: 200, days: 2, category: "Data Science", desc: "Visual data reporting dashboards, PDF and CSV table exporting." },
  { id: "whatsapp", name: "WhatsApp Business API Receipts", price: 250, days: 2, category: "Notifications", desc: "Autosend invoice PDFs directly to client mobile chat channels." },
];

export const ProjectEstimator = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedType, setSelectedType] = useState("saas");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [pagesCount, setPagesCount] = useState(5);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadNotes, setLeadNotes] = useState("");

  const steps = ["Configure Base", "Select Integrations", "Final Quote"];

  const currentTypeData = useMemo(() => {
    return PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
  }, [selectedType]);

  const pricingCalculations = useMemo(() => {
    let total = currentTypeData.basePrice;
    let days = currentTypeData.baseDays;

    selectedAddons.forEach((addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId);
      if (addon) {
        total += addon.price;
        days += addon.days;
      }
    });

    if (pagesCount > 5) {
      total += (pagesCount - 5) * 50;
      days += Math.ceil((pagesCount - 5) / 3);
    }

    return {
      usd: total,
      pkr: total * 280,
      days,
    };
  }, [currentTypeData, selectedAddons, pagesCount]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const addonNames = selectedAddons.map(id => ADDONS.find(a => a.id === id)?.name).join(", ") || "None";
    const mailSubject = encodeURIComponent("Vemzo Estimate Inquiry: " + currentTypeData.name);
    const mailBody = encodeURIComponent(
      `Hi Vemzo Technologies,\n\n` +
      `I've built a project estimate using the online scope builder. Details are below:\n\n` +
      `👤 Client Name: ${leadName}\n` +
      `📧 Client Email: ${leadEmail}\n` +
      `📦 Project Blueprint: ${currentTypeData.name}\n` +
      `📄 Target Page Count: ${pagesCount} Pages\n` +
      `🔌 Selected Add-ons: ${addonNames}\n` +
      `💰 Estimated Budget: $${pricingCalculations.usd} (PKR ${pricingCalculations.pkr.toLocaleString()})\n` +
      `⏱️ Estimated Duration: ${pricingCalculations.days} Days\n\n` +
      `📝 Custom Requirements:\n${leadNotes}\n\n` +
      `Please contact me to discuss further.`
    );

    window.open(`mailto:info@vemzo.io?subject=${mailSubject}&body=${mailBody}`);
  };

  return (
    <section id="project-estimator" className="relative py-28 px-6 overflow-hidden">
      {/* Background glowing effects */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0,220,130,0.06) 0%, transparent 60%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" className="relative z-10">
        {/* Header Block */}
        <div className="text-center mb-20">
          <span className="inline-flex px-5 py-2.5 rounded-full border border-[rgba(0,220,130,0.25)] bg-[rgba(0,220,130,0.05)] text-[#00dc82] text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md">
            Interactive Scope Builder
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none mb-6">
            Estimate Your Custom Product
            <span className="block mt-2 text-[#00dc82] bg-gradient-to-r from-[#00dc82] to-[#3ef8b1] bg-clip-text text-transparent">In Real-Time</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg sm:text-xl leading-relaxed">
            Construct your development scope, pick custom modules, and calculate transparent costs instantly.
          </p>
        </div>

        <Grid container spacing={5}>
          {/* Left Configuration Panel */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: "28px",
                border: "1px solid rgba(0,220,130,0.15)",
                background: "linear-gradient(145deg, rgba(8,12,20,0.95) 0%, rgba(4,6,10,0.95) 100%)",
                backdropFilter: "blur(16px)",
                p: { xs: 3, md: 6 },
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                minHeight: "550px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Stepper Header */}
              <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 8 }}>
                {steps.map((label, idx) => (
                  <Step key={label}>
                    <StepLabel
                      slotProps={{
                        stepIcon: {
                          sx: {
                            "&.Mui-active": { color: "#00dc82", transform: "scale(1.2)" },
                            "&.Mui-completed": { color: "#00dc82" },
                            color: "rgba(255,255,255,0.15)",
                          },
                        },
                      }}
                    >
                      <span className={`font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300 ${activeStep >= idx ? "text-[#00dc82]" : "text-gray-500"}`}>
                        {label}
                      </span>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>

              {/* Step Contents */}
              <Box sx={{ flexGrow: 1, mb: 4 }}>
                {/* Step 1: Config Base templates */}
                {activeStep === 0 && (
                  <Box>
                    <Typography variant="h5" className="text-white font-extrabold mb-2 tracking-tight">
                      1. Choose Base Engine
                    </Typography>
                    <Typography className="text-gray-400 text-sm mb-6">
                      Select the primary framework for your core business product.
                    </Typography>

                    <Grid container spacing={3}>
                      {PROJECT_TYPES.map((type) => {
                        const isSelected = selectedType === type.id;
                        return (
                          <Grid size={{xs: 12, sm: 6}} key={type.id} sx={{ display: "flex" }}>
                            <Paper
                              onClick={() => setSelectedType(type.id)}
                              elevation={0}
                              sx={{
                                p: 3.5,
                                borderRadius: "20px",
                                border: "1.5px solid",
                                borderColor: isSelected ? "#00dc82" : "rgba(255,255,255,0.06)",
                                bgcolor: isSelected ? "rgba(0,220,130,0.05)" : "transparent",
                                cursor: "pointer",
                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                boxShadow: isSelected ? "0 8px 30px rgba(0,220,130,0.08)" : "none",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                "&:hover": {
                                  borderColor: "#00dc82",
                                  transform: "translateY(-3px)",
                                },
                              }}
                            >
                              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                  <Box sx={{ width: 44, height: 44, borderRadius: "12px", bgcolor: isSelected ? "#00dc82" : "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                                    {type.icon}
                                  </Box>
                                  <Typography className="text-white font-bold text-lg">
                                    {type.name}
                                  </Typography>
                                </Box>
                                {isSelected && <CheckCircleIcon className="text-[#00dc82] ml-auto" />}
                              </Box>
                              <Typography className="text-gray-400 text-sm leading-relaxed">
                                {type.desc}
                              </Typography>
                            </Paper>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                )}

                {/* Step 2: Custom Integrations Selection */}
                {activeStep === 1 && (
                  <Box>
                    <Typography variant="h5" className="text-white font-extrabold mb-2 tracking-tight">
                      2. Add Integrations & Page Scope
                    </Typography>
                    <Typography className="text-gray-400 text-sm mb-8">
                      Fully configure backend APIs and expected frontend page quantities.
                    </Typography>

                    {/* Page Range Slider Box */}
                    <Box sx={{ p: 4, borderRadius: "20px", border: "1px solid rgba(255,255,255,0.06)", bgcolor: "rgba(255,255,255,0.01)", mb: 5 }}>
                      <Typography className="text-white font-bold text-md mb-2">
                        Total Interface Layouts: <span className="text-[#00dc82] text-lg font-black ml-1">{pagesCount} Pages</span>
                      </Typography>
                      <Slider
                        value={pagesCount}
                        onChange={(_, val) => setPagesCount(val as number)}
                        min={1}
                        max={30}
                        step={1}
                        sx={{
                          color: "#00dc82",
                          height: 8,
                          "& .MuiSlider-thumb": {
                            width: 20,
                            height: 20,
                            backgroundColor: "#00dc82",
                            border: "3px solid #fff",
                            boxShadow: "0 0 15px rgba(0,220,130,0.6)",
                          },
                        }}
                      />
                    </Box>

                    {/* Feature Addons Grid */}
                    <Grid container spacing={3}>
                      {ADDONS.map((addon) => {
                        const isAdded = selectedAddons.includes(addon.id);
                        return (
                          <Grid size={{xs: 12, sm: 6}} key={addon.id} sx={{ display: "flex" }}>
                            <Paper
                              onClick={() => toggleAddon(addon.id)}
                              elevation={0}
                              sx={{
                                p: 3,
                                borderRadius: "20px",
                                border: "1.5px solid",
                                borderColor: isAdded ? "#00dc82" : "rgba(255,255,255,0.06)",
                                bgcolor: isAdded ? "rgba(0,220,130,0.04)" : "transparent",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%",
                                width: "100%",
                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                "&:hover": {
                                  borderColor: "#00dc82",
                                },
                              }}
                            >
                              <Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
                                  <span className="text-xs text-[#00dc82] font-extrabold uppercase tracking-widest bg-[rgba(0,220,130,0.08)] px-2.5 py-1 rounded-md">
                                    {addon.category}
                                  </span>
                                  <Typography className="text-[#00dc82] font-black text-lg">
                                    +${addon.price}
                                  </Typography>
                                </Box>

                                <Typography className="text-white font-bold text-md mb-1">
                                  {addon.name}
                                </Typography>
                                <Typography className="text-gray-400 text-xs leading-relaxed">
                                  {addon.desc}
                                </Typography>
                              </Box>
                            </Paper>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                )}

                {/* Step 3: Contact Details & Submit */}
                {activeStep === 2 && (
                  <Box component="form" onSubmit={handleSubmit}>
                    <Typography variant="h5" className="text-white font-extrabold mb-2 tracking-tight">
                      3. Secure Your Project Blueprint
                    </Typography>
                    <Typography className="text-gray-400 text-sm mb-8">
                      Leave your details so we can compile your custom package structure and reach out.
                    </Typography>

                    <Grid container spacing={4}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Full Name"
                          variant="outlined"
                          fullWidth
                          required
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          slotProps={{
                            inputLabel: { style: { color: "#888" } },
                            input: { style: { color: "#fff", fontWeight: 500 } },
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "16px",
                              "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
                              "&:hover fieldset": { borderColor: "#00dc82" },
                              "&.Mui-focused fieldset": { borderColor: "#00dc82" },
                              bgcolor: "rgba(255,255,255,0.01)",
                            },
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Email Address"
                          variant="outlined"
                          type="email"
                          fullWidth
                          required
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          slotProps={{
                            inputLabel: { style: { color: "#888" } },
                            input: { style: { color: "#fff", fontWeight: 500 } },
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "16px",
                              "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
                              "&:hover fieldset": { borderColor: "#00dc82" },
                              "&.Mui-focused fieldset": { borderColor: "#00dc82" },
                              bgcolor: "rgba(255,255,255,0.01)",
                            },
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          label="Message / Custom Requirements Note"
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={5}
                          value={leadNotes}
                          onChange={(e) => setLeadNotes(e.target.value)}
                          slotProps={{
                            inputLabel: { style: { color: "#888" } },
                            input: { style: { color: "#fff", lineHeight: 1.6 } },
                          }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "20px",
                              "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
                              "&:hover fieldset": { borderColor: "#00dc82" },
                              "&.Mui-focused fieldset": { borderColor: "#00dc82" },
                              bgcolor: "rgba(255,255,255,0.01)",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                )}
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 6, pt: 4, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  startIcon={<ArrowBackIcon />}
                  sx={{
                    color: "grey.400",
                    "&.Mui-disabled": { color: "grey.800" },
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Back
                </Button>

                {activeStep < 2 ? (
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: "#00dc82",
                      color: "#080c14",
                      fontWeight: 800,
                      px: 4,
                      py: 1.5,
                      borderRadius: "30px",
                      textTransform: "none",
                      boxShadow: "0 5px 20px rgba(0,220,130,0.3)",
                      "&:hover": { bgcolor: "#00ff9d" },
                    }}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    disabled={!leadName.trim() || !leadEmail.trim()}
                    endIcon={<SendIcon />}
                    sx={{
                      bgcolor: "#00dc82",
                      color: "#080c14",
                      fontWeight: 800,
                      px: 5,
                      py: 1.75,
                      borderRadius: "30px",
                      textTransform: "none",
                      boxShadow: "0 5px 20px rgba(0,220,130,0.3)",
                      "&:hover": { bgcolor: "#00ff9d" },
                      "&.Mui-disabled": { bgcolor: "rgba(255,255,255,0.04)", color: "grey.700" },
                    }}
                  >
                    Submit Scope Inquiry
                  </Button>
                )}
              </Box>
            </Paper>
          </Grid>

          {/* Right Summary Panel */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: "28px",
                border: "1.5px solid rgba(0,220,130,0.35)",
                background: "linear-gradient(135deg, rgba(4,6,10,0.95) 0%, rgba(8,12,20,0.95) 100%)",
                p: 5,
                position: "sticky",
                top: "120px",
                boxShadow: "0 15px 40px rgba(0,220,130,0.06)",
              }}
            >
              <Typography className="text-gray-400 text-xs font-black uppercase tracking-widest mb-2">
                Estimate Summary
              </Typography>
              <Typography variant="h4" className="text-white font-extrabold tracking-tight mb-6">
                {currentTypeData.name}
              </Typography>

              <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.08)", pb: 4, mb: 4 }}>
                <Typography className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1.5">
                  Calculated Cost
                </Typography>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">${pricingCalculations.usd}</span>
                  <span className="text-gray-500 text-sm font-bold">USD</span>
                </div>
                <Typography className="text-[#00dc82] text-sm font-bold mt-2">
                  🇵🇰 PKR {pricingCalculations.pkr.toLocaleString()} (approx)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Delivery Timeline</span>
                  <span className="text-white font-black text-md bg-white/5 px-3 py-1 rounded-lg">
                    {pricingCalculations.days} Days
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Design Page Scope</span>
                  <span className="text-white font-black text-md bg-white/5 px-3 py-1 rounded-lg">
                    {pagesCount} Pages
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-gray-400 text-sm">Custom Add-Ons Selected:</span>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {selectedAddons.length > 0 ? (
                      selectedAddons.map((id) => (
                        <span key={id} className="text-xs bg-[rgba(0,220,130,0.1)] text-[#00dc82] px-2.5 py-1 rounded-full font-semibold">
                          {ADDONS.find(a => a.id === id)?.name.split(" ")[0]}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 text-xs italic">No add-ons selected</span>
                    )}
                  </Box>
                </div>
              </Box>

              {/* Badges and guarantees */}
              <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: 2 }}>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon sx={{ color: "#00dc82", fontSize: 20 }} />
                  <span className="text-gray-300 text-sm font-medium">100% Codebase Ownership Transfer</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon sx={{ color: "#00dc82", fontSize: 20 }} />
                  <span className="text-gray-300 text-sm font-medium">Post-Launch Support Period</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon sx={{ color: "#00dc82", fontSize: 20 }} />
                  <span className="text-gray-300 text-sm font-medium">Stripe Payments Ready Setup</span>
                </div>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
