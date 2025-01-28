import type React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../store/store"
import { submitForm } from "../store/submissionsSlice"
import Header from "../sections/Header"
import CustomInput from "../common/Input"
import CustomButton from "../common/Button"
import SectionTitle from "../common/Title"

const FormPage: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await dispatch(submitForm({ name, email })).unwrap()
      alert("Form submitted successfully!")
      setName("")
      setEmail("")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SectionTitle>REGISTER NOW TO BE A PART OF INDIA'S 1ST New-Age District</SectionTitle>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <CustomInput
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <CustomInput
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
            />
          </div>
          <CustomButton type="submit" className="w-full">
            SUBMIT
          </CustomButton>
        </form>
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Off National highway 4, Behind RAF, Near Kharghar Sector 34 Metro Station,</p>
          <p>Rohinjan, Maharashtra - 410208</p>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Disclaimer: Buildings have registered real estate projects with Maharashtra Real Estate</p>
          <p>
            Regulatory Authority as following: "Adhiraj Capital City Tower Oreka" with MahaRERA Registration No. LIC HFL
          </p>
          <p>P52000022907 | T&C Apply</p>
        </div>
      </main>
    </div>
  )
}

export default FormPage

