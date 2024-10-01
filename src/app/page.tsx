import Image from "next/image";
import Link from "next/link";
import NavBar from "./ui/navbar";
import Blog from "./blog/page";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      Content under NavBar
    </div>
  );
}
