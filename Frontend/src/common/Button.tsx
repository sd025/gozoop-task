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
      className={`bg-red-600 text-white px-6 py-2 rounded-full text-lg font-bold hover:bg-red-700 transition duration-300 ${className}`}
    >
      {children}
    </button>
  )
}

export default CustomButton

