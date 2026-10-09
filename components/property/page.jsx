"use client";

import { useState, useMemo } from "react";
import Image from "next/image.js";
import { motion } from "framer-motion";
import { FaMagnifyingGlass, FaRotateLeft } from "react-icons/fa6";
import { base } from "../../data/base.js";
import { properti } from "../../data/property.js";
import PropertiCard from "../properti-card.jsx";

// Helper untuk mengubah string harga ke angka
const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  const numeric = priceStr.replace(/[^0-9]/g, "");
  return Number(numeric) || 0;
};

export default function PropertyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTipe, setSelectedTipe] = useState("semua");
  const [selectedStatus, setSelectedStatus] = useState("semua");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Filter Data Real-time
  const filteredProperties = useMemo(() => {
    return properti.filter((item) => {
      // Filter Nama / Lokasi
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter Tipe
      const matchesTipe =
        selectedTipe === "semua" || item.tipe === selectedTipe;

      // Filter Status (Dijual / Disewakan)
      const matchesStatus =
        selectedStatus === "semua" || item.status === selectedStatus;

      // Filter Rentang Harga
      const numPrice = parsePrice(item.price);
      const min = minPrice ? Number(minPrice) : 0;
      const max = maxPrice ? Number(maxPrice) : Infinity;
      const matchesPrice = numPrice >= min && numPrice <= max;

      return matchesSearch && matchesTipe && matchesStatus && matchesPrice;
    });
  }, [searchQuery, selectedTipe, selectedStatus, minPrice, maxPrice]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedTipe("semua");
    setSelectedStatus("semua");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="flex flex-col min-h-[100dvh] pt-16 bg-white">
      {/* Hero & Search Banner */}
      <section className=" h-[300px]  lg:h-[500px] w-full relative bg-white text-white">
        <Image
          alt="property banner"
          src="/assets/property/banner.webp"
          width={2000}
          height={500}
          className="absolute z-0 inset-0"
        ></Image>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative absolute top-32 md:top-16 lg:top-32 z-20 text-center px-4 flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl text-black font-bold uppercase tracking-tight">
            Properti di {base.name}
          </h1>
          <p className="text-sm md:text-base text-black/80 max-w-xl">
            {base.tagline}
          </p>
        </motion.div>
      </section>

      {/* Filter Container Section */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="px-4 -mt-8 z-20 w-full  mx-auto"
      >
        <div className="bg-white border border-primary/20 rounded-2xl p-8 shadow-xl flex flex-col gap-4">
          {/* Top Row: Search & Reset */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full">
              <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-black/80 text-sm" />
              <input
                type="text"
                placeholder="Cari nama properti atau lokasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-4 py-4 border border-black/10 rounded-full text-sm text-black bg-white focus:outline-none focus:border-primary"
              />
            </div>

            <button
              type="button"
              onClick={resetFilters}
              className="w-full md:w-auto px-4 py-4 bg-red-500 hover:bg-black text-white  font-semibold text-xs rounded-full transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <FaRotateLeft className="text-xs" />
              <span>Reset Filter</span>
            </button>
          </div>

          {/* Bottom Row: Status, Tipe, & Price Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Filter Status */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-black">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="p-4 border border-black/10 rounded-2xl text-sm text-black bg-white focus:outline-none focus:border-primary cursor-pointer"
              >
                <option value="semua">Semua Status</option>
                <option value="dijual">Dijual</option>
                <option value="disewakan">Disewakan</option>
              </select>
            </div>

            {/* Filter Tipe */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-black">
                Tipe Properti
              </label>
              <select
                value={selectedTipe}
                onChange={(e) => setSelectedTipe(e.target.value)}
                className="p-4 border border-black/10 rounded-2xl text-sm text-black bg-white focus:outline-none focus:border-primary cursor-pointer capitalize"
              >
                <option value="semua">Semua Tipe</option>
                <option value="rumah">Rumah</option>
                <option value="ruko">Ruko</option>
                <option value="apartemen">Apartemen</option>
                <option value="villa">Villa</option>
                <option value="tanah">Tanah</option>
              </select>
            </div>

            {/* Min Price */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-black">
                Harga Min (Rp)
              </label>
              <input
                type="number"
                placeholder="Contoh: 500000000"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="p-4 border border-black/10 rounded-2xl text-sm text-black bg-white focus:outline-none focus:border-primary"
              />
            </div>

            {/* Max Price */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-black">
                Harga Maks (Rp)
              </label>
              <input
                type="number"
                placeholder="Contoh: 2000000000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="p-4 border border-black/10 rounded-2xl text-sm text-black bg-white focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Property Grid Section */}
      <section className="py-16 px-4  mx-auto w-full">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProperties.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: (index % 4) * 0.08,
                  ease: "easeOut",
                }}
              >
                <PropertiCard data={item} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center p-16 border border-primary/20 rounded-2xl text-center gap-4 bg-white shadow-sm"
          >
            <p className="text-lg font-bold text-black">
              Tidak ada properti yang cocok
            </p>
            <p className="text-sm text-black/80 max-w-md">
              Coba sesuaikan kata kunci pencarian atau ubah filter harga dan
              tipe properti Anda.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-8 py-4 bg-primary text-white text-sm font-bold rounded-full hover:bg-black transition-colors duration-300 cursor-pointer shadow-md mt-2"
            >
              Reset Semua Filter
            </button>
          </motion.div>
        )}
      </section>
    </div>
  );
}
