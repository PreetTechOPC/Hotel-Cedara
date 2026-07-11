"use client";

import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const images = [
    "/images/20251216_160416.jpg",
    "/images/20251216_160422.jpg",
    "/images/20251216_160455.jpg",
    "/images/20251216_160509.jpg",
    "/images/20251216_160529.jpg",
    "/images/20251216_160540.jpg",
    "/images/20251216_160952.jpg",
    "/images/20260201_115058.jpg",
    "/images/20260201_115824.jpg",
    "/images/20260201_120216.jpg",
    "/images/20260201_120610.jpg",
    "/images/20260201_120246.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-[#333]">
      {/* Page Header */}
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-[#051126] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/20260201_120218.jpg" alt="Gallery" fill className="object-cover opacity-30" priority />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Gallery</h1>
          <div className="w-16 h-[2px] bg-[#3a75e3] mx-auto"></div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, idx) => (
              <div 
                key={idx} 
                className="relative aspect-square overflow-hidden group cursor-pointer bg-gray-100"
                onClick={() => openLightbox(idx)}
              >
                <Image src={src} alt={`Gallery image ${idx + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            onClick={closeLightbox}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 md:left-12 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={prevImage}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-12 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={nextImage}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-5xl h-[80vh] px-16" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={images[currentIndex]} 
              alt={`Gallery image ${currentIndex + 1}`} 
              fill 
              className="object-contain" 
              priority
            />
          </div>
          
          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 font-semibold tracking-widest text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
