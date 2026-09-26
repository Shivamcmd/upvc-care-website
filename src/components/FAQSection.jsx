import { useState } from "react"

const faqs = [
  {
    question: "How much does UPVC window repair cost?",
    answer:
      "The cost depends on the issue, required parts and amount of work involved. Common repairs such as handle, lock, roller or alignment issues can have different costs, so the exact price is usually determined after understanding the problem.",
  },
  {
    question: "Can a UPVC window handle be replaced?",
    answer:
      "Yes. A damaged, loose or faulty UPVC window handle can generally be replaced with a compatible handle after checking the existing fitting and mechanism.",
  },
  {
    question: "Can cracked UPVC window glass be replaced?",
    answer:
      "Yes. Damaged glass can usually be replaced without replacing the complete UPVC window frame, provided the frame and other components are in suitable condition.",
  },
  {
    question: "Why is my UPVC sliding window difficult to open?",
    answer:
      "A sliding window may become difficult to operate because of worn rollers, misalignment, dirt in the track or other hardware problems. An inspection can help identify the actual cause.",
  },
  {
    question: "Can a UPVC door lock be repaired?",
    answer:
      "Depending on the condition of the locking mechanism, it may be possible to repair or adjust it. If the mechanism is damaged or worn out, compatible replacement hardware may be required.",
  },
  {
    question: "Do you provide UPVC window repair at home?",
    answer:
      "Yes, doorstep service can be provided for suitable repair requirements. Service availability depends on the location and type of work required.",
  },
  {
    question: "Do you repair UPVC windows in Delhi NCR?",
    answer:
      "Service availability can cover selected areas across Delhi NCR, including Delhi, Noida, Greater Noida, Ghaziabad, Gurugram and Faridabad. Availability should be confirmed for your exact location.",
  },
  {
    question: "Should I repair my UPVC window or replace it?",
    answer:
      "It depends on the condition of the frame, glass, hardware and overall window. If the existing window can be restored properly, repair may be a practical option. Replacement may be considered when major components are beyond economical repair.",
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Frequently Asked Questions
          </p>

          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Questions about UPVC repair?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Find answers to some common questions about UPVC window and door
            repair, replacement and installation.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-base font-semibold leading-6 text-gray-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-lg text-gray-600 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] pb-5"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pr-12 text-sm leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection