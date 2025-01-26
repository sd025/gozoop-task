import { BuildingOffice2Icon, BuildingStorefrontIcon, ChatBubbleLeftRightIcon, GlobeAltIcon, MagnifyingGlassCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline"

const features = [
  {
    icon: BuildingStorefrontIcon,
    title: "Experiential",
    description: "India's 1st C.O.R.E product offering spread across 5 lac sq.ft.",
  },
  {
    icon: GlobeAltIcon,
    title: "Sustainable",
    description: "New-age features and amenities for a greener and cleaner future",
  },
  {
    icon: UserGroupIcon,
    title: "Active",
    description: "Almost a fashion trend today, matching the evolving attitude of every new-age customers",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Smart",
    description: "40-acre lifestyle estate with smart residences",
  },
  {
    icon: MagnifyingGlassCircleIcon,
    title: "Convenient",
    description: "Life enriching conveniences now at your fingertips, both inside and outside",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Connected",
    description: "Unparalleled connectivity across the city including a metro station in close proximity",
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-20">
          <div className="font-display text-5xl tracking-tight mb-4">
            INDIA'S ONLY <span className="font-cursive text-brand-red">New-age</span> DISTRICT
            <div>
              FOR THE NEW AGE CUSTOMER OF TODAY
              </div>
            </div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-15 h-10 text-brand-red mx-auto mb-6" />
              <h3 className="font-cursive text-brand-red text-5xl mb-4">{feature.title}</h3>
              <p className="text-gray-600 font-light text-lg tracking-tight max-w-xs mx-auto">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

