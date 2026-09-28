import photo7 from "../assets/images/randomphoto.png";
const benefits = [
  {
    number: "01",
    title: "Doorstep Service",
    description:
      "Get your UPVC windows and doors inspected and serviced at your home or workplace.",
  },
  {
    number: "02",
    title: "Experienced Technicians",
    description:
      "Our technicians handle common UPVC window, door and hardware repair requirements.",
  },
  {
    number: "03",
    title: "Clear Quotations",
    description:
      "Understand the required work and estimated cost before proceeding with the repair.",
  },
  {
    number: "04",
    title: "Quality Replacement Parts",
    description:
      "Suitable replacement handles, locks, rollers and other compatible components.",
  },
  {
    number: "05",
    title: "Repair Before Replacement",
    description:
      "Where practical, we check whether the existing window or door can be repaired.",
  },
  {
    number: "06",
    title: "Residential & Commercial",
    description:
      "Service solutions for homes, apartments, offices, shops and other properties.",
  },
]

function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-us-heading"
      className="bg-slate-50 px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="site-container">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Why Choose Us
          </p>

          <h2
            id="why-us-heading"
            className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Reliable UPVC service without unnecessary hassle.
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            We focus on identifying the actual problem and providing a
            practical repair or replacement solution.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-9 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">

          {/* Image */}
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-blue-100">
            <img
              src={photo7}
              alt="UPVC window technician providing repair service"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />

            {/* Image content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Professional Service
              </div>

              <p className="mt-3 max-w-sm text-xl font-bold leading-tight text-white">
                Repair what can be repaired. Replace what needs replacing.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="border-t border-slate-200 pt-4"
              >
                <div className="flex items-start gap-3">

                  {/* Number */}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10px] font-extrabold text-blue-600">
                    {benefit.number}
                  </span>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs