import Image from "next/image";
import Hero from "./components/Hero";
import Apartments from "./components/Apartments";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Apartments />
    </div>
  );
}
