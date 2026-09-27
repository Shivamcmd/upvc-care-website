const reviews = [
  {
    name: "Rahul",
    location: "Delhi",
    text: "The window was not closing properly. The issue was inspected and the required repair was completed smoothly.",
    initials: "C",
  },
  {
    name: "Shivam",
    location: "Noida",
    text: "Had an issue with the UPVC handle and lock. The problem was checked and the window is working properly now.",
    initials: "C",
  },
  {
    name: "Pradeep",
    location: "Ghaziabad",
    text: "Needed glass replacement for a damaged UPVC window. The work was explained clearly and completed properly.",
    initials: "C",
  },
]

function ReviewsSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-blue-50/60 px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="site-container">

        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-600 shadow-sm ring-1 ring-blue-100">
              Customer Reviews
            </div>

            <h2
              id="reviews-heading"
              className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              What customers say about our service
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Real customer feedback can be showcased here as your service
              business grows.
            </p>
          </div>

          {/* Rating summary */}
          <div className="flex w-fit items-center gap-4 rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-extrabold text-white">
              ★
            </div>

            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-extrabold text-slate-900">
                  5.0
                </span>

                <span className="text-sm tracking-wide text-amber-500">
                  ★★★★★
                </span>
              </div>

              <p className="mt-0.5 text-xs text-slate-500">
                Customer rating
              </p>
            </div>
          </div>
        </div>
{/* Reviews */}
<div className="mt-9">
  {/* Mobile: Horizontal Swipe */}
  <div
    className="
      flex gap-4 overflow-x-auto
      snap-x snap-mandatory
      scrollbar-hide
      sm:hidden
      -mx-5 px-5
    "
  >
    {reviews.map((review) => (
      <article
        key={`${review.name}-${review.location}`}
        className="
          w-[72%]
          min-w-[72%]
          shrink-0
          snap-start
          flex flex-col
          rounded-2xl
          border border-slate-200
          bg-white
          p-4
          shadow-sm
        "
      >
        {/* Top */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-0.5 text-xs text-amber-500">
            ★★★★★
          </div>

          <span className="text-[10px] font-medium text-slate-400">
            Review
          </span>
        </div>

        {/* Review */}
        <blockquote className="mt-4 flex-1 text-sm leading-5 text-slate-600">
          “{review.text}”
        </blockquote>

        {/* Customer */}
        <div className="mt-5 flex items-center gap-2.5 border-t border-slate-100 pt-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
            {review.initials}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-slate-900">
              {review.name}
            </p>

            <p className="mt-0.5 text-[11px] text-slate-500">
              {review.location}
            </p>
          </div>

          <span className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50 text-[10px] font-bold text-green-600">
            ✓
          </span>
        </div>
      </article>
    ))}
  </div>

  {/* Tablet + Desktop */}
  <div className="hidden gap-5 sm:grid lg:grid-cols-3">
    {reviews.map((review) => (
      <article
        key={`${review.name}-${review.location}`}
        className="
          group flex h-full flex-col
          rounded-2xl
          border border-slate-200
          bg-white
          p-5
          shadow-sm
          transition duration-300
          hover:-translate-y-1
          hover:border-blue-200
          hover:shadow-lg
          sm:p-6
        "
      >
        {/* Top */}
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5 text-sm text-amber-500">
            ★★★★★
          </div>

          <span className="text-xs font-medium text-slate-400">
            Customer review
          </span>
        </div>

        {/* Review */}
        <blockquote className="mt-5 flex-1 text-sm leading-6 text-slate-600">
          “{review.text}”
        </blockquote>

        {/* Customer */}
        <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
            {review.initials}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-slate-900">
              {review.name}
            </p>

            <p className="mt-0.5 text-xs text-slate-500">
              {review.location}
            </p>
          </div>

          <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-600">
            ✓
          </span>
        </div>
      </article>
    ))}
  </div>
</div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-xl border border-blue-100 bg-white px-5 py-4 sm:flex-row sm:px-6">
          <p className="text-sm text-slate-600">
            Have a UPVC repair requirement?
            <span className="font-semibold text-slate-900">
              {" "}Talk to our service team.
            </span>
          </p>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center text-sm font-bold text-blue-600 hover:text-blue-800"
          >
            Get assistance
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection