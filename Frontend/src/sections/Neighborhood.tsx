import photo from "../assets/map.png";

const locations = [
  {
    category: "RECREATION",
    description: "An 18-hole golf course, spread across 103 hectares - Kharghar Golf Course Valley",
  },
  {
    category: "SPIRITUALITY",
    description: "A spiritual epicentre spread over 8-acres - Iskcon temple",
  },
  {
    category: "LEISURE",
    description: "Spanning over 290 acres and 3rd largest in the world - Central Park, Kharghar",
  },
  {
    category: "LIFESTYLE",
    description: "Inspired & designed on the lines of vibrant shopping avenues - Mall & Retail",
  },
  {
    category: "BUSINESS",
    description: "The 345-acre CIDCO commissioned business district on the lines of BKC",
  },
]

export default function Neighborhood() {
  return (
    <section className="py-24 bg-[#E5E5E6]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-5xl mb-20">
          INDIA'S ONLY <span className="font-cursive text-brand-red">Next-gen</span>
          <br />
          NEIGHBORHOOD
        </h2>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <img src={photo} alt="Neighborhood Map" className="w-full h-full" loading="lazy"/>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            {locations.map((location, index) => (
              <div key={index}>
                <h3 className="text-lg mb-0">
                  <span>{location.category}:</span>
                </h3>
                <p className="text-gray-500 text-sm">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

