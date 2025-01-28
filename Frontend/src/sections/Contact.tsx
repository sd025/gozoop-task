export default function Contact() {
    return (
      <section className="bg-brand-darkRed border-l-8 border-r-8 border-b-8 border-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-left text-5xl text-white mb-20">
            <div className="font-display mb-4">REGISTER NOW TO BE A PART OF</div>
            <div className="font-display">
              INDIA'S 1<sup>ST</sup> <span className="font-cursive text-black">New-Age District</span>
            </div>
          </h2>
  
          <div className="max-w-xl ">
            <h3 className="font-cursive text-white text-5xl mb-6">Contact us</h3>
  
            <form className="space-y-3">
              <input type="text" placeholder="Name" className="w-full bg-white px-6 py-4 text-lg" />
              <input type="email" placeholder="Email" className="w-full bg-white px-6 py-4 text-lg" />
              <input type="tel" placeholder="Phone" className="w-full bg-white px-6 py-4 text-lg" />
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
              <p className="text-sm text-white/70">
                Disclaimer: Buildings have registered real estate projects with Maharashtra Real Estate
                <br />
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
  
  