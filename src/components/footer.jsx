
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    label: "UPVC Window Repair",
    href: "/services/upvc-window-repair",
  },
  {
    label: "UPVC Door Repair",
    href: "/services/upvc-door-repair",
  },
  {
    label: "Glass Replacement",
    href: "/services/upvc-glass-replacement",
  },
  {
    label: "Hardware Replacement",
    href: "/services/upvc-hardware-replacement",
  },
  {
    label: "UPVC Installation",
    href: "/services/upvc-window-installation",
  },
  {
    label: "UPVC Maintenance",
    href: "/services/upvc-maintenance",
  },
];

const problems = [
  {
    label: "Window Won't Open / Close",
    href: "/problems/window-wont-open-close",
  },
  {
    label: "Water Leakage",
    href: "/problems/water-leakage",
  },
  {
    label: "Noisy Sliding Doors",
    href: "/problems/noisy-sliding-doors",
  },
  {
    label: "Fogged / Cracked Glass",
    href: "/problems/fogged-cracked-glass",
  },
  {
    label: "Broken Lock / Handle",
    href: "/problems/broken-lock-handle",
  },
  {
    label: "Dust & Draft",
    href: "/problems/dust-draft",
  },
];

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "How It Works",
    href: "/#how-it-works",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Get a Quote",
    href: "#contact",
  },
];

function FooterDropdown({ title, children, open, onClick }) {
  return (
    <div className="border-b border-slate-800 last:border-b-0 lg:hidden">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-white">
          {title}
        </span>

        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-sm text-slate-400 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((current) =>
      current === section ? null : section
    );
  };

  return (
    <footer className="bg-slate-950 pb-20 text-slate-300 lg:pb-0">

      <div className="site-container px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}
        <div className="py-9 sm:py-10 lg:py-12">

          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">

            {/* =================================================
                BRAND
            ================================================= */}
            <div>

              <Link
                to="/"
                className="inline-flex items-center gap-2.5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-base font-black text-white">
                  U
                </span>

                <div className="leading-none">
                  <span className="block text-[17px] font-extrabold tracking-tight text-white">
                    UPVC<span className="text-blue-500">Care</span>
                  </span>

                  <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.16em] text-slate-500">
                    Window & Door Service
                  </span>
                </div>
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
                Professional UPVC window and door repair, replacement,
                installation and maintenance services.
              </p>

              {/* Quick Contact */}
              <div className="mt-5 space-y-3">

                {/* Phone */}
                <a
                  href="tel:+918708238671"
                  className="flex items-center gap-2.5 text-sm font-semibold text-white transition hover:text-blue-400"
                >
                  <Phone
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 text-blue-400"
                  />

                  <span>
                    +91 8708238671
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918708238671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-xs font-semibold text-green-400 transition hover:text-green-300"
                >
                  <FaWhatsapp
                    size={17}
                    className="shrink-0"
                  />

                  <span>
                    WhatsApp us
                  </span>

                  <span>
                    →
                  </span>
                </a>

              </div>
            </div>


            {/* =================================================
                DESKTOP SERVICES
            ================================================= */}
            <div className="hidden lg:block">

              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                Services
              </h3>

              <ul className="mt-4 space-y-2.5">

                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      className="text-sm text-slate-400 transition hover:text-blue-400"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>


            {/* =================================================
                DESKTOP QUICK LINKS
            ================================================= */}
            <div className="hidden lg:block">

              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                Quick Links
              </h3>

              <ul className="mt-4 space-y-2.5">

                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`text-sm transition ${
                        link.label === "Get a Quote"
                          ? "font-semibold text-blue-400 hover:text-blue-300"
                          : "text-slate-400 hover:text-blue-400"
                      }`}
                    >
                      {link.label}

                      {link.label === "Get a Quote" && " →"}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>


            {/* =================================================
                DESKTOP CONTACT
            ================================================= */}
            <div className="hidden lg:block">

              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                Contact
              </h3>

              <div className="mt-4 space-y-3.5">

                {/* Phone */}
                <a
                  href="tel:+918708238671"
                  className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-blue-400"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-blue-400">
                    <Phone
                      size={15}
                      strokeWidth={2}
                    />
                  </span>

                  <span>
                    +91 8708238671
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:daudayalpandey95@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-blue-400"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-blue-400">
                    <Mail
                      size={15}
                      strokeWidth={2}
                    />
                  </span>

                  <span className="break-all">
                    daudayalpandey95@gmail.com
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918708238671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-green-400"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-green-400">
                    <FaWhatsapp size={17} />
                  </span>

                  <span>
                    WhatsApp us
                  </span>
                </a>

                {/* Service Area */}
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-blue-400">
                    <MapPin
                      size={15}
                      strokeWidth={2}
                    />
                  </span>

                  <span className="leading-6">
                    Noida • Greater Noida • Ghaziabad • Delhi NCR  • Mathura  • Agra
                  </span>
                </div>

                {/* Timing */}
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-blue-400">
                    <span className="text-xs">
                      ◷
                    </span>
                  </span>

                  <span>
                    Mon–Sun, 9 AM – 8 PM
                  </span>
                </div>

              </div>
            </div>

          </div>


          {/* =================================================
              MOBILE FOOTER
          ================================================= */}
          <div className="mt-8 lg:hidden">

            {/* SERVICES */}
            <FooterDropdown
              title="Services"
              open={openSection === "services"}
              onClick={() => toggleSection("services")}
            >
              <ul className="space-y-3">

                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      className="block text-sm text-slate-400 transition hover:text-blue-400"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}

              </ul>
            </FooterDropdown>


            {/* QUICK LINKS */}
            <FooterDropdown
              title="Quick Links"
              open={openSection === "links"}
              onClick={() => toggleSection("links")}
            >
              <ul className="space-y-3">

                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`block text-sm transition ${
                        link.label === "Get a Quote"
                          ? "font-semibold text-blue-400"
                          : "text-slate-400 hover:text-blue-400"
                      }`}
                    >
                      {link.label}

                      {link.label === "Get a Quote" && " →"}
                    </Link>
                  </li>
                ))}

              </ul>
            </FooterDropdown>

          </div>


          {/* =================================================
              MOBILE CONTACT
          ================================================= */}
          <div className="lg:hidden">

            <FooterDropdown
              title="Contact"
              open={openSection === "contact"}
              onClick={() => toggleSection("contact")}
            >

              <div className="space-y-3.5">

                {/* Phone */}
                <a
                  href="tel:+918708238671"
                  className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-blue-400"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-blue-400">
                    <Phone
                      size={16}
                      strokeWidth={2}
                    />
                  </span>

                  <span>
                    +91 8708238671
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:daudayalpandey95@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-blue-400"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-blue-400">
                    <Mail
                      size={16}
                      strokeWidth={2}
                    />
                  </span>

                  <span className="break-all">
                    daudayalpandey95@gmail.com
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918708238671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-green-400"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-green-400">
                    <FaWhatsapp size={19} />
                  </span>

                  <span>
                    WhatsApp us
                  </span>
                </a>

                {/* Service Area */}
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-blue-400">
                    <MapPin
                      size={16}
                      strokeWidth={2}
                    />
                  </span>

                  <span className="leading-6">
                    Noida • Greater Noida • Ghaziabad • Delhi NCR  • Mathura  • Agra
                  </span>
                </div>

                {/* Timing */}
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-blue-400">
                    <span className="text-sm">
                      ◷
                    </span>
                  </span>

                  <span>
                    Mon–Sun, 9 AM – 8 PM
                  </span>
                </div>

              </div>

            </FooterDropdown>

          </div>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}
        <div className="flex flex-col gap-3 border-t border-slate-800 py-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} UPVCCare. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <Link
              to="/privacy-policy"
              className="text-xs text-slate-500 transition hover:text-slate-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-slate-500 transition hover:text-slate-300"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

