import ProblemCard from "./problemcard";

import openclose from "../assets/problems/openclose.png";
import brokenLock from "../assets/brokenlock.png";
import leaked from "../assets/leaked.png";
import noisy from "../assets/noisy.png";
import cracked from "../assets/cracked.png";

const problems = [
  {
    title: "Window Won't Close",
    description:
      "Window is misaligned, rubbing against the frame or refusing to close properly.",
    image: openclose,
  },
  {
    title: "Broken Handle",
    description:
      "Loose, damaged or difficult-to-turn handles affecting everyday window operation.",
    image: brokenLock,
  },
  {
    title: "Lock Not Working",
    description:
      "The lock is stuck, difficult to operate or not securing the window or door properly.",
    image: brokenLock,
  },
  {
    title: "Water Leakage",
    description:
      "Rainwater entering through the window or door because of seals, alignment or other issues.",
    image: leaked,
  },
  {
    title: "Sliding Window Stuck",
    description:
      "Sliding panels feel heavy, jammed or difficult to move along the track.",
    image: noisy,
  },
  {
    title: "Cracked Glass",
    description:
      "Cracked or damaged glass that needs inspection and possible replacement.",
    image: cracked,
  },
];

function ProblemsSection() {
  return (
    <section
      id="problems"
      aria-labelledby="problems-heading"
      className="bg-slate-50 px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="site-container">

        {/* Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Common Problems
            </p>

            <h2
              id="problems-heading"
              className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              What's wrong with your window or door?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              From a stuck window to a broken handle, we help identify and
              resolve common UPVC problems.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden shrink-0 text-sm font-bold text-blue-600 transition hover:text-blue-800 sm:inline-flex sm:items-center"
          >
            Can't find your problem?
            <span className="ml-2">→</span>
          </a>
        </div>

        {/* Problem cards */}
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <ProblemCard
              key={problem.title}
              {...problem}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-7 sm:hidden">
          <a
            href="#contact"
            className="inline-flex items-center text-sm font-bold text-blue-600"
          >
            Can't find your problem?
            <span className="ml-2">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default ProblemsSection