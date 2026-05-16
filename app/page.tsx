import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import Events from "./_components/Events";
import Contact from "./_components/Contact";
import ScrollToTopButton from "./_components/ScrollToTopButton";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <ScrollToTopButton />
      <div className="peralta-font bg-white">
        <h1 className="sr-only">
          DJ T-BAG – DJ, PA System &amp; Sound Equipment Hire in Ireland
        </h1>
        <Navbar />
        <main>
          <Hero />
          <Products />
          <Events />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
