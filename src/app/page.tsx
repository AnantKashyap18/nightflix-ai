"use client";

import { useState } from "react";
import Hero from "@/components/home/Hero";
import FilterPanel from "@/components/home/FilterPanel";

type Recommendation = {
  title: string;
  year: string;
  reason: string;
};

type SearchFilters = {
  genre: string;
  mood: string;
  type: string;
  prompt: string;
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [error, setError] = useState("");

  async function handleSearch(filters: SearchFilters) {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setRecommendations(data.recommendations);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Hero />

        <FilterPanel
          onSearch={handleSearch}
          loading={loading}
        />

        {error && (
          <div className="mt-8 rounded-lg bg-red-900 p-4 text-red-200">
            {error}
          </div>
        )}

        {recommendations.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-6 text-3xl font-bold">
              Your AI Recommendations
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recommendations.map((movie) => (
                <div
                  key={movie.title}
                  className="rounded-xl border border-gray-800 bg-gray-900 p-6"
                >
                  <h3 className="text-xl font-bold">
                    {movie.title}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {movie.year}
                  </p>

                  <p className="mt-4 text-gray-300">
                    {movie.reason}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}