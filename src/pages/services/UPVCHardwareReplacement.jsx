import hardwarechange from "../../assets/images/hardwarechange.png";

function UPVCHardwareReplacement() {
  const hardware = [
    "UPVC window handles",
    "Door handles",
    "Window locks",
    "Rollers for sliding windows",
    "Window and door hinges",
    "Other compatible hardware",
  ]

  return (
    <main className="bg-white">
      <section className="bg-blue-50 px-5 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="site-container grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Hardware Replacement
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              UPVC Window & Door Hardware Replacement
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Replacement support for worn, damaged or faulty UPVC handles,
              locks, rollers, hinges and other compatible hardware.
            </p>

            <div className="mt-6">
              <a
                href="tel:+918708238671"
                className="inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
              >
                Call Now →
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <img
              src={hardwarechange}
              alt="UPVC window and door hardware replacement"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 lg:px-10">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Replacement Parts
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Common UPVC hardware replacements
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hardware.map((item) => (
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
    </main>
  )
}

export default UPVCHardwareReplacement