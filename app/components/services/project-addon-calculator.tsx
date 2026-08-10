"use client";

import { useState } from "react";
import Link from "next/link";
import { AddOnPackage } from "@/constants/project-details";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutlined";
import CalculateIcon from "@mui/icons-material/Calculate";

interface ProjectAddOnCalculatorProps {
  projectTitle: string;
  basePrice: number;
  addOns: AddOnPackage[];
}

export const ProjectAddOnCalculator = ({
  projectTitle,
  basePrice,
  addOns,
}: ProjectAddOnCalculatorProps) => {
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const [customNote, setCustomNote] = useState<string>("");

  const toggleAddOn = (id: string) => {
    if (selectedAddOnIds.includes(id)) {
      setSelectedAddOnIds(selectedAddOnIds.filter((item) => item !== id));
    } else {
      setSelectedAddOnIds([...selectedAddOnIds, id]);
    }
  };

  const selectedPackages = addOns.filter((pkg) =>
    selectedAddOnIds.includes(pkg.id)
  );

  const addOnsTotal = selectedPackages.reduce(
    (sum, pkg) => sum + pkg.price,
    0
  );

  const finalTotal = basePrice + addOnsTotal;

  const formattedAddOnNames = selectedPackages.length
    ? selectedPackages.map((p) => `${p.title} (+$${p.price})`).join(", ")
    : "None (Base Package Only)";

  const formattedCustomNote = customNote.trim()
    ? ` | Custom Requirements: "${customNote.trim()}"`
    : "";

  const whatsappMessage = encodeURIComponent(
    `Hi Vemzo Technologies! I am placing an order for:\n` +
      `📦 Package: ${projectTitle} ($${basePrice})\n` +
      `➕ Selected Add-Ons: ${formattedAddOnNames}\n` +
      `💰 Estimated Total Price: $${finalTotal}${formattedCustomNote}\n\n` +
      `Please confirm order details and delivery timeline.`
  );

  return (
    <div className="rounded-3xl border border-[rgba(0,220,130,0.3)] bg-[radial-gradient(ellipse_at_top,rgba(0,220,130,0.08),transparent_80%)] p-6 sm:p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(0,220,130,0.3)] bg-[rgba(0,220,130,0.1)] text-[#00dc82] text-xs font-bold mb-2">
            <CalculateIcon sx={{ fontSize: 16 }} />
            Interactive Customization & Pricing Calculator
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Optional Add-On Packages & <span className="text-[#00dc82]">Custom Features</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Click on any add-on packages below to customize your project order in real time.
          </p>
        </div>

        {/* Live Total Counter */}
        <div className="bg-[#09090b] border border-[rgba(0,220,130,0.4)] rounded-2xl p-4 text-right shrink-0">
          <div className="text-xs text-gray-400 uppercase font-semibold">Total Custom Estimate</div>
          <div className="text-3xl font-black text-[#00dc82] mt-0.5">${finalTotal}</div>
          <div className="text-[11px] text-gray-500">Base ${basePrice} + ${addOnsTotal} Add-Ons</div>
        </div>
      </div>

      {/* Add-On Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {addOns.map((pkg) => {
          const isSelected = selectedAddOnIds.includes(pkg.id);

          return (
            <div
              key={pkg.id}
              onClick={() => toggleAddOn(pkg.id)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all relative flex flex-col justify-between select-none ${
                isSelected
                  ? "bg-[#00dc821f] border-[#00dc82] shadow-[0_0_20px_rgba(0,220,130,0.2)]"
                  : "bg-[#09090b] border-gray-800 hover:border-gray-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-bold text-sm text-white flex items-center gap-2">
                    {isSelected ? (
                      <CheckCircleIcon sx={{ fontSize: 18 }} className="text-[#00dc82]" />
                    ) : (
                      <AddCircleOutlineIcon sx={{ fontSize: 18 }} className="text-gray-500" />
                    )}
                    {pkg.title}
                  </span>
                  {pkg.badge && (
                    <span className="text-[10px] font-bold uppercase bg-[#00dc82] text-black px-2 py-0.5 rounded-full shrink-0">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  {pkg.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-800/60 text-xs">
                <span className="text-gray-400">Add-On Price:</span>
                <span className={`font-bold text-sm ${isSelected ? "text-[#00dc82]" : "text-white"}`}>
                  +${pkg.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Feature Notes Request */}
      <div className="mb-8 bg-[#09090b] border border-gray-800 rounded-2xl p-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
          Want something completely custom? Describe your feature request below:
        </label>
        <textarea
          rows={3}
          value={customNote}
          onChange={(e) => setCustomNote(e.target.value)}
          placeholder="e.g. I need custom API integration with my ERP system, multi-language support, and custom loyalty rewards program..."
          className="w-full bg-black border border-gray-800 rounded-xl p-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00dc82] transition-all resize-none"
        />
      </div>

      {/* Order Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#09090b] border border-[rgba(0,220,130,0.3)] rounded-2xl p-6">
        <div>
          <div className="text-sm font-bold text-white mb-1">
            Selected Summary: <span className="text-[#00dc82]">{selectedPackages.length} Add-Ons Selected</span>
          </div>
          <div className="text-xs text-gray-400">
            Total Package Cost: <span className="text-white font-bold">${finalTotal}</span> (Base ${basePrice} + ${addOnsTotal})
          </div>
        </div>

        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <a
            href={`https://wa.me/923045421167?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#00dc82] hover:bg-[#00c675] text-black font-bold text-sm transition-all shadow-lg hover:shadow-[0_0_25px_rgba(0,220,130,0.4)]"
          >
            <WhatsAppIcon sx={{ fontSize: 20 }} />
            Order Custom Package (${finalTotal})
          </a>

          <Link
            href="/contact"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-transparent border border-gray-700 hover:border-[#00dc82] hover:text-[#00dc82] text-white font-semibold text-sm transition-all"
          >
            Submit Custom Brief
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Link>
        </div>
      </div>
    </div>
  );
};
