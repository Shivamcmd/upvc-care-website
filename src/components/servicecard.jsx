
function ServiceCard({ title, description, image, href }) {
  return (
    <article
      className="
        group flex h-full flex-col overflow-hidden
        rounded-2xl border-2 border-gray-200
        bg-white
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-400
        hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)]
      "
    >
      {/* Image */}
      <div className="relative m-2 mb-0 aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Subtle overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/20 to-transparent
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />
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

        <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
          {description}
        </p>

        {/* Divider */}
        <div className="my-4 h-px w-full bg-gray-100" />

        <a
          href={href}
          className="
            inline-flex w-fit items-center
            text-sm font-semibold text-blue-600
            transition-all duration-300
            hover:text-blue-800
          "
        >
          Explore service

          <span
            className="
              ml-2
              transition-transform duration-300
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

export default ServiceCard

