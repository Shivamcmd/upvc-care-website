import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./pages/home"

import UPVCWindowRepair from "./pages/services/UPVCWindowRepair"
import UPVCDoorRepair from "./pages/services/UPVCDoorRepair"
import UPVCWindowInstallation from "./pages/services/UPVCWindowInstallation"
import UPVCGlassReplacement from "./pages/services/UPVCGlassReplacement"
import UPVCHardwareReplacement from "./pages/services/UPVCHardwareReplacement"
import UPVCMaintenance from "./pages/services/UPVCMaintenance"

import ProblemDetail from "./pages/ProblemDetail"
import ContactUs from "./pages/contactus"
import AboutUs from "./pages/aboutus"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />

        <Route
          path="/services/upvc-window-repair"
          element={<UPVCWindowRepair />}
        />

        <Route
          path="/services/upvc-door-repair"
          element={<UPVCDoorRepair />}
        />

        <Route
          path="/services/upvc-window-installation"
          element={<UPVCWindowInstallation />}
        />

        <Route
          path="/services/upvc-glass-replacement"
          element={<UPVCGlassReplacement />}
        />

        <Route
          path="/services/upvc-hardware-replacement"
          element={<UPVCHardwareReplacement />}
        />

        <Route
          path="/services/upvc-maintenance"
          element={<UPVCMaintenance />}
        />

        <Route
          path="/problems/:slug"
          element={<ProblemDetail />}
        />
        <Route
  path="/contact"
  element={<ContactUs/>}
/>
<Route
  path="/about-us"
  element={<AboutUs />}
/>
      </Route>
    </Routes>
  )
}

export default App