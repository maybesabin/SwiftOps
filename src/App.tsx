import Homepage from "./components/Homepage/Homepage"
import { ThemeProvider } from "@/components/Theme Providers/theme-provider"
import Services from "./components/Services/Services"
import Header from "./components/Header/Header"
import HeroSection from "./components/Timeline/HeroSection"
import Pricing from "./components/Pricing/Pricing"
import Testimonials from "./components/Testimonials/Testimonials"
import FAQ from "./components/FAQ/FAQ"

const App = () => {
  return (
    <div className="overflow-hidden">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Homepage />
        <Services />
        <HeroSection />
        <Pricing />
        <Testimonials />
        <FAQ />
      </ThemeProvider>
    </div>
  )
}

export default App