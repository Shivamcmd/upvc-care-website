import wininstall from "../../assets/images/installation.png";

function UPVCWindowInstallation() {
  const benefits = [
    "New UPVC window installation",
    "Replacement of existing windows",
    "Residential window installation",
    "Office and commercial installation",
    "Frame and hardware fitting",
    "Installation and final adjustment",
  ]

  return (
    <main className="bg-white">
      <section className="bg-blue-50 px-5 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="site-container grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              UPVC Window Installation
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              UPVC Window Installation Service
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Professional installation support for new UPVC windows in homes,
              apartments, offices and other properties.
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
               src={wininstall}
              alt="UPVC window installation"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 lg:px-10">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Installation Services
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            UPVC window installation for different requirements
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  ✓
                </span>

                <h3 className="mt-4 text-sm font-bold text-slate-900">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-12 sm:px-6 lg:px-10">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Installation Process
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Requirement", "Understand your window requirement."],
              ["02", "Measurement", "Check the required opening and dimensions."],
              ["03", "Installation", "Install and fit the UPVC window."],
              ["04", "Final Check", "Check operation and fitting after installation."],
            ].map(([number, title, text]) => (
              <div key={number}>
                <span className="text-xs font-extrabold text-blue-600">
                  {number}
                </span>
                <h3 className="mt-2 font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default UPVCWindowInstallation