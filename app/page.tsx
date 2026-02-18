import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <Navbar />
      <Hero />
      <h1 className="text-5xl md:text-7xl font-bold text-[#ffd700]">
        Edwin Kirika Njuguna
      </h1>

      <p className="mt-6 text-xl text-gray-300 max-w-2xl">
        Software Engineer building modern software with clean UI,
        performance, and scalable architecture.
      </p>

      <div className="mt-10 flex gap-6">
        <Link
          href="#portfolio"
          className="px-6 py-3 bg-[#ffd700] text-black font-bold rounded-md hover:bg-[#ffc107] transition"
        >
          View Work
        </Link>

        <Link
          href="#resume"
          className="px-6 py-3 border border-[#ffd700] text-[#ffd700] rounded-md hover:bg-[#ffd700] hover:text-black transition"
        >
          Resume
        </Link>
      </div>
    </main>
  );
}
