"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { ContactForm } from "../contact/contact-form";
import { ContactInfoCard } from "../contact/contact-info-card";

export const Contact = () => {
  return (
    <section
      className="relative flex flex-col items-center py-24 px-6 overflow-hidden"
      id="contact"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_70%)]" />

      {/* Hero */}
      <div className="text-center mb-16">
        <span className="inline-flex px-4 py-2 rounded-full border border-[rgba(0,220,130,0.2)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-sm font-medium mb-5">
          Let&apos;s Build Something Great Together
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Let&apos;s build
          <span className="text-[#00dc82]"> digital products</span>
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
          Whether you&apos;re  launching a startup, scaling your business, or
          modernizing your existing systems, our team is here to help.
          Tell us about your project, and Let&apos;s create something exceptional
          together.
        </p>
      </div>

      {/* Contact Content */}
      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-12">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <ContactInfoCard
            icon={<EmailOutlinedIcon sx={{ fontSize: 28 }} />}
            title="Email"
            value="info@vemzo.io"
          />

          <ContactInfoCard
            icon={<PhoneOutlinedIcon sx={{ fontSize: 28 }} />}
            title="Phone"
            value="+92 0000 000000"
          />

          <ContactInfoCard
            icon={<LocationOnOutlinedIcon sx={{ fontSize: 28 }} />}
            title="Location"
            value="Lahore, Pakistan"
          />
        </div>

        {/* Right */}
        <ContactForm />
      </div>
    </section>
  );
};