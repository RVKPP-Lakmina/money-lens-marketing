import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Mission", href: "/mission" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Financial Guides", href: "/guides" },
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <Instagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <Facebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

const Footer = ({
                  logo = {
                    url: "/",
                    src: "/logo.png",
                    alt: "Money Lens Logo",
                    title: "Money Lens",
                  },
                  sections = defaultSections,
                  description = "Empowering Sri Lankans with AI-driven financial planning. Get personalized investment insights, multilingual education, and tools to achieve your financial goals.",
                  socialLinks = defaultSocialLinks,
                  copyright = "© 2026 Money Lens. All rights reserved.",
                  legalLinks = defaultLegalLinks,
                }: Footer7Props) => {
  return (
      <section className="">
        <div className="container">
          <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
            <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo.url}>
                  <img
                      src={logo.src}
                      alt={logo.alt}
                      title={logo.title}
                      className="h-10 md:h-14 lg:h-16"
                  />

                </a>
              </div>
              <p className="text-muted-foreground max-w-[70%] text-sm">
              {description}
              </p>
              <ul className="text-muted-foreground flex items-center space-x-6">
                {socialLinks.map((social, idx) => (
                    <li key={idx} className="hover:text-primary font-medium">
                      <a href={social.href} aria-label={social.label}>
                        {social.icon}
                      </a>
                    </li>
                ))}
              </ul>
            </div>
            <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                  <div key={sectionIdx}>
                    <h3 className="mb-4 font-bold bg-gradient-to-r from-[#156C97] via-[#1a8ec4] to-[#156C97] bg-clip-text text-transparent">
                      {section.title}
                    </h3>
                    <ul className="text-muted-foreground space-y-3 text-sm">
                      {section.links.map((link, linkIdx) => (
                          <li
                              key={linkIdx}
                              className="hover:text-primary font-medium"
                          >
                            <a href={link.href}>{link.name}</a>
                          </li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
          </div>
          <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
            <p className="order-2 lg:order-1">{copyright}</p>
            <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
              {legalLinks.map((link, idx) => (
                  <li key={idx} className="hover:text-primary">
                    <a href={link.href}> {link.name}</a>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
  );
};

export { Footer };
