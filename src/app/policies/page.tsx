import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Policies | Cedara Hotels & Retreats Haldwani",
  description: "Review our hotel policies, check-in and check-out times, and cancellation terms for a seamless stay at Cedara Hotels & Retreats.",
};

export default function PoliciesPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-[#333]">
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-[#051126] overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Policies</h1>
          <div className="w-16 h-[2px] bg-[#3a75e3] mx-auto"></div>
        </div>
      </section>

      <section className="py-24 bg-[#fcfbf9]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 bg-white p-12 shadow-sm border-t-4 border-[#2653d9]">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif text-[#111] mb-4">Privacy Policy</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This policy outlines how we collect, use, and protect your data.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif text-[#111] mb-4">Terms & Conditions</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                By accessing and using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully before making a reservation.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif text-[#111] mb-4">Cancellation Policy</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Cancellations made within 48 hours of the check-in date will incur a charge of one night's stay. For specific rate plans, please refer to the cancellation terms provided at the time of booking.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif text-[#111] mb-4">Check-in / Check-out Policy</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Standard check-in time is 12:00 PM, and check-out time is 11:00 AM. Early check-in or late check-out requests are subject to availability and may incur additional charges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
