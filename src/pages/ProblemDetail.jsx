import { Link, useParams } from "react-router-dom"

import problems from "../problems"

function ProblemDetail() {
  const { slug } = useParams()
  const problem = problems[slug]

  // Invalid URL
  if (!problem) {
    return (
      <>
      

        <main className="site-container py-20 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Problem Not Found
          </h1>

          <p className="mx-auto mt-3 max-w-md text-slate-600">
            The problem page you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            ← Back to Home
          </Link>
        </main>

        <Footer />
      </>
    )
  }

  return (
    <>
  

      <main>
        {/* ================= HERO ================= */}
        <section className="bg-slate-50 py-10 sm:py-12 lg:py-14">
          <div className="site-container">

            {/* Breadcrumb */}
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link
                to="/"
                className="transition hover:text-blue-600"
              >
                Home
              </Link>

              <span>/</span>

              <span>Problems We Fix</span>

              <span>/</span>

              <span className="text-slate-700">
                {problem.shortTitle}
              </span>
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-2">

              {/* Content */}
              <div>
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                  UPVC Repair Service
                </span>

                <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  {problem.title}
                </h1>

                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                  {problem.description}
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                  <a
                    href="tel:+919999999999"
                    className="rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    ☎ Call for Repair
                  </a>

                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-blue-200 bg-white px-6 py-3 text-center text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                  >
                    WhatsApp Us
                  </a>

                </div>
              </div>

              {/* Image */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img
                  src={problem.heroImage}
                  alt={problem.title}
                  className="h-64 w-full object-cover sm:h-80"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ================= CAUSES ================= */}
        <section className="py-12 sm:py-14">
          <div className="site-container">

            <div className="grid gap-8 lg:grid-cols-2">

              {/* Causes */}
              <div>
                <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Understanding the issue
                </span>

                <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  What Can Cause This Problem?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  UPVC window and door problems can have different
                  causes depending on the condition of the frame,
                  glass, seals and hardware.
                </p>

                <ul className="mt-6 space-y-3">
                  {problem.causes.map((cause) => (
                    <li
                      key={cause}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span className="mt-0.5 font-bold text-blue-600">
                        ✓
                      </span>

                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Signs */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">

                <h2 className="text-2xl font-bold text-slate-900">
                  Common Signs
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  You may notice one or more of these signs before
                  getting the window or door inspected.
                </p>

                <ul className="mt-5 space-y-3">
                  {problem.signs.map((sign) => (
                    <li
                      key={sign}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span className="mt-0.5 font-bold text-blue-600">
                        ✓
                      </span>

                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          </div>
        </section>

        {/* ================= SOLUTIONS ================= */}
        <section className="bg-slate-50 py-12 sm:py-14">
          <div className="site-container">

            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Repair Options
              </span>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                How We Can Fix It
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                The required repair depends on the actual condition
                of the window, door, glass or hardware.
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {problem.solutions.map((solution) => (
                <div
                  key={solution}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 font-bold text-blue-600">
                    ✓
                  </div>

                  <h3 className="mt-3 text-sm font-semibold text-slate-900">
                    {solution}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="py-12 sm:py-14">
          <div className="site-container">

            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Simple Process
              </span>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                How the Repair Works
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                From describing the issue to completing the repair,
                the process is kept simple.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Tell Us the Problem",
                  text: "Describe the issue with your UPVC window or door.",
                },
                {
                  number: "02",
                  title: "Inspect the Issue",
                  text: "The affected window, door, glass or hardware is checked.",
                },
                {
                  number: "03",
                  title: "Identify the Repair",
                  text: "The required repair or replacement is identified.",
                },
                {
                  number: "04",
                  title: "Complete the Repair",
                  text: "The required repair work is carried out.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-2 font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-slate-600">
                    {step.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="bg-slate-50 py-12 sm:py-14">
          <div className="site-container">

            <div className="mx-auto max-w-3xl">

              <div className="text-center">
                <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  FAQ
                </span>

                <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="mt-7 space-y-3">
                {problem.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <summary className="cursor-pointer list-none pr-6 font-semibold text-slate-900">
                      {faq.question}
                    </summary>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-12 sm:py-14">
          <div className="site-container">

            <div className="rounded-2xl bg-blue-600 px-6 py-8 text-center sm:px-10">

              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Need Help With Your UPVC Window or Door?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
                Tell us about the problem and contact us for the
                appropriate UPVC repair service.
              </p>

              <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">

                <a
                  href="tel:+918708238671"
                  className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                >
                  ☎ Call Now
                </a>

                <a
                  href="https://wa.me/918708238671"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-blue-300 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  WhatsApp Us
                </a>

              </div>

            </div>
          </div>
        </section>
      </main>

    
    
    </>
  )
}

export default ProblemDetail