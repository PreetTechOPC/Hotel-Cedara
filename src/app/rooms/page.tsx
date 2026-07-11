import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Rooms & Suites | Best Stay in Haldwani - Cedara",
  description: "Explore our Deluxe, Premium, and Suite rooms at Cedara Hotels. Enjoy mountain views, modern amenities, and a luxury stay near Kathgodam.",
};

export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      description: "Comfortable and cozy rooms perfect for short stays. Features a comfortable bed, writing desk, and all essential modern amenities.",
      size: "25 sq.m",
      view: "Garden View",
      occupancy: "2 Adults",
      image: "/images/20260201_120610.jpg"
    },
    {
      id: 2,
      name: "Deluxe Room",
      description: "Elegant rooms with all the essential amenities for a relaxing stay. Features a plush king-size bed, writing desk, and large windows bringing in natural light.",
      size: "35 sq.m",
      view: "Valley View",
      occupancy: "2 Adults",
      image: "/images/20251216_160416.jpg"
    },
    {
      id: 3,
      name: "Premium Room",
      description: "Spacious rooms with stunning views and premium comforts. Includes a comfortable seating area, luxurious bathroom amenities, and elevated room service.",
      size: "45 sq.m",
      view: "Mountain View",
      occupancy: "2 Adults, 1 Child",
      image: "/images/20260201_115842.jpg"
    },
    {
      id: 4,
      name: "Suite",
      description: "A signature experience. This unique suite features charming interiors, premium living spaces, and panoramic views of the surrounding nature.",
      size: "75 sq.m",
      view: "Panoramic",
      occupancy: "2 Adults, 2 Children",
      image: "/images/20260201_120246.jpg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-[#333]">
      {/* Page Header */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-[#051126] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/20260201_120218.jpg" alt="Rooms & Suites" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-[#051126]/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-white/70 uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Refined Comfort</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Rooms & Suites</h1>
          <div className="w-16 h-[2px] bg-[#3a75e3] mx-auto"></div>
        </div>
      </section>

      {/* Room Listing */}
      <section className="py-24 bg-[#fcfbf9]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {rooms.map((room, index) => (
              <div key={room.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="w-full lg:w-3/5 h-[400px] md:h-[500px] relative overflow-hidden group">
                  <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <h2 className="text-3xl font-serif text-[#111] mb-4">{room.name}</h2>
                  <p className="text-gray-500 mb-8 leading-relaxed">{room.description}</p>
                  
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8 text-sm text-gray-700">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#2653d9]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                      {room.size}
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#2653d9]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                      {room.view}
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#2653d9]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                      {room.occupancy}
                    </div>
                  </div>
                  
                  <a href="/contact" className="bg-transparent border border-[#111] text-[#111] hover:bg-[#111] hover:text-white px-8 py-3 text-xs font-semibold tracking-wider transition-colors uppercase w-fit inline-block">
                    Book This Room
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
