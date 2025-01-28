const connectivityFeatures = [
  {
    title: "VIRAR ALIBAUG MULTIMODAL CORRIDOR",
    description: "126 Km, 16 lane multi-modal corridor connecting Virar, Alibaug via Taloja",
    image: "https://images.unsplash.com/photo-1585933654851-820691b3740f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9hZHRyaXB8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "PARSIK TUNNEL",
    description: "8 Km long road with 3 Km in tunnel to connect Kharghar to Turbhe",
    image: "https://images.unsplash.com/photo-1563741957649-8de4b44903c8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHR1bm5lbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "COASTAL ROAD",
    description: "8 Km road starting in Kharghar to connect to NMIA via Belapur",
    image: "https://images.unsplash.com/photo-1504598318550-17eba1008a68?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvYWR0cmlwfGVufDB8fDB8fHww",
  },
  {
    title: "MUMBAI MARINA",
    description: "Proposed Navi Mumbai Marina, spanning across 3 acres",
    image: "https://images.unsplash.com/photo-1532556884697-26324ee63594?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvYXRzJTIwZG9ja3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function Connectivity() {
  return (
    <section className="bg-brand-darkRed py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white mb-20 text-5xl">
          <div className="font-display mb-2">
            SEAMLESS <span className="font-cursive text-black">Connectivity</span>
          </div>
          <div className="font-display">TO MUMBAI & MORE</div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-white">
          {connectivityFeatures.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-visible transform hover:-translate-y-2 transition duration-300"
            >
              <div className="text-center my-6">
                <h3 className="font-display text-md text-black">{feature.title}</h3>
              </div>
              <div className="relative -translate-y-4 z-10">
                <img
                  src={feature.image || "placeholder"}
                  alt={feature.title}
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6 text-center relative z-0">
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
