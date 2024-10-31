import Homepage from "./components/Homepage/Homepage"
import { ThemeProvider } from "@/components/theme-provider"
import Services from "./components/Services/Services"
import Header from "./components/Header"
import HeroSection from "./components/Timeline/HeroSection"

const App = () => {
  return (
    <div className="overflow-hidden">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Homepage />
        <Services />
        <HeroSection />
      </ThemeProvider>
    </div>
  )
}

export default App