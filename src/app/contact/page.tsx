"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const adjustCount = (field: "adults" | "children", delta: number) => {
    setFormData(prev => {
      const newValue = prev[field] + delta;
      if (newValue < 0) return prev;
      if (field === "adults" && newValue < 1) return prev; // At least 1 adult
      return { ...prev, [field]: newValue };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "", lastName: "", email: "", phone: "",
          checkIn: "", checkOut: "", adults: 2, children: 0, message: ""
        });
      } else {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-[#333]">
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-[#051126] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/20260201_115842.jpg" alt="Contact Us" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-[#051126]/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-white/70 uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Contact Us</h1>
          <div className="w-16 h-[2px] bg-[#3a75e3] mx-auto"></div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-serif text-[#111] mb-6">Reach Out</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  We are here to assist you with your bookings, event planning, and any special requests you might have to make your stay exceptional.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold tracking-wider uppercase text-[#111] mb-4">Location</h4>
                <p className="text-gray-500 text-sm">
                  3rd, 4th and, 5th floors of the pride hospital, Panchakki Rd,<br/>
                  Amba Vihar, Azad Nagar, Heera Nagar,<br/>
                  Bamoritalli Bandobasti, Haldwani,<br/>
                  Uttarakhand 263139
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold tracking-wider uppercase text-[#111] mb-4">Contact</h4>
                <p className="text-gray-500 text-sm mb-2">090844 50098 (Reservations)</p>
                <p className="text-gray-500 text-sm">cedarahotelsandretreats@gmail.com</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-[#fcfbf9] p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <h3 className="text-2xl font-serif text-[#111] mb-8">Booking Inquiry</h3>
                
                {submitStatus === "success" && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 text-sm">
                    Thank you for your inquiry! Your request has been sent successfully. We will get back to you shortly.
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                    There was an error sending your message. Please try again or contact us directly via phone.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Booking Details */}
                  <div>
                    <h4 className="text-sm font-semibold tracking-wider uppercase text-[#2653d9] mb-6 border-b border-gray-200 pb-3">Booking Requirements</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-end">
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Check-in</label>
                        <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#2653d9] transition-colors text-sm text-[#111]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Check-out</label>
                        <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#2653d9] transition-colors text-sm text-[#111]" />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Adults (&gt;11 Yrs)</label>
                        <div className="flex items-center border-b border-gray-300 pb-1">
                          <button type="button" onClick={() => adjustCount("adults", -1)} className="px-3 py-1 text-gray-400 hover:text-[#2653d9] text-lg font-light">-</button>
                          <input type="text" readOnly value={formData.adults} className="w-full text-center bg-transparent focus:outline-none text-sm font-semibold text-[#111]" />
                          <button type="button" onClick={() => adjustCount("adults", 1)} className="px-3 py-1 text-gray-400 hover:text-[#2653d9] text-lg font-light">+</button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Child (6-11 Yrs)</label>
                        <div className="flex items-center border-b border-gray-300 pb-1">
                          <button type="button" onClick={() => adjustCount("children", -1)} className="px-3 py-1 text-gray-400 hover:text-[#2653d9] text-lg font-light">-</button>
                          <input type="text" readOnly value={formData.children} className="w-full text-center bg-transparent focus:outline-none text-sm font-semibold text-[#111]" />
                          <button type="button" onClick={() => adjustCount("children", 1)} className="px-3 py-1 text-gray-400 hover:text-[#2653d9] text-lg font-light">+</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div>
                    <h4 className="text-sm font-semibold tracking-wider uppercase text-[#2653d9] mb-6 border-b border-gray-200 pb-3">Personal Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">First Name *</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#2653d9] transition-colors text-sm text-[#111]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Last Name *</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#2653d9] transition-colors text-sm text-[#111]" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#2653d9] transition-colors text-sm text-[#111]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Phone Number *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#2653d9] transition-colors text-sm text-[#111]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Special Requests (Optional)</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#2653d9] transition-colors resize-none text-sm text-[#111]"></textarea>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button type="submit" disabled={isSubmitting} className="bg-[#2653d9] hover:bg-[#1d40a8] disabled:bg-gray-400 text-white px-12 py-4 text-xs font-semibold tracking-wider uppercase transition-colors shadow-lg">
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
