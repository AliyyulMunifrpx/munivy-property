"use client";

import Link from "next/link.js";
import { motion } from "framer-motion";
import { properti } from "../../data/property.js";
import PropertiCard from "../properti-card.jsx";

export default function PropertySection() {
  const data = properti.slice(0, 8);
  return (
    <div className="w-full bg-white flex flex-col pb-16 gap-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-8 flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Properti Populer
        </h2>
        <p className="text-sm text-black/80 max-w-md">
          Koleksi lengkap rumah, ruko, apartemen, hingga tanah siap bangun
          sesuai kebutuhan Anda.
        </p>
      </motion.div>{" "}
      {/* Property Grid Container */}
      <div className="flex gap-4 items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-y-8">
        {data.map((item, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: "easeOut",
              }}
            >
              <PropertiCard data={item}></PropertiCard>
            </motion.div>
          );
        })}
      </div>
      {/* Button CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="w-fit mx-auto"
      >
        <Link
          href="/properti"
          className="px-4 py-2 bg-black w-fit mx-auto text-white hover:bg-primary rounded-full transition-colors duration-300 block"
        >
          Lihat semua properti
        </Link>
      </motion.div>
    </div>
  );
}
