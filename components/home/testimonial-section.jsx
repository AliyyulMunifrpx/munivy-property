"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import { base } from "../../data/base.js";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pembeli Rumah di Tangerang Selatan",
    comment:
      "Proses pencarian hingga transaksi sangat transparan. Desain hunian sesuai ekspektasi dan pelayanan agen sangat profesional.",
    rating: 5,
    initial: "B",
  },
  {
    name: "Siti Rahmawati",
    role: "Penyewa Apartemen Malioboro",
    comment:
      "Sangat terbantu dengan informasi detail properti yang akurat. Tidak ada biaya tersembunyi, semua dijelaskan dengan terperinci dari awal.",
    rating: 5,
    initial: "S",
  },
  {
    name: "Hendrik Wijaya",
    role: "Investor Properti Apartemen",
    comment: `${base.name} memberikan pilihan properti bereputasi tinggi dengan potensi investasi yang jelas. Rekomendasi terbaik untuk pencarian properti.`,
    rating: 5,
    initial: "H",
  },
];

export default function TestimonialSection() {
  return (
    <div className="pb-16 px-4 bg-white w-full">
      <div className="mx-auto flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-8 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Apa Kata Mereka Tentang {base.name}
          </h2>
          <p className="text-sm text-black/80 max-w-md">
            Kepercayaan dan kepuasan klien adalah prioritas utama dalam setiap
            layanan properti kami.
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex flex-col justify-between p-8 bg-white border border-primary/20 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <FaQuoteLeft className="text-black text-2xl group-hover:scale-110 transition-transform duration-300" />
                  <div className="flex gap-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-primary text-xs" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-black text-sm leading-relaxed mb-8 font-normal">
                  &quot;{item.comment}&quot;
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 border-t border-black/10 pt-4 mt-auto">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {item.initial}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-black text-sm font-bold group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-black/80 text-xs">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}