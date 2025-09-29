import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Cards from "./components/Cards";




export default function Home() {
  return (
    <main style={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      <div className="relative w-full h-screen">
        <Hero />
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />
      </div>
      <About />
      <div className="relative w-full" style={{ marginTop: '-20vh', zIndex: 30 }}>
        <Cards />
      </div>
    </main>
  );
}
