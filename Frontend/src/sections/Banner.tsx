import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import CustomButton from "../common/Button"
import photo from "../assets/photo.avif"
import { Link } from "react-router-dom"

const Banner: React.FC = () => {
  const carouselItems = [
    {
      image: photo,
      title1: "INDIA'S BIGGEST",
      title2: "REAL ESTATE",
      subtitle: "Uprising",
    },
    {
      image: "https://images.unsplash.com/photo-1589779255235-85dc2a054145?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title1: "LUXURIOUS",
      title2: "PROPERTIES",
      subtitle: "Discover",
    },
  ]

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
      transitionTime={500}
      swipeable={true}
      emulateTouch={true}
    >
      {carouselItems.map((item, index) => (
        <div key={index} className="relative h-screen w-full border-8 border-white overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${item.image})`,
              filter: "brightness(50%) saturate(150%)",
            }}
          ></div>

          <div className="absolute inset-y-0 left-0 w-1/2 bg-red-950/70 z-10"></div>

          <div className="relative z-20 h-full flex flex-col items-center justify-center">
            <div className="text-left">
              <h2 className="text-white md:text-7xl font-semibold font-display text-6xl tracking-tight mb-6">
              <span >{item.title1}</span>
              <br />
              <span >{item.title2}</span>
              <br />
              <span className="font-cursive text-center block">{item.subtitle}</span>
              </h2>
              <div className="flex justify-center">
                <Link to="/form">
                  <CustomButton className="font-display bg-red-500 text-3xl hover:bg-red-700 text-white font-medium px-4 py-1 transition duration-300">
                    ENQUIRE NOW
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Banner
