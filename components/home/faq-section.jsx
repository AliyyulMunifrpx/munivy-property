"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
  {
    question: "Bagaimana cara melakukan survei lokasi properti?",
    answer:
      "Anda dapat memilih properti yang diinginkan, klik 'Lihat detail', lalu tekan tombol kontak agen untuk menjadwalkan kunjungan lokasi sesuai ketersediaan waktu Anda.",
  },
  {
    question: "Apakah harga yang tertera sudah termasuk biaya legalitas?",
    answer:
      "Harga yang tertera merupakan harga properti pokok. Biaya sertifikasi, pajak pembelian (BPHTB), dan notaris akan dihitung terpisah secara transparan sebelum proses kesepakatan.",
  },
  {
    question: "Berapa lama proses transaksi sewa atau jual beli?",
    answer:
      "Proses sewa biasanya memakan waktu 1–3 hari kerja setelah kelengkapan berkas. Untuk jual beli, proses hingga balik nama sertifikat rata-rata membutuhkan waktu 14–30 hari kerja.",
  },
  {
    question: "Apakah saya bisa memasarkan properti pribadi di Potohaze?",
    answer:
      "Tentu. Anda dapat menghubungi tim kami melalui halaman kontak untuk verifikasi kelayakan properti dan pendaftaran listing.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pb-16 px-4 bg-white w-full">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Panel Kiri: Gambar Properti */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-primary/20 shadow-lg group"
        >
          <Image
            src="/assets/property/rumah/1.webp"
            alt="FAQ Property Showcase"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-black/20 flex items-end p-8">
            <p className="text-white text-sm font-medium bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              Solusi & Info Properti Anda
            </p>
          </div>
        </motion.div>

        {/* Panel Kanan: Header & Accordion FAQ */}
        <div className="flex flex-col justify-center">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 flex flex-col items-start"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
              Pertanyaan Umum
            </h2>
            <p className="text-sm text-black/80">
              Jawaban lengkap untuk membantu Anda memahami layanan dan proses
              transaksi properti kami.
            </p>
          </motion.div>

          {/* Accordion Container */}
          <div className="w-full flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="border border-primary/20 rounded-2xl overflow-hidden transition-all duration-300 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-black hover:text-primary transition-colors cursor-pointer"
                  >
                    <span className="text-base pr-4">{faq.question}</span>
                    <FaChevronDown
                      className={`text-primary transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 text-sm text-black/80 border-t border-black/10 pt-4">
                          <p className="leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}