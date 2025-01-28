import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

const ScrollToggle = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isAtBottom, setIsAtBottom] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  
        setIsVisible(scrollPosition > 200)
        setIsAtBottom(scrollPosition >= maxScroll - 50)
      }
  
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  
    const handleScrollClick = () => {
      window.scrollTo({
        top: isAtBottom ? 0 : document.documentElement.scrollHeight,
        behavior: "smooth",
      })
    }
  
    return (
      <div className="fixed bottom-5 right-5 z-[999]">
        {isVisible && (
          <button
            onClick={handleScrollClick}
            className="p-3 bg-white text-brand-darkRed rounded-full shadow-lg hover:bg-red-100 transition"
          >
            {isAtBottom ? (
              <ChevronUpIcon className="h-6 w-6" />
            ) : (
              <ChevronDownIcon className="h-6 w-6" />
            )}
          </button>
        )}
      </div>
    )
  }
  
  export default ScrollToggle