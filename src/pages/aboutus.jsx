import { Link } from "react-router-dom"

function AboutUs() {
  const services = [
    {
      number: "01",
      title: "UPVC Window Repair",
      text: "Repair support for windows that are difficult to open, close, lock or operate.",
      href: "/services/upvc-window-repair",
    },
    {
      number: "02",
      title: "UPVC Door Repair",
      text: "Solutions for door alignment, handles, locks and common operating issues.",
      href: "/services/upvc-door-repair",
    },
    {
      number: "03",
      title: "Window Installation",
      text: "Installation support for new UPVC window requirements.",
      href: "/services/upvc-window-installation",
    },
    {
      number: "04",
      title: "Glass Replacement",
      text: "Replacement support for cracked, broken or damaged UPVC glass.",
      href: "/services/upvc-glass-replacement",
    },
    {
      number: "05",
      title: "Hardware Replacement",
      text: "Suitable replacement support for handles, locks, rollers and hardware.",
      href: "/services/upvc-hardware-replacement",
    },
    {
      number: "06",
      title: "UPVC Maintenance",
      text: "Maintenance support for existing UPVC windows and doors.",
      href: "/services/upvc-maintenance",
    },
  ]

  const values = [
    {
      icon: "✓",
      title: "Repair Before Replace",
      text: "We focus on understanding the actual problem before suggesting replacement work.",
    },
    {
      icon: "↗",
      title: "Clear Communication",
      text: "The customer should understand what needs to be repaired and why.",
    },
    {
      icon: "⚙",
      title: "Practical Solutions",
      text: "We focus on the actual window, door, hardware or glass problem.",
    },
  ]

  const process = [
    {
      number: "01",
      title: "Tell Us",
      text: "Share the problem by phone or WhatsApp.",
    },
    {
      number: "02",
      title: "Understand",
      text: "The issue and required service are identified.",
    },
    {
      number: "03",
      title: "Service",
      text: "Suitable repair or replacement work is carried out.",
    },
    {
      number: "04",
      title: "Check",
      text: "The window or door is checked after the work.",
    },
  ]

  const areas = [
    "Noida",
    "Greater Noida",
    "Greater Noida West",
    "Ghaziabad",
    "Indirapuram",
    "Delhi",
    "Gurugram",
    "Faridabad",
  ]

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative bg-blue-50 px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100" />

        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="site-container relative">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm">

            <Link
              to="/"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Home
            </Link>

            <span className="text-slate-400">/</span>

            <span className="text-slate-500">
              About Us
            </span>

          </div>


          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

            {/* Left */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 shadow-sm">

                <span className="h-2 w-2 rounded-full bg-blue-600" />

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-700">
                  About UPVCCare
                </span>

              </div>


              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">

                Making UPVC repair
                <span className="block text-blue-600">
                  simple & stress-free.
                </span>

              </h1>


              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">

                We provide repair, replacement, installation and maintenance
                support for UPVC windows and doors, helping customers find a
                practical solution for their specific problem.

              </p>


              <div className="mt-7 flex flex-wrap gap-3">

                <Link
                  to="/contact"
                  className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Get a Quote →
                </Link>

                <a
                  href="tel:+918708238671"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
                >
                  <span>☎</span>
                  Call Now
                </a>

              </div>

            </div>


            {/* Right image */}
            <div className="relative">

              <div className="overflow-hidden rounded-[28px] border-8 border-white bg-white shadow-xl">

                <img
                  src="../assets/about/abouttwo.png"
                  alt="UPVC window and door technician providing repair service"
                  className="aspect-[4/3] w-full object-cover"
                />

              </div>


              {/* Floating card */}
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:left-8 sm:right-auto sm:w-[290px]">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-lg text-blue-600">
                    ✓
                  </div>

                  <div>

                    <p className="text-sm font-extrabold text-slate-950">
                      UPVC Service Support
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Repair • Replacement • Installation
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="px-5 py-14 sm:px-6 sm:py-16 lg:px-10">

        <div className="site-container">

          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            {/* Image */}
            <div className="relative">

              <div className="overflow-hidden rounded-3xl bg-slate-100">

                <img
                  src="/src/assets/about/aboutone.png"
                  alt="Technician working on a UPVC window"
                  className="aspect-[4/3] w-full object-cover"
                />

              </div>


              <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-blue-600 px-5 py-4 shadow-lg sm:block">

                <p className="text-xs font-semibold text-blue-100">
                  Our approach
                </p>

                <p className="mt-1 text-sm font-extrabold text-white">
                  Understand → Solve
                </p>

              </div>

            </div>


            {/* Text */}
            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Who We Are
              </p>

              <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                A straightforward approach to UPVC problems
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">

                UPVC windows and doors are designed for long-term use, but
                components such as handles, locks, rollers, seals and glass
                can develop problems with regular use.

              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">

                Our focus is to understand the problem first and then identify
                the service that is actually required. Where an existing
                UPVC system is suitable for repair, repair can be considered
                instead of unnecessary replacement.

              </p>


              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                    01
                  </span>

                  <h3 className="mt-4 text-sm font-extrabold text-slate-950">
                    Existing Windows
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Repair and maintenance support for existing UPVC systems.
                  </p>

                </div>


                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                    02
                  </span>

                  <h3 className="mt-4 text-sm font-extrabold text-slate-950">
                    Replacement Work
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Support for glass and suitable hardware replacement.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="bg-slate-50 px-5 py-14 sm:px-6 sm:py-16 lg:px-10">

        <div className="site-container">

          <div className="max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Why Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Simple principles behind our service
            </h2>

          </div>


          <div className="mt-8 grid gap-4 md:grid-cols-3">

            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {value.icon}
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {value.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="px-5 py-14 sm:px-6 sm:py-16 lg:px-10">

        <div className="site-container">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                UPVC services under one roof
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                From everyday repairs to glass, hardware and installation
                requirements, explore the service that matches your need.
              </p>

            </div>


            <Link
              to="/contact"
              className="w-fit rounded-lg border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 transition hover:bg-blue-100"
            >
              Need Help? →
            </Link>

          </div>


          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >

                <div className="flex items-center justify-between">

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xs font-extrabold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    {service.number}
                  </span>

                  <span className="text-lg text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
                    →
                  </span>

                </div>

                <h3 className="mt-5 text-base font-extrabold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {service.text}
                </p>

              </Link>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="bg-blue-50 px-5 py-14 sm:px-6 sm:py-16 lg:px-10">

        <div className="site-container">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              From problem to solution
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              A simple process designed to make it easier to get help with
              your UPVC window or door.
            </p>

          </div>


          <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* Connecting line */}
            <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-blue-200 lg:block" />

            {process.map((item) => (
              <div
                key={item.number}
                className="relative rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm"
              >

                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-blue-50 bg-blue-600 text-sm font-extrabold text-white">
                  {item.number}
                </div>

                <h3 className="mt-5 text-base font-extrabold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICE AREAS
      ===================================================== */}
      <section className="px-5 py-14 sm:px-6 sm:py-16 lg:px-10">

        <div className="site-container">

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

            <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Service Areas
                </p>

                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                  Serving customers across Delhi NCR
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Service availability depends on your location and the type
                  of work required.
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-flex rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  Check Availability →
                </Link>

              </div>


              <div className="flex flex-wrap gap-2.5">

                {areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700"
                  >
                    {area}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="px-5 pb-14 sm:px-6 sm:pb-16 lg:px-10">

        <div className="site-container">

          <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-6 py-10 sm:px-9 sm:py-12">

            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border-[35px] border-blue-500/50" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                  Need Help?
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  Let’s take a look at your UPVC problem.
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100">
                  Tell us what is wrong with your window or door and we’ll
                  help you identify the right service.
                </p>

              </div>


              <div className="flex shrink-0 flex-wrap gap-3">

                <Link
                  to="/contact"
                  className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-600 shadow-sm transition hover:bg-blue-50"
                >
                  Contact Us
                </Link>

                <a
                  href="tel:+918708238671"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-400 bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                >
                  <span>☎</span>
                  Call Now
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

export default AboutUs