function UPVCDoorRepair() {
  const issues = [
    "UPVC door not closing properly",
    "Door becoming difficult to open or close",
    "Loose or damaged door handle",
    "Door lock requiring inspection or replacement",
    "Door alignment or fitting issues",
    "Damaged seals causing drafts or leakage",
  ]

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-blue-50 px-5 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="site-container grid items-center gap-8 lg:grid-cols-2 lg:gap-14">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              UPVC Door Repair
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              UPVC Door Repair & Service
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Repair support for UPVC doors with closing, locking, handle,
              alignment, sealing or general operating problems while keeping
              the existing door and frame where suitable.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+918708238671"
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Call Now
              </a>

              <a
                href="/#contact"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-600"
              >
                Get a Quote
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <img
              src="/public/images/services/doorrepair.png"
              alt="UPVC door repair service"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= COMMON PROBLEMS ================= */}
      <section className="px-5 py-12 sm:px-6 lg:px-10">
        <div className="site-container">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Door Problems
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Common UPVC door problems we handle
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            UPVC doors can develop operating, locking or alignment problems
            over time. The right repair depends on the condition of the door,
            hardware and frame.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue) => (
              <div
                key={issue}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-start gap-3">

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                    ✓
                  </span>

                  <p className="text-sm font-bold leading-6 text-slate-900">
                    {issue}
                  </p>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= WHAT WE CHECK ================= */}
      <section className="bg-slate-50 px-5 py-12 sm:px-6 lg:px-10">
        <div className="site-container">

          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Repair Inspection
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              What we check during a door repair
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              The technician can inspect the door operation and identify the
              component or adjustment required before proceeding with the
              repair.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <span className="text-2xl">01</span>

              <h3 className="mt-3 text-base font-extrabold text-slate-900">
                Door Alignment
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Checking whether the door is sitting and operating correctly
                within the frame.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <span className="text-2xl">02</span>

              <h3 className="mt-3 text-base font-extrabold text-slate-900">
                Handles & Locks
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Inspecting handles, locks and other accessible hardware for
                damage or operating issues.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <span className="text-2xl">03</span>

              <h3 className="mt-3 text-base font-extrabold text-slate-900">
                Seals & Gaps
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Checking visible gaps or worn seals that may affect the door's
                fit and sealing.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <span className="text-2xl">04</span>

              <h3 className="mt-3 text-base font-extrabold text-slate-900">
                Door Operation
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Checking opening, closing and locking operation to identify the
                source of the problem.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 px-5 py-10 sm:px-6 lg:px-10">
        <div className="site-container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="text-xl font-extrabold text-white sm:text-2xl">
              Need UPVC door repair?
            </h2>

            <p className="mt-1 text-sm text-blue-100">
              Share the details of your door problem and get repair assistance.
            </p>
          </div>

          <a
            href="tel:+918708238671"
            className="w-fit rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
          >
            Call Now →
          </a>

        </div>
      </section>

    </main>
  )
}

export default UPVCDoorRepair