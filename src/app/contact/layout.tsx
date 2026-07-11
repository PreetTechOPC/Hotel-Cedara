import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Booking | Cedara Hotel in Haldwani",
  description: "Book your stay at Cedara Hotels & Retreats. Get in touch for reservations, business hotel inquiries, or weekend getaway planning in Uttarakhand.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
