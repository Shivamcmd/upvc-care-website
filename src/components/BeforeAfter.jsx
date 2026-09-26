const projects = [
  {
    title: "UPVC Window Repair",
    before: "/images/before-after/window-before.jpg",
    after: "/images/before-after/window-after.jpg",
    description:
      "Window alignment, hardware adjustment and smooth operation restoration.",
  },
  {
    title: "UPVC Door Hardware Replacement",
    before: "/images/before-after/door-before.jpg",
    after: "/images/before-after/door-after.jpg",
    description:
      "Damaged hardware replaced to improve the door's operation and locking.",
  },
  {
    title: "UPVC Glass Replacement",
    before: "/images/before-after/glass-before.jpg",
    after: "/images/before-after/glass-after.jpg",
    description:
      "Damaged glass replaced with a suitable replacement panel.",
  },
]

function BeforeAfter() {
  return (
    <section
      aria-labelledby="before-after-heading"
      className="bg-gray-50 px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="site-container">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Our Work
          </p>

          <h2
            id="before-after-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            See the difference proper repair can make.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            A few examples of common UPVC repair and replacement work.
            Actual results can vary depending on the condition of the existing
            window or door.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              {/* Images */}
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src={project.before}
                    alt={`${project.title} before repair`}
                    loading="lazy"
                    className="h-52 w-full object-cover sm:h-60"
                  />

                  <span className="absolute left-3 top-3 rounded-md bg-black/70 px-2.5 py-1 text-xs font-semibold text-white">
                    Before
                  </span>
                </div>

                <div className="relative">
                  <img
                    src={project.after}
                    alt={`${project.title} after repair`}
                    loading="lazy"
                    className="h-52 w-full object-cover sm:h-60"
                  />

                  <span className="absolute left-3 top-3 rounded-md bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white">
                    After
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Have a similar UPVC problem?
          </p>

          <a
            href="#contact"
            className="mt-3 inline-flex items-center font-semibold text-blue-600 hover:text-blue-800"
          >
            Get it checked
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter