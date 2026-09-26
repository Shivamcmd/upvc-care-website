import heroImage from "../images/home ban.png";

function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1fr_0.9fr] lg:gap-12 lg:px-8 lg:py-16">

        {/* Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Professional UPVC Service
          </div>

          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[54px]">
            UPVC Window & Door
            <span className="block text-blue-600">
              Repair Near You
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Reliable repair, replacement and installation for UPVC windows
            and doors. Get professional assistance at your home or property.
          </p>

          {/* CTA */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
            >
              Get a Free Quote
              <span className="ml-2">→</span>
            </a>

            <a
              href="tel:+918708238671"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-600"
            >
              Call Now
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "Doorstep Service",
              "Clear Quotations",
              "Quality Parts",
              "Skilled Technicians",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs font-semibold text-slate-600 sm:text-sm"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-600">
                  ✓
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-50 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
          <img
  src={heroImage}
  alt="UPVC window and door repair service"
  className="aspect-[4/3] w-full object-cover"
/>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-4 left-4 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:left-6">
            <p className="text-[11px] font-medium text-slate-500">
              Need a repair?
            </p>

            <p className="mt-0.5 text-sm font-bold text-slate-900">
              Get expert assistance
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero