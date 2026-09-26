import { Phone } from "lucide-react"

function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white px-5 py-12 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.15)]">

          {/* Decorative blue glow */}
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">

              {/* Badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-300">
                  Get In Touch
                </span>
              </div>

              {/* Heading */}
              <h2
                id="contact-heading"
                className="mt-4 max-w-md text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
              >
                Let's fix your
                <span className="block text-blue-400">
                  UPVC problem.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
                Window not closing? Broken handle? Damaged glass?
                Tell us what's wrong and we'll help you with the right
                service.
              </p>

              {/* Contact Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                {/* Call */}
                <a
                  href="tel:+918708238671"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                    <Phone
                      size={15}
                      strokeWidth={2.5}
                    />
                  </span>

                  Call Now
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918708238671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:border-slate-600 hover:bg-slate-800"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-white"
                      aria-hidden="true"
                    >
                      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.6 5.96L.03 24l6.28-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.43ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.88 9.88 0 0 1-1.52-5.28C2.15 6.43 6.58 2 12.04 2a9.85 9.85 0 0 1 7.01 2.91 9.87 9.87 0 0 1 2.9 7.02c0 5.46-4.44 9.87-9.9 9.87Zm5.42-7.4c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.86 1.2 3.06c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.49 1.68.63.71.23 1.35.2 1.86.12.57-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z" />
                    </svg>
                  </span>

                  WhatsApp
                </a>

              </div>

              {/* Trust Points */}
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-slate-800 pt-5">

                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="text-blue-400">✓</span>
                  Doorstep Service
                </span>

                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="text-blue-400">✓</span>
                  Clear Quotations
                </span>

                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="text-blue-400">✓</span>
                  UPVC Specialists
                </span>

              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="p-4 sm:p-6 lg:p-7">
              <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-6">

                {/* Form Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      Request a service
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Share your requirement and we'll get back to you.
                    </p>
                  </div>

                  <div className="hidden h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600 sm:flex">
                    →
                  </div>
                </div>

                {/* Form */}
                <form className="mt-5 space-y-3.5">

                  {/* Name + Phone */}
                  <div className="grid gap-3 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-[11px] font-bold text-slate-600"
                      >
                        NAME
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-1.5 block text-[11px] font-bold text-slate-600"
                      >
                        PHONE
                      </label>

                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>

                  </div>

                  {/* Service + Location */}
                  <div className="grid gap-3 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="contact-service"
                        className="mb-1.5 block text-[11px] font-bold text-slate-600"
                      >
                        SERVICE
                      </label>

                      <select
                        id="contact-service"
                        name="service"
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-600 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                      >
                        <option value="" disabled>
                          Select service
                        </option>

                        <option>UPVC Window Repair</option>
                        <option>UPVC Door Repair</option>
                        <option>Glass Replacement</option>
                        <option>Hardware Replacement</option>
                        <option>Window Installation</option>
                        <option>Maintenance</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-location"
                        className="mb-1.5 block text-[11px] font-bold text-slate-600"
                      >
                        LOCATION
                      </label>

                      <input
                        id="contact-location"
                        type="text"
                        name="location"
                        placeholder="City / Area"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>

                  </div>

                  {/* Requirement */}
                  <div>
                    <label
                      htmlFor="contact-problem"
                      className="mb-1.5 block text-[11px] font-bold text-slate-600"
                    >
                      YOUR REQUIREMENT
                    </label>

                    <textarea
                      id="contact-problem"
                      name="problem"
                      rows="3"
                      placeholder="Tell us briefly about the problem..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700"
                  >
                    Send Service Request

                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                  <p className="text-center text-[10px] leading-4 text-slate-400">
                    Your details are used only to respond to your service
                    enquiry.
                  </p>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection