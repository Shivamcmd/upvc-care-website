import ServiceCard from "./servicecard"

const services = [
  {
    title: "UPVC Window Repair",
    description:
      "Fix common window problems including faulty handles, locks, rollers, alignment and difficult operation.",
    image: "/src/images/photo-1.png",
    href: "/services/upvc-window-repair",
  },
  {
    title: "UPVC Door Repair",
    description:
      "Repair UPVC doors with problems related to locks, handles, hinges, alignment and closing.",
    image: "/src/images/photo-2.png",
    href: "/services/upvc-door-repair",
  },
  {
    title: "UPVC Window Installation",
    description:
      "Professional installation for new UPVC windows in homes, offices and other properties.",
    image: "/src/images/photo-3.png",
    href: "/services/upvc-window-installation",
  },
  {
    title: "UPVC Glass Replacement",
    description:
      "Replace cracked or damaged window glass while keeping the existing UPVC frame where suitable.",
    image: "/src/images/photo-4.png",
    href: "/services/upvc-glass-replacement",
  },
  {
    title: "Hardware Replacement",
    description:
      "Replace worn or damaged handles, locks, rollers, hinges and other compatible UPVC hardware.",
    image: "/src/images/photo-5.png",
    href: "/services/upvc-hardware-replacement",
  },
  {
    title: "UPVC Maintenance",
    description:
      "Keep windows and doors operating smoothly with inspection, adjustment and routine maintenance.",
    image: "/src/images/photo-6.png",
    href: "/services/upvc-maintenance",
  },
]

function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-white px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="site-container">

        {/* Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Our Services
            </p>

            <h2
              id="services-heading"
              className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              Complete UPVC repair & installation services
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              From a loose handle to damaged glass, we help with common UPVC
              window and door repair, replacement and installation requirements.
            </p>

          </div>

          <a
            href="#contact"
            className="hidden shrink-0 text-sm font-bold text-blue-600 transition hover:text-blue-800 sm:inline-flex sm:items-center"
          >
            Get service assistance
            <span className="ml-2">→</span>
          </a>

        </div>

        {/* Service Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 sm:hidden">
          <a
            href="#contact"
            className="inline-flex items-center text-sm font-bold text-blue-600"
          >
            Get service assistance
            <span className="ml-2">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default ServicesSection