import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-[#333]">
      {/* Page Header */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-[#051126] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/20260201_115824.jpg" alt="About Cedara" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-[#051126]/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-white/70 uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Discover Our Heritage</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">About Us</h1>
          <div className="w-16 h-[2px] bg-[#3a75e3] mx-auto"></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#111] mb-6">Our Story</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Cedara Hotels and Retreats began with a simple vision: to create a sanctuary where the elegance of luxury hospitality meets the untamed beauty of nature. Nestled in breathtaking landscapes, our properties are designed to be a seamless extension of their surroundings.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Over the years, we have cultivated a reputation for unmatched service, architectural brilliance, and a commitment to preserving the serenity of our locales. Every Cedara property tells a story of passion, dedication, and a deep-rooted love for hospitality.
              </p>
            </div>
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
              <Image src="/images/20251216_160540.jpg" alt="Our Story" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#fcfbf9]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 shadow-sm border-t-4 border-[#2653d9]">
              <h3 className="text-2xl font-serif text-[#111] mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                To be the world's most sought-after luxury retreat, recognized for transforming ordinary moments into extraordinary memories through intuitive service, stunning design, and a profound connection to nature.
              </p>
            </div>
            <div className="bg-white p-12 shadow-sm border-t-4 border-[#2653d9]">
              <h3 className="text-2xl font-serif text-[#111] mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To curate exceptional guest experiences by combining state-of-the-art amenities with warm, personalized hospitality, ensuring that every stay at Cedara leaves a lasting imprint on the heart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Philosophy */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-5 pointer-events-none w-1/2 h-full">
          <Image src="/cedara-white-icon.png" alt="Overlay" fill className="object-contain filter invert" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#111] mb-8">Our Hospitality Philosophy</h2>
          <div className="w-16 h-[2px] bg-[#2653d9] mx-auto mb-12"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 font-light italic leading-relaxed">
            "We believe that true luxury is not just found in opulent surroundings, but in the sincerity of a smile, the anticipation of a need, and the warmth of a welcome. At Cedara, you are not just a guest; you are family."
          </p>
        </div>
      </section>
    </div>
  );
}
