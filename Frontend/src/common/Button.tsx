import type React from "react"

interface CustomButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-brand-red text-white px-6 py-2 font-bold hover:bg-red-700 transition duration-300 transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  )
}

export default CustomButton

