import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./footer"
import MobileCTA from "./MobileCTA"

function Layout() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <MobileCTA />

    </div>
  )
}

export default Layout