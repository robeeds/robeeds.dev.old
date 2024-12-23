import type { Metadata } from "next";
import "@/app/ui/globals.css"
import { Poppins } from 'next/font/google'
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://robeeds.dev'),
  title: "RobeeDS | Full Stack Developer",
  description: "I’m Robee, a university student with a passion for full-stack development, data analytics, and cybersecurity. Specializing in crafting captivating digital experiences, I’m your go-to person for all things creative and tech-savvy.",
  openGraph: {
    images: [
      {
        url: '/api/?title=My Portfolio&desc=Happy Coding!',
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`flex flex-col justify-center items-center antialiased ${poppins.className} text-dimWhite bg-black`}>
      <body
        className={`flex flex-col justify-center min-h-[100vh] w-full max-w-[1440px]`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
