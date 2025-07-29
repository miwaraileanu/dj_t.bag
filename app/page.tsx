import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import SmoothScroll from "./_components/ScrollWrapper";
import Events from "./_components/Events";
import Contact from "./_components/Contact";
import ScrollToTopButton from "./_components/ScrollToTopButton";

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollToTopButton />
      <div className="peralta-font">
        <Navbar />
        <Hero />
        <Products />
        <Events />
        <Contact />
      </div>
    </SmoothScroll>
  );
}
