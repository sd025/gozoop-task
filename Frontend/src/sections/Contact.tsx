import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store/store"
import { submitForm } from "../store/submissionsSlice"
import toast from "react-hot-toast"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await dispatch(submitForm({ name, email, phone })).unwrap()
      toast.success("Form submitted successfully!");
      setName("")
      setEmail("")
      setPhone("")
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("An error occurred. Please try again.")
    }
  }

    return (
      <section className="bg-brand-darkRed border-r-[16px] border-l-[16px] border-b-[32px] border-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-left text-5xl text-white mb-20">
            <div className="font-display mb-4">REGISTER NOW TO BE A PART OF</div>
            <div className="font-display">
              INDIA'S 1<sup>ST</sup> <span className="font-cursive text-black">New-Age District</span>
            </div>
          </h2>
  
          <div className="max-w-xl ">
            <h3 className="font-cursive text-white text-5xl mb-6">Contact us</h3>
  
          <form onSubmit={handleSubmit} className="space-y-3">
              <input 
                type="text" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                required
                className="w-full bg-white px-6 py-4 text-lg" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
                className="w-full bg-white px-6 py-4 text-lg" 
              />
              <input 
                type="tel" 
                placeholder="Phone" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                required
                className="w-full bg-white px-6 py-4 text-lg" 
              />
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-black text-white px-6 py-4 text-xl font-display"
              >
                SUBMIT
              </button>
            </form>
  
            <div className="mt-16 text-white/90 text-left">
              <p className="mb-6 text-md">
                Off National highway 4, Behind RAF, Near Kharghar Sector 34 Metro Station,
                Rohinjan, Maharashtra - 410208
              </p>
              <p className="mb-4 text-xs text-white/70">
                Disclaimer: Buildings have registered real estate projects with Maharashtra Real Estate
                Regulatory Authority as following: "Adhiraj Capital City Tower Oreka" with MahaRERA Registration No. LIC
                HFL
                <br />
                P52000022907 | T&C Apply
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  