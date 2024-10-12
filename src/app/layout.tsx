import type { Metadata } from "next";
import "@/app/ui/globals.css"
import NavBar from "./ui/navbar";

export const metadata: Metadata = {
  title: "RobeeDS | Full Stack Developer",
  description: "I’m Robee, a college student with a passion for web development. Specializing in crafting captivating digital experiences, I’m your go-to person for all things creative and tech-savvy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex justify-center items-center antialiased font-poppins text-dimWhite bg-black scroll-smooth">
      <body
        className={`w-full max-w-[1280px]`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
