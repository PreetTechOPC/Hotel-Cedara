"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute w-full top-0 z-50 bg-transparent text-white border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/cedara-white-logo.png"
                alt="Cedara Hotels Logo"
                width={250}
                height={80}
                className="h-10 sm:h-14 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          
          <nav className="hidden xl:flex space-x-8 text-xs font-semibold tracking-wider uppercase">
            <Link href="/" className="hover:text-[#2653d9] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#2653d9] transition-colors">About Us</Link>
            <Link href="/rooms" className="hover:text-[#2653d9] transition-colors">Rooms & Suites</Link>
            <Link href="/amenities" className="hover:text-[#2653d9] transition-colors">Amenities</Link>
            <Link href="/gallery" className="hover:text-[#2653d9] transition-colors">Gallery</Link>
            <Link href="/contact" className="hover:text-[#2653d9] transition-colors">Contact</Link>
          </nav>
          
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="bg-[#2653d9] hover:bg-[#1d40a8] text-white px-8 py-3 text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-blue-900/20 inline-block">
              Book Now
            </Link>
          </div>

          <div className="xl:hidden flex items-center gap-4">
            <Link href="/contact" className="md:hidden bg-[#2653d9] text-white px-4 py-2 text-[10px] font-semibold uppercase tracking-wider transition-colors">
              Book
            </Link>
            <button 
              className="text-white p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#051126] absolute top-24 left-0 w-full border-t border-white/10 shadow-xl overflow-hidden">
          <nav className="flex flex-col px-6 py-6 space-y-4 text-sm font-semibold tracking-wider uppercase text-white">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2653d9] transition-colors border-b border-white/10 pb-4">Home</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2653d9] transition-colors border-b border-white/10 pb-4">About Us</Link>
            <Link href="/rooms" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2653d9] transition-colors border-b border-white/10 pb-4">Rooms & Suites</Link>
            <Link href="/amenities" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2653d9] transition-colors border-b border-white/10 pb-4">Amenities</Link>
            <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2653d9] transition-colors border-b border-white/10 pb-4">Gallery</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2653d9] transition-colors border-b border-white/10 pb-4">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
