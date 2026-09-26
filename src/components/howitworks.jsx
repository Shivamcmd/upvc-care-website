const steps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Call or WhatsApp us and tell us about your UPVC window or door problem.",
  },
  {
    number: "02",
    title: "Share Your Requirement",
    description:
      "Tell us your location and the type of repair, replacement or installation you need.",
  },
  {
    number: "03",
    title: "Inspection",
    description:
      "The required work is checked so the right repair or replacement can be identified.",
  },
  {
    number: "04",
    title: "Repair or Installation",
    description:
      "The required work is completed and the window or door is checked before finishing.",
  },
]

function HowItWorks() {
  return (
    <section
     id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="site-container">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            How It Works
          </p>

          <h2
            id="how-it-works-heading"
            className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Simple process. Proper service.
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            From your first call to the completed job, we keep the process
            straightforward.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

          {/* Connecting line */}
          <div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-blue-100 lg:block" />

          {steps.map((step) => (
            <article
              key={step.number}
              className="relative text-center"
            >
              {/* Number */}
              <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-xs font-extrabold text-white shadow-md ring-1 ring-blue-100">
                {step.number}
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-900 sm:text-lg">
                {step.title}
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-9 text-center">
          <a
            href="#contact"
            className="inline-flex items-center text-sm font-bold text-blue-600 transition hover:text-blue-800"
          >
            Start your service request
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks