"use client";

import { useState } from "react";
import Image from "next/image.js";
import Link from "next/link.js";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaBath,
  FaBed,
  FaCheck,
  FaLocationDot,
  FaPhone,
  FaRuler,
  FaWhatsapp,
} from "react-icons/fa6";
import { base } from "../../data/base.js";
import { properti } from "../../data/property.js";

export default function PropertyDetailPage({ slug }) {
  const item = properti.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  // State jika properti tidak ditemukan
  if (!item) {
    return (
      <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center p-16 bg-white text-black text-center">
        <h1 className="text-3xl font-bold mb-4">Properti Tidak Ditemukan</h1>
        <p className="text-sm text-black/80 mb-8">
          Maaf, properti yang Anda cari tidak ada atau telah dihapus.
        </p>
        <Link
          href="/properti"
          className="px-8 py-4 bg-primary text-white text-sm font-bold rounded-full hover:bg-black transition-colors duration-300 shadow-md"
        >
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Halo ${base.name}, saya tertarik dengan properti "${item.name}" (${item.price}) di ${item.location}.\n\nBisa minta informasi lebih detail dan jadwal survei?`,
  );

  return (
    <div className="min-h-[100dvh] w-full bg-white flex flex-col py-16 pt-24 px-4">
      <div className=" mx-auto w-full flex flex-col gap-8">
        {/* Navigation & Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-between"
        >
          <Link
            href="/properti"
            className="flex items-center gap-2 text-sm font-bold text-black hover:text-primary transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            <span>Kembali ke Katalog Properti</span>
          </Link>
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider">
            {item.status}
          </span>
        </motion.div>

        {/* Header Title & Price */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-8"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              {item.name}
            </h1>
            <div className="flex items-center gap-2 text-black/80 text-sm">
              <FaLocationDot className="text-primary shrink-0" />
              <span>{item.location}</span>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <span className="text-xs text-black/80 font-medium">Harga</span>
            <p className="text-2xl md:text-3xl font-bold text-black">
              {item.price}
            </p>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          {/* Main Image Showcase */}
          <div className="relative w-full h-[350px] md:h-[700px] rounded-2xl overflow-hidden border border-primary/20 shadow-lg bg-black">
            <Image
              src={`/${item.image[activeImage] || item.image[0]}`}
              alt={`${item.name} - gambar ${activeImage + 1}`}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Thumbnails Grid */}
          <div className="grid grid-cols-4 gap-4">
            {item.image.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`relative h-20 md:h-28 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                  activeImage === index
                    ? "border-primary opacity-100 shadow-md"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={`/${img}`}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-8">
          {/* Main Content (Spans 2 Columns) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Key Specifications Grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="p-8 bg-white border border-primary/20 rounded-2xl shadow-md grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-black/80 uppercase">
                  Tipe Properti
                </span>
                <p className="text-base font-bold text-black capitalize">
                  {item.tipe}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-black/80 uppercase">
                  Luas
                </span>
                <div className="flex items-center gap-2">
                  <FaRuler className="text-primary text-sm" />
                  <p className="text-base font-bold text-black">{item.size}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-black/80 uppercase">
                  Kamar Tidur
                </span>
                <div className="flex items-center gap-2">
                  <FaBed className="text-primary text-sm" />
                  <p className="text-base font-bold text-black">
                    {item.bedroom > 0 ? `${item.bedroom} Kamar` : "-"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-black/80 uppercase">
                  Kamar Mandi
                </span>
                <div className="flex items-center gap-2">
                  <FaBath className="text-primary text-sm" />
                  <p className="text-base font-bold text-black">
                    {item.bathroom > 0 ? `${item.bathroom} Kamar` : "-"}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Description Section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="p-8 bg-white border border-primary/20 rounded-2xl shadow-md flex flex-col gap-4"
            >
              <h2 className="text-xl font-bold text-black border-b border-black/10 pb-4">
                Deskripsi Properti
              </h2>
              <p className="text-sm md:text-base text-black/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>

            {/* Keunggulan Utama */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="p-8 bg-white border border-primary/20 rounded-2xl shadow-md flex flex-col gap-4"
            >
              <h2 className="text-xl font-bold text-black border-b border-black/10 pb-4">
                Keunggulan Utama
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-white border border-primary/20 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <FaCheck className="text-xs" />
                  </div>
                  <p className="text-sm font-medium text-black">
                    Sertifikat Lengkap & Siap Transaksi
                  </p>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white border border-primary/20 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <FaCheck className="text-xs" />
                  </div>
                  <p className="text-sm font-medium text-black">
                    Lokasi Strategis & Akses Mudah
                  </p>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white border border-primary/20 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <FaCheck className="text-xs" />
                  </div>
                  <p className="text-sm font-medium text-black">
                    Pencahayaan & Akses Udara Alami
                  </p>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white border border-primary/20 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <FaCheck className="text-xs" />
                  </div>
                  <p className="text-sm font-medium text-black">
                    Pendampingan Agen Hingga Tuntas
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Inquiry Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="sticky top-24 p-8 bg-black text-white rounded-2xl shadow-xl flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Tertarik Dengan Properti Ini?
              </p>
              <h3 className="text-2xl font-bold">
                Jadwalkan Survei / Konsultasi
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Hubungi agen resmi {base.name} untuk berkas lengkap, negosiasi
                harga, atau inspeksi lokasi secara langsung.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-4">
              <a
                href={`https://wa.me/${base.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-8 py-4 bg-primary text-white font-bold text-sm rounded-full hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <FaWhatsapp className="text-base" />
                <span>Tanya via WhatsApp</span>
              </a>

              <a
                href={`tel:${base.whatsapp}`}
                className="w-full px-8 py-4 bg-white text-black font-bold text-sm rounded-full hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaPhone className="text-xs" />
                <span>Hubungi {base.whatsappDisplay}</span>
              </a>
            </div>

            <div className="flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-white/60">
              <p>Alamat Kantor: {base.address}</p>
              <p>Email: {base.email}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
