function UPVCwindowRepair() {
  const problems = [
    "UPVC window not closing properly",
    "Broken or loose window handle",
    "window lock not working",
    "window difficult to open or close",
    "window alignment problems",
    "Worn hinges or hardware",
  ]

  const steps = [
    ["01", "Tell Us the Problem", "Share your window issue and location."],
    ["02", "Inspection", "The window, lock, hinges and hardware are checked."],
    ["03", "Repair", "The required adjustment, repair or replacement is carried out."],
    ["04", "Final Check", "The window is checked for proper operation."],
  ]

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-blue-50 px-5 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="site-container grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              UPVC Window Repair
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Professional UPVC window Repair Service
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Get help with common UPVC window problems including faulty locks,
              handles, hinges, alignment and difficult opening or closing.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+918708238671"
                className="rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-bold text-white hover:bg-blue-700"
              >
                Call Now
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center text-sm font-bold text-slate-800 hover:border-blue-300 hover:text-blue-600"
              >
                Get a Free Quote
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <img
              src="/src/assets/images/winrepair.png"
              alt="UPVC door repair service"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="bg-white px-5 py-12 sm:px-6 lg:px-10">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Common Window Problems
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Common UPVC window issues
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            UPVC windows can develop problems with their locks, handles,
            alignment and hardware over time.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                    ✓
                  </span>

                  <h3 className="text-sm font-bold leading-6 text-slate-900">
                    {problem}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 px-5 py-12 sm:px-6 lg:px-10">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Our Process
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            How UPVC window repair works
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <div key={number}>
                <span className="text-xs font-extrabold text-blue-600">
                  {number}
                </span>

                <h3 className="mt-2 text-base font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-blue-600 px-5 py-10 sm:px-6 lg:px-10">
        <div className="site-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-white sm:text-2xl">
              Need help with your UPVC window?
            </h2>

            <p className="mt-1 text-sm text-blue-100">
              Tell us about the problem and check service availability.
            </p>
          </div>

          <a
            href="tel:+918708238671"
            className="w-fit rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-600 hover:bg-blue-50"
          >
            Call Now →
          </a>
        </div>
      </section>
    </main>
  )
}

export default UPVCwindowRepair