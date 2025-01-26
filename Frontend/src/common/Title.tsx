import type React from "react"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = "" }) => {
  return <h2 className={`text-3xl font-bold mb-8 text-center ${className}`}>{children}</h2>
}

export default SectionTitle

