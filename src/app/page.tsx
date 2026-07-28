import Hero from "@/components/home/Hero";
import FilterPanel from "@/components/home/FilterPanel";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Hero />
        <FilterPanel />
      </div>
    </main>
  );
}