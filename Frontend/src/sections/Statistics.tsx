import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

export default function ConsumerStats() {
  const stats = [
    { percentage: "33%", label: "of India's Population" },
    { percentage: "400 MN", label: "Customer Category Size" },
    { percentage: "50%", label: "of India's Workforce" },
    { percentage: "71%", label: "India's Household Income Contributor" },
    { percentage: "74%", label: "Considering home buying post covid across MMR" },
  ];

  const customerSpeak = [
    {
      quote: "I hate the crowded, unplanned localities of MMR. I wish there was something truly remarkable to live in.",
      position: { top: "5%", left: "15%" },
      size: "h-20 w-20 md:h-32 md:w-32",
      overlay: "bg-red-500/40",
      imageSrc: "https://images.unsplash.com/photo-1542596594-649edbc13630?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwZnVufGVufDB8fDB8fHww",
    },
    {
      quote: "I need amenities but not 100s. Only what me and my young family aspire for.",
      position: { top: "30%", left: "60%" },
      size: "h-24 w-24 md:h-48 md:w-48",
      overlay: "bg-black/40",
      imageSrc: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "What's outside the development is as important as what's inside.",
      position: { top: "50%", left: "20%" },
      size: "h-16 w-16 md:h-24 md:w-24",
      overlay: "bg-red-500/40",
      imageSrc: "https://plus.unsplash.com/premium_photo-1682546068715-386bd3c676e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlJTIwZnVufGVufDB8fDB8fHww",
    },
    {
      quote: "My address should define who I am and not just a place where I go after work.",
      position: { top: "70%", left: "65%" },
      size: "h-20 w-20 md:h-40 md:w-40",
      overlay: "",
      imageSrc: "https://media.istockphoto.com/id/2155475484/photo/happy-couple-laughing-while-working-out-in-the-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=cEV7il7TziKHpUuxNgm7vj2XVHcnqjd8C-gL_TClF4U=",
    },
    {
      quote: "I need amenities to socialize, improve health and stay connected.",
      position: { top: "85%", left: "30%" },
      size: "h-20 w-20 md:h-36 md:w-36",
      overlay: "bg-red-500/40",
      imageSrc: "https://media.istockphoto.com/id/1215125308/photo/happy-little-boy-having-fun-with-his-mother-during-summer-day-in-the-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=Puis0JLtjWLrjQmEjMAD1LXz-B5-deSbFh5oLusbOPk=",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-100 px-4 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-3xl font-medium font-display tracking-tight md:text-4xl lg:text-5xl">
          FOR THE <span className="font-cursive text-brand-red">New-Age</span> 
          <div>
            GLOBAL CONSUMER
          </div>
        </h2>

        <div className="relative flex flex-col gap-16 lg:flex-row lg:gap-8">
          <div className="relative flex w-full flex-col items-center gap-8 lg:w-[40%]">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`relative w-full max-w-[230px] ${
                  index % 2 === 0 ? 'lg:translate-x-12' : 'lg:-translate-x-12'
                }`}
              >
                <div className="relative z-10 border border-gray-400 p-4 text-brand-red shadow-sm transition-transform duration-300 hover:-translate-y-1 md:p-6">
                  <div className="text-center text-3xl font-medium font-display md:text-4xl lg:text-5xl">
                    {stat.percentage}
                  </div>
                  <div className="mt-2 text-center text-xs font-light md:text-sm">
                    {stat.label}
                  </div>
                </div>
                {/* <div className="absolute right-0 top-1/2 z-0 h-px w-[400px] -translate-y-1/2 border-b border-dashed border-gray-300" /> */}
              </div>
            ))}
          </div>
          <div className="relative h-[600px] w-full lg:h-[800px] lg:w-[60%]">
            <h3 className="absolute right-40 top-0 text-xl font-light font-display md:text-2xl">
              CUSTOMER <span className="font-cursive text-brand-red">Speak</span>
            </h3>

            <div className="relative h-full">
              {customerSpeak.map((item, index) => (
                <div
                  key={index}
                  className="absolute transform"
                  style={{
                    top: item.position.top,
                    left: item.position.left,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className={`relative ${item.size} overflow-hidden rounded-full transition-transform duration-300 hover:scale-105`}>
                    <img 
                      src={item.imageSrc}
                      alt="" 
                      className="h-full w-full object-cover" 
                    />
                    <div className={`absolute inset-0 ${item.overlay}`} />
                  </div>
                  <div className="absolute left-1/2 top-full mt-2 w-48 -translate-x-1/2 text-center text-xs text-gray-600 md:text-sm">
                  <ChatBubbleOvalLeftIcon className="absolute -left-2 -top-2 h-4 w-4 text-brand-red" />
                    <span className="text-lg md:text-xl">"</span>
                    {item.quote}
                    <span className="text-lg md:text-xl">"</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
