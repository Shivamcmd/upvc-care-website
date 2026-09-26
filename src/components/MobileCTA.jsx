import { FaWhatsapp } from "react-icons/fa";

function MobileCTA() {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex border-t border-slate-200 bg-white p-2 shadow-[0_-4px_15px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href="tel:+918708238671"
        className="flex flex-1 items-center justify-center rounded-lg bg-blue-600 px-2 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
      >
        ☎ Call Now
      </a>

  <a
  href="https://wa.me/918708238671"
  target="_blank"
  rel="noreferrer"
  className="ml-2 flex flex-1 items-center justify-center gap-2 rounded-lg border border-green-200 bg-green-50 px-2 py-2.5 text-sm font-bold text-green-700 transition hover:bg-green-100"
>
  <FaWhatsapp className="text-xl" />
  WhatsApp
</a>
    </div>
  )
}

export default MobileCTA