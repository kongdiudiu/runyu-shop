"use client";

import { useState } from "react";
import { Icon, type IconName } from "@/components/icons";

interface FooterLink {
  label: string;
  href: string;
  updated?: boolean;
}

const COMPANY_LINKS: FooterLink[] = [
  { label: "About Stanley 1913", href: "/pages/about" },
  { label: "Careers", href: "/pages/careers" },
  { label: "Newsroom", href: "/pages/newsroom" },
  { label: "Stanley 1913 Creators Fund", href: "/pages/stanley-1913-creators-fund" },
  { label: "Sustainability", href: "/pages/sustainability" },
  { label: "Take Back Program", href: "/pages/take-back-program" },
  { label: "Blogs", href: "/pages/blogs" },
  { label: "Affiliate Program", href: "/pages/affiliate-program" },
  { label: "Stanley 1913 Club Loyalty Program", href: "/pages/stanley-1913-club-loyalty-program" },
  { label: "Site Map", href: "/pages/sitemap" },
];

const SUPPORT_LINKS: FooterLink[] = [
  { label: "FAQ", href: "/pages/faq" },
  { label: "Contact Us", href: "/pages/contact" },
  { label: "Returns", href: "/pages/returns" },
  { label: "Stainless-Steel Warranty Policy", href: "/pages/stainless-steel-warranty-policy" },
  { label: "Product Recalls", href: "/pages/product-recalls" },
  { label: "Soft Goods Warranty Policy", href: "/pages/soft-goods-warranty-policy" },
  { label: "Find a Retail Store", href: "/pages/find-a-retail-store" },
  { label: "Order Tracking", href: "/pages/order-tracking" },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Terms of Sale", href: "/pages/terms-of-sale", updated: true },
  { label: "Terms of Service", href: "/pages/terms-of-service", updated: true },
  { label: "Privacy Policy", href: "/pages/privacy-policy", updated: true },
  { label: "Your Privacy Choices", href: "/pages/your-privacy-choices" },
  { label: "Responsible Supply Chain Statement", href: "/pages/responsible-supply-chain-statement" },
  { label: "Patent Information", href: "/pages/patent-information" },
];

const HELP_LINKS: FooterLink[] = [
  { label: "Track My Order", href: "/pages/order-tracking" },
  { label: "Start A Return", href: "https://www.stanley1913.com/apps/returns" },
  { label: "Contact Us", href: "/pages/contact" },
];

const SOCIALS: { name: IconName; href: string; label: string }[] = [
  { name: "social-facebook", href: "https://www.facebook.com/Stanley1913/", label: "Facebook" },
  { name: "social-instagram", href: "https://www.instagram.com/stanley1913_brand/", label: "Instagram" },
  { name: "social-youtube", href: "https://www.youtube.com/@Stanley1913", label: "YouTube" },
  { name: "social-tiktok", href: "https://www.tiktok.com/@stanley1913", label: "TikTok" },
];

function openCookieDialog() {
  window.dispatchEvent(new CustomEvent("open-cookie-dialog"));
}

function FooterLinkItem({ link }: { link: FooterLink }) {
  return (
    <li>
      <a className="block p-1 text-[14px] leading-[1.4] text-white" href={link.href}>
        {link.label}
        {link.updated && <span className="ml-1 text-[12px] opacity-60">[Updated]</span>}
      </a>
    </li>
  );
}

function NewsletterBlock() {
  return (
    <div className="flex w-full flex-col gap-4 lg:w-[517px] lg:shrink-0 lg:justify-between">
      <div>
        <h2 className="text-[26px] font-bold leading-[28.6px] lg:text-[36px] lg:leading-10 lg:tracking-[-0.02em]">
          Be the first to know
        </h2>
        <p className="mt-4 text-[14px] text-white">Hear about new arrivals, sales, and other news.</p>
      </div>
      <div>
        <p className="text-[20px] font-normal leading-[22px] text-white">
          To receive SMS updates, text <strong>STANLEY1913</strong> to <strong>22936</strong>
        </p>
        <p className="mt-4 text-[12px] font-light leading-[16.8px] text-white">
          By submitting your information, you agree to receive emails from Stanley 1913 and/or PMI WW
          Brands, LLC. Message and data rates may apply. View our{" "}
          <a className="p-1 underline" href="/policies/privacy-policy">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a className="p-1 underline" href="https://www.stanley1913.com/pages/mobile-messaging-terms">
            Terms
          </a>
          .
        </p>
      </div>
      <div className="flex gap-4">
        {SOCIALS.map((social) => (
          <a key={social.name} href={social.href} aria-label={social.label} className="text-white">
            <Icon name={social.name} size={24} />
          </a>
        ))}
      </div>
    </div>
  );
}

function NeedHelpBlock() {
  return (
    <div>
      <h2 className="text-[26px] font-bold leading-[28.6px] lg:text-[36px] lg:leading-[39.6px]">
        Need Help?
      </h2>
      <div className="mt-6 flex flex-col gap-6">
        {HELP_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex w-full items-center justify-center rounded-[4px] border-[1.6px] border-white bg-white px-8 py-[14px] text-[16px] font-bold text-[#101010]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function LinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="flex flex-col gap-[10px]">
      {links.map((link) => (
        <FooterLinkItem key={link.label} link={link} />
      ))}
    </ul>
  );
}

function StaticColumn({ title, links, showCookieButton }: { title: string; links: FooterLink[]; showCookieButton?: boolean }) {
  return (
    <div>
      <h3 className="mb-6 text-[23px] font-bold leading-[25.3px] tracking-[-0.02em] text-white">{title}</h3>
      <LinkList links={links} />
      {showCookieButton && (
        <button
          type="button"
          onClick={openCookieDialog}
          className="p-1 text-left text-[14px] leading-[1.4] text-white"
        >
          Do Not Sell/Share - Cookie Preferences
        </button>
      )}
    </div>
  );
}

function Accordion({ title, links, showCookieButton }: { title: string; links: FooterLink[]; showCookieButton?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-[20px] text-white"
      >
        {title}
        <Icon name={open ? "chevron-up" : "chevron-down"} size={16} />
      </button>
      {open && (
        <div className="mt-6">
          <LinkList links={links} />
          {showCookieButton && (
            <button
              type="button"
              onClick={openCookieDialog}
              className="p-1 text-left text-[14px] leading-[1.4] text-white"
            >
              Do Not Sell/Share - Cookie Preferences
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function ColumnsGroup({ variant }: { variant: "accordion" | "static" }) {
  const columns: { title: string; links: FooterLink[]; showCookieButton?: boolean }[] = [
    { title: "Company", links: COMPANY_LINKS },
    { title: "Support", links: SUPPORT_LINKS },
    { title: "Legal", links: LEGAL_LINKS, showCookieButton: true },
  ];
  return (
    <div
      className={
        variant === "static"
          ? "hidden w-full flex-col gap-14 lg:flex"
          : "flex w-full flex-col gap-8 lg:hidden"
      }
    >
      {columns.map((column) =>
        variant === "static" ? (
          <StaticColumn key={column.title} {...column} />
        ) : (
          <Accordion key={column.title} {...column} />
        )
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#101010] text-white">
      <div className="flex flex-col gap-8 px-4 py-8 lg:flex-row lg:justify-between lg:gap-[90px] lg:px-12 lg:py-12">
        <NewsletterBlock />
        <div className="mb-10 lg:hidden">
          <NeedHelpBlock />
        </div>
        <ColumnsGroup variant="accordion" />
        <ColumnsGroup variant="static" />
        <div className="hidden lg:block">
          <NeedHelpBlock />
        </div>
      </div>
      <div className="flex flex-col gap-4 border-t border-white/15 px-4 py-6 text-[14px] lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <p>©PMI WW Brands, LLC, All Rights Reserved</p>
        <button type="button" className="flex w-fit items-center gap-2 text-[14px] text-white">
          <Icon name="location" size={16} />
          Select Location and Language USA
          <Icon name="chevron-down" size={16} />
        </button>
      </div>
    </footer>
  );
}
