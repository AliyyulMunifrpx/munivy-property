"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link.js";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { properti } from "../../data/property.js";

export default function MainSection() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Loop & filter data properti secara real-time berdasarkan nama, lokasi, atau tipe
  const filteredProperties = useMemo(() => {
    if (!query.trim()) return [];
    return properti
      .filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.location.toLowerCase().includes(query.toLowerCase()) ||
          item.tipe.toLowerCase().includes(query.toLowerCase()),
      )
      .slice(0, 5); // Batasi 5 hasil preview
  }, [query]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/properti?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/properti");
    }
  };

  return (
    <div className="relative h-[100dvh] w-full grid grid-cols-1 grid-rows-3">
      {/* Background Image */}
      <div className="relative row-start-1 row-end-4 col-start-1 z-0 h-full w-full">
        <Image
          src="/assets/home/background.webp"
          alt="background image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="row-start-2 row-end-3 z-10 col-start-1 flex items-center justify-center flex-col h-full gap-8 px-4">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-4xl md:text-5xl text-black font-bold text-center uppercase">
            Temukan Rumah <br />
            untuk Cerita Berikutnya
          </h1>
        </motion.div>

        {/* Animated Search Bar & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-4 items-center"
        >
          {/* Search Bar Container */}
          <div className="relative w-full max-w-md">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center w-full bg-white/90 backdrop-blur-md border border-black rounded-full p-2 transition-all"
            >
              {/* Ikon Kaca Pembesar */}
              <div className="pl-4 pr-2 text-black/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Input Text */}
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                placeholder="Cari rumah, ruko, atau yang lainnya..."
                className="w-full bg-transparent px-2 py-2 text-sm text-black placeholder:text-black/40 focus:outline-none font-sans"
              />

              {/* Tombol Cari */}
              <button
                type="submit"
                className="bg-black text-white px-6 py-4 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-primary transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                Cari
              </button>
            </form>

            {/* Dropdown Live Preview Results */}
            <AnimatePresence>
              {isOpen && query.trim() !== "" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-md border border-black/10 rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col"
                >
                  {filteredProperties.length > 0 ? (
                    <div className="flex flex-col p-2 gap-2">
                      {filteredProperties.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/properti/${item.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-4 p-2 rounded-xl hover:bg-black/5 transition-colors group"
                        >
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-black/10">
                            <Image
                              src={`/${item.image[0]}`}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col overflow-hidden text-left">
                            <span className="text-sm font-bold text-black truncate group-hover:text-primary transition-colors">
                              {item.name}
                            </span>
                            <span className="text-xs text-black/60 truncate">
                              {item.location} • {item.price}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-xs text-black/60">
                      Tidak ada properti yang cocok dengan &quot;{query}&quot;
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="bg-primary flex items-center rounded-full px-6 py-4 uppercase tracking-wider hover:bg-black transition-colors duration-300 cursor-pointer">
            <Link
              href="/kontak"
              className="whitespace-nowrap text-sm font-bold text-white"
            >
              Hubungi kami
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
