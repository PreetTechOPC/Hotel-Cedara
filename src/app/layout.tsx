import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cedara Hotels & Retreats | Luxury Hotel in Haldwani, Uttarakhand",
  description: "Experience luxury and comfort at Cedara Hotels & Retreats in Haldwani. Spacious rooms, modern amenities, warm hospitality, and easy access to Nainital, Kathgodam, and Kumaon attractions.",
  keywords: [
    "Hotel in Haldwani",
    "Best Hotel in Haldwani",
    "Luxury Hotel in Haldwani",
    "Hotels in Haldwani",
    "Budget Hotel in Haldwani",
    "Premium Hotel Haldwani",
    "Boutique Hotel in Haldwani",
    "Family Hotel in Haldwani",
    "Business Hotel Haldwani",
    "Hotel near Kathgodam",
    "Hotel near Nainital",
    "Hotels near Nainital",
    "Luxury Stay in Kumaon",
    "Hotel with Mountain View",
    "Weekend Getaway Uttarakhand",
    "Stay in Haldwani",
    "Best Stay in Haldwani",
    "Luxury Retreat Uttarakhand",
    "Hotels in Kumaon",
    "Nature Retreat Haldwani",
    "Peaceful Hotel in Uttarakhand"
  ],
  icons: {
    icon: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="bg-[#f9f9f9] text-[#333] min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        <Header />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <footer className="bg-[#0b1b3d] text-white pt-16 pb-6 border-t border-[#122852]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-16">
              <div className="xl:col-span-2">
                <Image
                  src="/cedara-white-logo.png"
                  alt="Cedara Hotels Logo"
                  width={220}
                  height={70}
                  className="h-12 w-auto object-contain mb-6"
                />
                <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
                  Cedara Hotels and Retreats offers a harmonious blend of luxury, comfort, and nature.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wider uppercase mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/rooms" className="hover:text-white transition-colors">Rooms & Suites</a></li>
                  <li><a href="/amenities" className="hover:text-white transition-colors">Amenities</a></li>
                  <li><a href="/gallery" className="hover:text-white transition-colors">Gallery</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wider uppercase mb-6">Contact Us</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>3rd, 4th and, 5th floors of the pride hospital, Panchakki Rd,<br/>Amba Vihar, Azad Nagar, Heera Nagar,<br/>Bamoritalli Bandobasti, Haldwani,<br/>Uttarakhand 263139</li>
                  <li>090844 50098</li>
                  <li>info@cedarahotels.com</li>
                </ul>
                <h4 className="text-sm font-semibold tracking-wider uppercase mt-8 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>

            </div>
            
            <div className="pt-6 border-t border-[#1e3466] flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
              <div className="flex flex-col gap-1">
                <p>&copy; 2025 Cedara Hotels and Retreats. All Rights Reserved.</p>
                <p>Developed by <a href="https://preettech.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#2653d9] transition-colors">Preet Tech</a></p>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="/policies" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>|</span>
                <a href="/policies" className="hover:text-white transition-colors">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
