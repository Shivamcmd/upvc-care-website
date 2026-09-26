function TrustBar() {
  const items = [
    {
      title: "Doorstep Service",
      text: "At your location",
    },
    {
      title: "Clear Quotations",
      text: "Understand the work",
    },
    {
      title: "Quality Parts",
      text: "Suitable replacements",
    },
    {
      title: "Repair Specialists",
      text: "Windows & doors",
    },
  ]

  return (
    <section className="border-y border-[#e7ded5] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`flex items-center gap-3 px-5 py-5 lg:px-7 ${
              index !== items.length - 1
                ? "border-b border-[#e7ded5] lg:border-b-0 lg:border-r"
                : ""
            }`}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3e4dc] text-sm font-bold text-[#c65d32]">
              ✓
            </span>

            <div>
              <p className="text-xs font-bold text-[#24201d] sm:text-sm">
                {item.title}
              </p>

              <p className="mt-0.5 text-[11px] text-[#756f69] sm:text-xs">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar