import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

function ContactUs() {
const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    text: "Mon–Sun, 9 AM – 8 PM",
    value: "+91 9758927171",
    href: "tel:+919758927171",
  },
 {
  icon: FaWhatsapp,
  title: "WhatsApp",
  text: "Send photos of the problem",
  value: "Chat with us",
  href: "https://wa.me/919758927171",
},
  {
    icon: Mail,
    title: "Email",
    text: "For quotes & AMC enquiries",
    value: "upvcwindowanddoorofficial@gmail.com",
    href: "mailto:upvcwindowanddoorofficial@gmail.com",
  },
  {
    icon: MapPin,
    title: "Service Area",
    text: "Doorstep visits across NCR",
    value: "Noida • Gr. Noida • Ghaziabad • Delhi",
    href: null,
  },
];

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-50">

        {/* Soft background decoration */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />

          {/* Architectural lines */}
          <div className="absolute right-[12%] top-0 hidden h-full w-px bg-slate-200/70 lg:block" />
          <div className="absolute right-[18%] top-0 hidden h-full w-px bg-slate-200/50 lg:block" />

        </div>

        <div className="site-container relative px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">

          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <div className="mb-7 flex items-center gap-2 text-sm">

              <a
                href="/"
                className="text-slate-500 transition hover:text-blue-600"
              >
                Home
              </a>

              <span className="text-slate-300">
                /
              </span>

              <span className="font-medium text-slate-900">
                Contact Us
              </span>

            </div>


            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur">

              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                Get In Touch
              </span>

            </div>


            {/* Heading */}
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[54px] lg:leading-[1.08]">
              We’re here to help with
              <span className="block text-blue-600">
                your windows & doors.
              </span>
            </h1>


            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              From quick repairs to complete replacements, get reliable
              UPVC window and door services across the NCR.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT CARDS
      ===================================================== */}
      <section className="relative bg-slate-50 px-5 pb-12 sm:px-6 lg:px-10">

        <div className="site-container">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {contactCards.map((card) => {

              const content = (
                <div className="relative">

                  {/* Top accent */}
                  <div className="absolute left-0 top-0 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-16" />


                  <div className="flex items-start gap-4 pt-3">

                    {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
  {(() => {
    const Icon = card.icon;
    return <Icon size={22} strokeWidth={2} />;
  })()}
</div>


                    {/* Text */}
                    <div className="min-w-0">

                      <h2 className="text-sm font-extrabold text-slate-950">
                        {card.title}
                      </h2>

                      <p className="mt-1.5 text-xs leading-5 text-slate-500">
                        {card.text}
                      </p>

                      <p className="mt-2 break-words text-sm font-bold leading-5 text-blue-600">
                        {card.value}
                      </p>

                    </div>

                  </div>

                </div>
              );

              if (card.href) {
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    target={
                      card.href.startsWith("https://")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      card.href.startsWith("https://")
                        ? "noreferrer"
                        : undefined
                    }
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  {content}
                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT + FORM
      ===================================================== */}
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-6 lg:px-10 lg:py-20">

        {/* Background */}
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

        <div className="site-container relative">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">


            {/* =================================================
                LEFT CONTENT
            ================================================= */}
            <div className="flex flex-col justify-center">

              <p className="text-xs font-bold uppercase tracking-[0.17em] text-blue-600">
                Send A Message
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Let’s get your problem sorted.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                Tell us what is happening with your window or door.
                Our team can help identify the issue and arrange the
                required service.
              </p>


              {/* Contact options */}
              <div className="mt-8 space-y-3">


                {/* Call */}
                <a
                  href="tel:+919758927171"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    ☎
                  </div>

                  <div className="min-w-0">

                    <p className="text-sm font-bold text-slate-950">
                      Call directly
                    </p>

                    <p className="mt-1 text-sm text-blue-600">
                      +91 9758927171
                    </p>

                  </div>

                  <span className="ml-auto text-lg text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
                    →
                  </span>

                </a>


                {/* WhatsApp */}
                <a
                  href="https://wa.me/919758927171"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-500 group-hover:text-white">
  <FaWhatsapp size={24} />
</div>

                  <div className="min-w-0">

                    <p className="text-sm font-bold text-slate-950">
                      Send photos on WhatsApp
                    </p>

                    <p className="mt-1 text-sm text-blue-600">
                      Chat with us
                    </p>

                  </div>

                  <span className="ml-auto text-lg text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
                    →
                  </span>

                </a>


                {/* Service Area */}
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
  <MapPin size={21} strokeWidth={2} />
</div>

                  <div>

                    <p className="text-sm font-bold text-slate-950">
                      Service Area
                    </p>

                    <p className="mt-1 text-sm leading-5 text-slate-600">
                      Noida, Greater Noida, Ghaziabad & Delhi
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                FORM
            ================================================= */}
            <div className="rounded-3xl border border-slate-500 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8 lg:p-9">

              {/* Header */}
              <div className="mb-7 flex items-start justify-between gap-5">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                    Service Request
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-slate-950">
                    Tell us what you need
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-slate-500">
                    Fill in a few details and we’ll get back to you.
                  </p>

                </div>

                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:flex">
                  ✉
                </div>

              </div>


              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >

                {/* Name + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />

                  </div>

                </div>


                {/* Service */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Service Required
                  </label>

                  <select
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    <option>
                      UPVC Window Repair
                    </option>

                    <option>
                      UPVC Door Repair
                    </option>

                    <option>
                      UPVC Window Installation
                    </option>

                    <option>
                      UPVC Glass Replacement
                    </option>

                    <option>
                      Hardware Replacement
                    </option>

                    <option>
                      UPVC Maintenance
                    </option>

                  </select>

                </div>


                {/* Location */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Your Location
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your area / locality"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />

                </div>


                {/* Problem */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-800">
                    Describe the Problem
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Example: Window is not closing properly..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />

                </div>


                {/* Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-blue-700 hover:shadow-md"
                >
                  Send Service Request →
                </button>


                <p className="text-center text-xs leading-5 text-slate-400">
                  We currently respond to enquiries by phone or WhatsApp.
                </p>

              </form>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-blue-600 px-5 py-11 sm:px-6 lg:px-10">

        {/* subtle background */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="site-container relative">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Need Help?
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-white">
                Need a quick repair?
              </h2>

              <p className="mt-1 text-sm text-blue-100">
                Call us or send photos of the problem on WhatsApp.
              </p>

            </div>


            <div className="flex flex-wrap gap-3">

              <a
                href="tel:+918708238671"
                className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918708238671"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-blue-400 bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ContactUs;

