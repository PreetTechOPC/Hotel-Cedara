"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const slides = [
    {
      image: "/images/20251216_160416.jpg",
      title: "Where Luxury Meets Serenity",
      subtitle: "Experience exceptional comfort, warm hospitality, and unforgettable moments at Cedara Hotels & Retreats."
    },
    {
      image: "/images/20260201_115824.jpg",
      title: "Nature's Perfect Getaway",
      subtitle: "Wake up to breathtaking views and the soothing sounds of the surrounding landscape."
    },
    {
      image: "/images/20260201_120218.jpg",
      title: "Refined Elegance",
      subtitle: "Every detail crafted to provide an atmosphere of pure relaxation and sophistication."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const roomsSliderRef = useRef<HTMLDivElement>(null);

  const scrollRooms = (direction: 'left' | 'right') => {
    if (roomsSliderRef.current) {
      const scrollAmount = roomsSliderRef.current.clientWidth;
      roomsSliderRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const roomsData = [
    {
      name: "Standard Room",
      description: "Comfortable and cozy rooms perfect for short stays. Features a comfortable bed, writing desk, and all essential modern amenities.",
      image: "/images/20260201_120610.jpg"
    },
    {
      name: "Deluxe Room",
      description: "Elegant rooms with all the essential amenities for a relaxing stay. Features a plush king-size bed, writing desk, and large windows bringing in natural light.",
      image: "/images/20251216_160416.jpg"
    },
    {
      name: "Premium Room",
      description: "Spacious rooms with stunning views and premium comforts. Includes a comfortable seating area, luxurious bathroom amenities, and elevated room service.",
      image: "/images/20260201_115842.jpg"
    },
    {
      name: "Suite",
      description: "Indulge in luxury with extra space, style, and exclusive services.",
      image: "/images/20260201_120246.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-[#333]">
      <h1 className="sr-only">Cedara Hotels & Retreats - The Best Luxury Hotel in Haldwani, near Kathgodam and Nainital. A premium, family and business boutique hotel in Kumaon.</h1>
      {/* Hero Section */}
      <section id="home" className="relative w-full h-[100vh] flex items-center bg-[#051126] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={slide.image}
              alt={`Hero Background ${index + 1}`}
              fill
              className="object-cover object-center opacity-60"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#051126] via-[#051126]/80 to-transparent"></div>
          </div>
        ))}
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 mt-20">
          <div className="min-h-[200px]">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-[1.1] max-w-2xl font-light transition-all duration-700 ease-out transform translate-y-0 opacity-100">
              {slides[currentSlide].title.split(' ').map((word, i, arr) => 
                i === arr.length - 1 ? <span key={i} className="text-[#3a75e3]"> {word}</span> : (i === arr.length - 2 ? ` ${word}` : `${word} `)
              )}
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light max-w-md mb-10 leading-relaxed transition-all duration-700 ease-out delay-100">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          <div className="flex gap-4">
            <a href="/rooms" className="bg-[#2653d9] hover:bg-[#1d40a8] text-white px-8 py-3 text-xs font-semibold tracking-wider transition-colors uppercase flex items-center gap-3 w-fit inline-flex">
              Explore Rooms <span>→</span>
            </a>
          </div>
        </div>
        
        {/* Slider Navigation */}
        <div onClick={prevSlide} className="absolute left-6 lg:left-12 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer text-white/50 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7"></path></svg>
        </div>
        <div onClick={nextSlide} className="absolute right-6 lg:right-12 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer text-white/50 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7"></path></svg>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-1 cursor-pointer transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/60'}`}
            ></div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-12 -top-12 opacity-10 pointer-events-none">
                <Image src="/cedara-white-icon.png" alt="Overlay" width={300} height={300} className="filter invert" />
              </div>
              <div className="relative h-[600px] rounded-sm overflow-hidden">
                <Image src="/images/20260201_115824.jpg" alt="About Cedara" fill className="object-cover" />
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4 text-[#2653d9] text-xs font-bold tracking-widest uppercase">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#111] mb-6">A Peaceful Hotel in Uttarakhand</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Experience a truly premium stay in Haldwani. Nestled in breathtaking landscapes, Cedara is the perfect weekend getaway in Uttarakhand. Whether you are seeking a family hotel in Haldwani, a corporate retreat, or a luxury stay in Kumaon, our properties are designed to be a seamless extension of their surroundings.
              </p>
              <a href="/about" className="border border-[#2653d9] text-[#2653d9] hover:bg-[#2653d9] hover:text-white px-8 py-3 text-xs font-semibold tracking-wider transition-colors uppercase flex items-center gap-3 w-fit mb-16 inline-flex">
                Discover More <span>→</span>
              </a>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-10">
                <div className="flex gap-4">
                  <div className="text-[#2653d9] flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[#111] font-bold text-sm mb-1">Luxurious Rooms</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Comfortable rooms with modern amenities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#2653d9] flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[#111] font-bold text-sm mb-1">Scenic Locations</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Beautiful views and serene environments.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#2653d9] flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[#111] font-bold text-sm mb-1">Warm Hospitality</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Our team ensures a memorable stay.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#2653d9] flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[#111] font-bold text-sm mb-1">Premium Amenities</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Everything you need for a perfect experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms & Suites Section */}
      <section id="rooms" className="py-24 bg-[#fcfbf9]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative">
          <div className="flex items-center justify-center gap-3 mb-4 text-[#2653d9] text-xs font-bold tracking-widest uppercase">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            Rooms & Suites
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#111] mb-16">Comfort Tailored For You</h2>
          
          <div 
            ref={roomsSliderRef}
            className="flex overflow-x-auto gap-8 snap-x snap-mandatory hide-scrollbar pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {roomsData.map((room, index) => (
              <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] flex-shrink-0 bg-white rounded-sm overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left group snap-start">
                <div className="relative h-64 overflow-hidden">
                  <Image src={room.image} alt={room.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#111] mb-3">{room.name}</h3>
                  <p className="text-gray-500 text-sm mb-6">{room.description}</p>
                  <a href="/rooms" className="text-[#2653d9] font-semibold text-xs tracking-wider uppercase flex items-center gap-2 hover:gap-3 transition-all">View Details <span>→</span></a>
                </div>
              </div>
            ))}
          </div>
          
          <div onClick={() => scrollRooms('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hidden lg:flex -ml-6 cursor-pointer bg-white p-3 rounded-full shadow-lg text-gray-500 hover:text-[#2653d9] items-center justify-center transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </div>
          <div onClick={() => scrollRooms('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden lg:flex -mr-6 cursor-pointer bg-white p-3 rounded-full shadow-lg text-gray-500 hover:text-[#2653d9] items-center justify-center transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-[#163b8b] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/cedara-white-icon.png')", backgroundRepeat: 'repeat', backgroundSize: '120px' }}></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4 text-white/80 text-xs font-bold tracking-widest uppercase">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            Amenities
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-16">Designed For Your Comfort</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 mb-4 stroke-1" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
              <span className="text-sm font-semibold">Restaurant</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 mb-4 stroke-1" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m10 20-3-3 3-3"/><path d="m14 20 3-3-3-3"/><path d="M12 22V12"/><path d="m20 10-3 3-3-3"/><path d="m20 14-3-3-3 3"/><path d="M22 12h-10"/><path d="m14 4 3 3-3 3"/><path d="m10 4-3 3 3 3"/><path d="M12 2v10"/><path d="m4 14 3-3-3-3"/><path d="m4 10 3 3 3-3"/><path d="M2 12h10"/></svg>
              <span className="text-sm font-semibold">A/C Rooms</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 mb-4 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>
              <span className="text-sm font-semibold">Free Wi-Fi</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 mb-4 stroke-1" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
              <span className="text-sm font-semibold">Room Service</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 mb-4 stroke-1" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
              <span className="text-sm font-semibold">Free Parking</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 mb-4 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="text-sm font-semibold">24/7 Front Desk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4 text-[#2653d9] text-xs font-bold tracking-widest uppercase">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#111] mb-12">Moments of <span className="text-[#2653d9]">Cedara</span></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <div className="relative h-48 md:h-64 rounded-sm overflow-hidden group">
              <Image src="/images/20260201_115058.jpg" alt="Gallery Image 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-48 md:h-64 rounded-sm overflow-hidden group">
              <Image src="/images/20251216_160422.jpg" alt="Gallery Image 2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-48 md:h-64 rounded-sm overflow-hidden group">
              <Image src="/images/20251216_160529.jpg" alt="Gallery Image 3" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-48 md:h-64 rounded-sm overflow-hidden group">
              <Image src="/images/20260201_115824.jpg" alt="Gallery Image 4" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-48 md:h-64 rounded-sm overflow-hidden group hidden md:block">
              <Image src="/images/20260201_120218.jpg" alt="Gallery Image 5" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
          
          <a href="/gallery" className="border border-gray-300 text-gray-600 hover:border-[#2653d9] hover:text-[#2653d9] px-8 py-3 text-xs font-semibold tracking-wider transition-colors uppercase flex items-center gap-3 w-fit mx-auto inline-flex">
            View Gallery <span>→</span>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#eaf1fa]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="text-[#2653d9]">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-[#111] mb-1">Ready to Experience Cedara?</h3>
                <p className="text-[#2653d9] text-sm">Book your stay today and create unforgettable memories.</p>
              </div>
            </div>
            <a href="/contact" className="bg-[#2653d9] hover:bg-[#1d40a8] text-white px-8 py-4 text-xs font-semibold tracking-wider transition-colors uppercase flex items-center gap-3 shadow-lg flex-shrink-0">
              Book Your Stay <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
