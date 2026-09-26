function UPVCGlassReplacement() {
  const issues = [
    "Cracked window glass",
    "Broken glass panel",
    "Damaged glass requiring replacement",
    "Glass replacement while retaining suitable UPVC frame",
    "Window glass requiring inspection",
    "Replacement of compatible glass",
  ]

  return (
    <main className="bg-white">
      <section className="bg-blue-50 px-5 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="site-container grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              UPVC Glass Replacement
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              UPVC Window Glass Replacement
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Replacement support for cracked, broken or damaged UPVC window
              glass where the existing frame is suitable for continued use.
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
              src="/src/images/photo4.png"
              alt="UPVC window glass replacement service"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 lg:px-10">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Glass Problems
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            When glass replacement may be required
          </h2>

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

      <section className="bg-blue-600 px-5 py-10 sm:px-6 lg:px-10">
        <div className="site-container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-white sm:text-2xl">
              Need glass replacement?
            </h2>
            <p className="mt-1 text-sm text-blue-100">
              Share the details of your damaged window glass.
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

export default UPVCGlassReplacement