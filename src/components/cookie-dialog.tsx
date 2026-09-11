"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";

interface CookieDialogProps {
  openOnMount?: boolean;
}

export function CookieDialog({ openOnMount = true }: CookieDialogProps) {
  const [open, setOpen] = useState(openOnMount);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-cookie-dialog", handler);
    return () => window.removeEventListener("open-cookie-dialog", handler);
  }, []);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="We value your privacy"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(16,16,16,0.6)] p-4"
    >
      <div className="relative w-full max-w-md rounded-[8px] bg-white p-6 text-[#101010] lg:p-8">
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-[#101010]"
        >
          <Icon name="close" size={16} />
        </button>
        <h2 className="pr-8 text-[24px] font-bold leading-[1.2]">We value your privacy</h2>
        <p className="mt-4 text-[14px] leading-[1.5]">
          PMI WW Brands, LLC and/or our affiliates, as well as certain third parties (including our
          social media, advertising, and analytics partners), use cookies, pixels, tags, and other
          tracking technologies to enable site functionality and for business purposes, including to
          enhance user experience, provide personalized content, analyze performance and traffic on
          our website, and/or assist in our marketing efforts, such as to display personalized content
          and ads. Learn more in our{" "}
          <a href="https://www.stanley1913.com/policies/privacy-policy" className="underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-[4px] bg-[#101010] px-6 py-3 text-[14px] font-bold text-white"
          >
            Accept All Cookies
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-[4px] border border-[#101010] bg-transparent px-6 py-3 text-[14px] font-bold text-[#101010]"
          >
            Decline Non-Essential Cookies
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-[14px] font-normal text-[#101010] underline"
          >
            Manage Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
