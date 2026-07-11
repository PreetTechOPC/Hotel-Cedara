import Image from "next/image";

export default function AmenitiesPage() {
  const amenities = [
    { title: "Gourmet Restaurant", desc: "Enjoy our on-site restaurant and table service.", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
    { title: "Air Conditioning", desc: "Climate-controlled rooms for your ultimate comfort.", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Free Wi-Fi", desc: "Stay connected seamlessly throughout the property.", icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" },
    { title: "24/7 Room Service", desc: "Enjoy our extensive menu from the comfort of your room.", icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Free Parking", desc: "Ample, secure free parking space for your convenience.", icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" },
    { title: "24-Hour Front Desk", desc: "Our concierge team is always available to assist you.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-[#333]">
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-[#051126] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/20260201_115058.jpg" alt="Amenities" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-[#051126]/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-white/70 uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Exceptional Services</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Amenities</h1>
          <div className="w-16 h-[2px] bg-[#3a75e3] mx-auto"></div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute left-0 top-0 opacity-5 pointer-events-none w-1/2 h-full">
          <Image src="/cedara-white-icon.png" alt="Overlay" fill className="object-contain filter invert" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {amenities.map((item, idx) => (
              <div key={idx} className="bg-[#fcfbf9] p-10 text-center shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-[#2653d9]">
                  <svg className="w-10 h-10 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon}></path></svg>
                </div>
                <h3 className="text-xl font-serif text-[#111] mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
