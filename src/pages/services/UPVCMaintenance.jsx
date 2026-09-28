import winclean from "../../assets/images/winclean.png";

function UPVCMaintenance() {
  const services = [
    "Window operation check",
    "Door alignment check",
    "Handle and lock inspection",
    "Sliding roller inspection",
    "Hardware adjustment",
    "General UPVC maintenance",
  ]

  return (
    <main className="bg-white">
      <section className="bg-blue-50 px-5 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="site-container grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              UPVC Maintenance
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              UPVC Window & Door Maintenance
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Routine inspection, adjustment and maintenance can help identify
              common UPVC window and door problems before they become bigger
              issues.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="tel:+918708238671"
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
              >
                Call Now
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 hover:border-blue-300 hover:text-blue-600"
              >
                Get a Quote
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <img
              src={winclean}
              alt="UPVC window and door maintenance"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 lg:px-10">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Maintenance Services
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What can be checked?
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  ✓
                </span>

                <h3 className="mt-4 text-sm font-bold text-slate-900">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-5 py-10 sm:px-6 lg:px-10">
        <div className="site-container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-white sm:text-2xl">
              Need UPVC maintenance?
            </h2>

            <p className="mt-1 text-sm text-blue-100">
              Contact us with your window or door requirement.
            </p>
          </div>

          <a
            href="tel:+918708238671"
            className="w-fit rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-600"
          >
            Call Now →
          </a>
        </div>
      </section>
    </main>
  )
}

export default UPVCMaintenance