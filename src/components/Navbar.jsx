import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { DoorOpen } from "lucide-react";
function Navbar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [problemsOpen, setProblemsOpen] = useState(false)

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
      label: "UPVC Window Installation",
      href: "/services/upvc-window-installation",
    },
    {
      label: "UPVC Glass Replacement",
      href: "/services/upvc-glass-replacement",
    },
    {
      label: "Hardware Replacement",
      href: "/services/upvc-hardware-replacement",
    },
    {
      label: "UPVC Maintenance",
      href: "/services/upvc-maintenance",
    },
  ]

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
  ]

  const closeMobileMenu = () => {
    setIsOpen(false)
    setServicesOpen(false)
    setProblemsOpen(false)
  }
const goToSection = (sectionId) => {
  setIsOpen(false)
  setServicesOpen(false)
  setProblemsOpen(false)

  if (window.location.pathname !== "/") {
    navigate("/")
    
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  } else {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">

      {/* ================= DESKTOP / HEADER ================= */}
      <div className="site-container flex h-[68px] items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2.5"
        >
       


<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
  <DoorOpen size={21} strokeWidth={2.5} />
</span>

          <div className="leading-none">
            <span className="block text-[17px] font-extrabold tracking-tight text-slate-900">
              UPVC<span className="text-blue-600">Care</span>
            </span>

            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.16em] text-slate-400">
              Window & Door Service
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-6 lg:flex">

          {/* Home */}
          <Link
  to="/"
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  className="text-[13px] font-semibold text-slate-700 transition hover:text-blue-600"
>
  Home
</Link>

          {/* ================= SERVICES DROPDOWN ================= */}
  <div className="group relative">
  <button
    type="button"
    onClick={() => {
      setServicesOpen(!servicesOpen)
      setProblemsOpen(false)
    }}
    className="flex items-center gap-1.5 py-5 text-[13px] font-semibold text-slate-600 transition hover:text-blue-600"
  >
    Services

    <span
      className={`text-[11px] transition-transform duration-200 ${
        servicesOpen ? "rotate-180" : ""
      }`}
    >
      ⌄
    </span>
  </button>

  <div
    className={`absolute left-1/2 top-full z-[100] w-[310px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl transition-all duration-200 ${
      servicesOpen
        ? "visible translate-y-0 opacity-100"
        : "invisible translate-y-2 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
    }`}
  >
    {services.map((service) => (
      <Link
        key={service.href}
        to={service.href}
        onClick={() => {
          setServicesOpen(false)
          setProblemsOpen(false)
        }}
        className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
      >
        {service.label}
      </Link>
    ))}
  </div>
</div>
          {/* ================= PROBLEMS DROPDOWN ================= */}
          <div className="group relative">

            <button
              type="button"
              className="flex items-center gap-1.5 py-5 text-[13px] font-semibold text-slate-600 transition hover:text-blue-600"
            >
              Problems We Fix

              <span className="text-[11px] transition-transform duration-200 group-hover:rotate-180">
                ⌄
              </span>
            </button>

            <div className="invisible absolute left-1/2 top-full z-50 w-[310px] -translate-x-1/2 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              {problems.map((problem) => (
                <Link
                  key={problem.href}
                  to={problem.href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {problem.label}
                </Link>
              ))}

            </div>
          </div>

          {/* How It Works */}
  <button
  type="button"
  onClick={() => goToSection("how-it-works")}
  className="text-[13px] font-semibold text-slate-600 transition hover:text-blue-600"
>
  How It Works
</button>

          {/* Reviews */}
         <a
  href="/#reviews"
  className="text-[13px] font-semibold text-slate-600 transition hover:text-blue-600"
>
  Reviews
</a>

          {/* FAQ */}
        <Link
  to="/contact"
  className="text-[13px] font-semibold text-slate-600 transition hover:text-blue-600"
>
  Contact Us
</Link>

        </nav>

        {/* ================= DESKTOP CTA ================= */}
        <div className="hidden items-center gap-3 sm:flex">

  <button
  type="button"
  onClick={() => goToSection("contact")}
  className="hidden text-sm font-semibold text-slate-600 transition hover:text-blue-600 xl:block"
>
  Get a Quote
</button>

       <a
  href="tel:+918708238671"
  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.409-7.409 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.363-.272.53-.738.417-1.173L6.16 3.837A1.125 1.125 0 0 0 5.07 2.985H3.75A2.25 2.25 0 0 0 1.5 5.235v1.515Z"
    />
  </svg>

  <span>Call Now</span>
</a>

        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
        >
          <span className="text-xl">
            {isOpen ? "×" : "☰"}
          </span>
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">

          <nav className="site-container py-3">

            {/* Home */}
         <Link
  to="/"
  onClick={() => {
    closeMobileMenu();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  className="block border-b border-slate-100 py-3.5 text-sm font-semibold text-slate-700"
>
  Home
</Link>

            {/* ================= MOBILE SERVICES ================= */}
            <div className="border-b border-slate-100">

              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between py-3.5 text-sm font-semibold text-slate-700"
              >
                <span>Services</span>

                <span
                  className={`text-sm transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              {servicesOpen && (
                <div className="mb-2 rounded-xl bg-slate-50 p-2">

                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                    >
                      {service.label}
                    </Link>
                  ))}

                </div>
              )}

            </div>

            {/* ================= MOBILE PROBLEMS ================= */}
            <div className="border-b border-slate-100">

              <button
                type="button"
                onClick={() => setProblemsOpen(!problemsOpen)}
                className="flex w-full items-center justify-between py-3.5 text-sm font-semibold text-slate-700"
              >
                <span>Problems We Fix</span>

                <span
                  className={`text-sm transition-transform duration-200 ${
                    problemsOpen ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              {problemsOpen && (
                <div className="mb-2 rounded-xl bg-slate-50 p-2">

                  {problems.map((problem) => (
                    <Link
                      key={problem.href}
                      to={problem.href}
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                    >
                      {problem.label}
                    </Link>
                  ))}

                </div>
              )}

            </div>

            {/* How It Works */}
          <a
  href="/#how-it-works"
  onClick={closeMobileMenu}
  className="block border-b border-slate-100 py-3.5 text-sm font-semibold text-slate-700"
>
  How It Works
</a>

            {/* Reviews */}
           <a
  href="/#reviews"
  onClick={closeMobileMenu}
  className="block border-b border-slate-100 py-3.5 text-sm font-semibold text-slate-700"
>
  Reviews
</a>

            {/* FAQ */}
           <Link
  to="/contact"
  onClick={closeMobileMenu}
  className="block border-b border-slate-100 py-3.5 text-sm font-semibold text-slate-700"
>
  Contact Us
</Link>

       

          </nav>
        </div>
      )}

    </header>
  )
}

export default Navbar