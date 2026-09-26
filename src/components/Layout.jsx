import { Outlet } from "react-router-dom"

import Footer from "./footer"
import MobileCTA from "./MobileCTA"
import Navbar from "./Navbar"


function Layout() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar/>

      <main>
        <Outlet />
      </main>

      <Footer />

      <MobileCTA />

    </div>
  )
}

export default Layout