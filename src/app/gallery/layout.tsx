import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Cedara Hotels & Retreats Haldwani",
  description: "View photos of Cedara Hotels & Retreats. Explore our beautiful exterior, luxurious rooms, and peaceful nature surroundings in Haldwani.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
