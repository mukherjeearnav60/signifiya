import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Visual Hero Section */}
      <section className="flex-grow flex items-center justify-center p-6 text-center bg-white text-black">
        <div className="max-w-4xl">
          <h2 className="text-xs uppercase tracking-[0.6em] mb-6 font-sans font-black">Now Rolling — 2026</h2>
          <h1 className="text-6xl md:text-9xl font-black italic uppercase font-sans tracking-tighter leading-[0.85] mb-8">
            Real Always <br /> Wins.
          </h1>
          <p className="font-serif text-xl italic opacity-80">A global creative collective.</p>
        </div>
      </section>

      {/* The Red Footer */}
      <Footer />
    </div>
  );
}