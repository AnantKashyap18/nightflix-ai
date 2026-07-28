export default function FilterPanel() {
  return (
    <section className="mx-auto mt-12 max-w-4xl rounded-2xl border border-gray-800 bg-gray-900/70 p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        Find Your Perfect Watch
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Genre
          </label>

          <select className="w-full rounded-lg border border-gray-700 bg-black p-3 text-white">
            <option>Action</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Horror</option>
            <option>Sci-Fi</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Mood
          </label>

          <select className="w-full rounded-lg border border-gray-700 bg-black p-3 text-white">
            <option>Excited</option>
            <option>Happy</option>
            <option>Relaxed</option>
            <option>Curious</option>
            <option>Emotional</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Type
          </label>

          <select className="w-full rounded-lg border border-gray-700 bg-black p-3 text-white">
            <option>Movies</option>
            <option>Series</option>
            <option>Both</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Describe what you're in the mood for
          </label>

          <textarea
            rows={4}
            placeholder="Example: Something like Interstellar but less emotional..."
            className="w-full rounded-lg border border-gray-700 bg-black p-3 text-white placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700">
          ✨ Find My Perfect Watch
        </button>

        <button className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-800">
          🎲 Surprise Me
        </button>
      </div>
    </section>
  );
}