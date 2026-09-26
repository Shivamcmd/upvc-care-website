function ProblemCard({ title, description, image }) {
  return (
    <article
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-2xl border-2 border-gray-200 bg-white
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-400
        hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)]
      "
    >
      {/* Top Accent */}
      <div
        className="
          absolute left-0 right-0 top-0 z-10 h-1
          bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400
          opacity-70 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Image */}
   {/* Image */}
<div className="relative m-2 mb-0 h-56 overflow-hidden rounded-xl bg-gray-100 sm:h-60">
  <img
    src={image}
    alt={title}
    loading="lazy"
    className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  {/* Image Overlay */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-t from-black/45 via-black/5 to-transparent
      opacity-0 transition-opacity duration-300
      group-hover:opacity-100
    "
  />

  {/* Image Badge */}
  <div
    className="
      absolute left-3 top-3
      rounded-full bg-white/90 px-3 py-1
      text-xs font-semibold text-blue-700
      shadow-sm backdrop-blur-sm
    "
  >
    UPVC Care
  </div>
</div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        <h3
          className="
            text-lg font-bold leading-snug text-gray-900
            transition-colors duration-300
            group-hover:text-blue-700
            sm:text-xl
          "
        >
          {title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
          {description}
        </p>

        {/* Divider */}
        <div className="my-4 h-px w-full bg-gray-100" />

        <a
          href="#contact"
          className="
            inline-flex w-fit items-center
            text-sm font-semibold text-blue-600
            transition-all duration-300
            hover:text-blue-800
          "
        >
          Get it fixed

          <span
            className="
              ml-2 transition-transform duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </a>

      </div>
    </article>
  )
}

export default ProblemCard