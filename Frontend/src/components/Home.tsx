import type React from "react"
import Header from "../sections/Header"
import Banner from "../sections/Banner"
import Features from "../sections/Feature"
import Statistics from "../sections/Statistics"
import Neighborhood from "../sections/Neighborhood"
import Connectivity from "../sections/Connectivity"
import Contact from "../sections/Contact"

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Banner />
      <main>
        <Features />
        <Statistics />
        <Neighborhood />
        <Connectivity />
        <Contact />
      </main>
    </div>
  )
}

export default HomePage

