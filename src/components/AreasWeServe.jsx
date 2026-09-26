const areas = [
  {
    name: "Delhi",
    description: "UPVC window & door service",
  },
  {
    name: "Noida",
    description: "Repair & replacement service",
  },
  {
    name: "Greater Noida",
    description: "UPVC repair & installation",
  },
  {
    name: "Ghaziabad",
    description: "Window & door repair",
  },
  {
    name: "Gurugram",
    description: "UPVC service at your location",
  },
  {
    name: "Faridabad",
    description: "Repair & maintenance service",
  },
]

function AreasWeServe() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-heading"
      className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
          
          {/* Left Content */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Areas We Serve
            </p>

            <h2
              id="areas-heading"
              className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              UPVC service across Delhi NCR
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              We provide UPVC window and door repair, replacement and
              installation services across selected areas of Delhi NCR.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Delhi", "Noida", "Ghaziabad", "Gurugram"].map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
                >
                  {area}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
            >
              Check Service Availability
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Areas */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area.name}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    ✓
                  </span>

                  <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                    {area.name}
                  </h3>
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Local SEO text */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
          <p className="text-sm leading-6 text-slate-600">
            Looking for{" "}
            <strong className="font-semibold text-slate-900">
              UPVC window repair near you
            </strong>
            ? Contact us with your location and the problem you're facing.
            We'll confirm service availability for your area.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AreasWeServe