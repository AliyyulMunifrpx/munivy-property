"use client";

import { useState } from "react";
import Link from "next/link.js";
import Image from "next/image.js";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaInstagram,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { base } from "../../data/base.js";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "Pembelian Properti",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo ${base.name}, saya ${formData.name}.\n\nTipe Layanan: ${formData.interest}\nNo. HP: ${formData.phone}\n\nPesan:\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${base.whatsapp}?text=${encodedText}`, "_blank");
  };

  return (
    <div className="min-h-[100dvh] pt-16 w-full flex flex-col bg-white">
      {/* Hero Header */}
      <section className=" h-[260px]  lg:h-[500px] w-full relative bg-white text-white">
        <Image
          alt="contact banner"
          src="/assets/contact/banner.webp"
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
            Kontak {base.name}
          </h1>
          <p className="text-sm md:text-base text-black/80 max-w-xl">
            {base.tagline} Tim kami di {base.city} siap memberikan konsultasi
            dan pendampingan terbaik untuk Anda.
          </p>
        </motion.div>
      </section>

      {/* Main Grid Section */}
      <section className="pb-16 px-4 bg-white w-full">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Panel Kiri: Informasi & Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-8 bg-primary p-8 rounded-2xl"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-white mb-2">
                Mari Berdiskusi Seputar Kebutuhan Properti Anda
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                {base.description}
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="grid grid-cols-1 gap-4">
              {/* WhatsApp Card */}
              <Link
                href={`https://wa.me/${base.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-primary/20 rounded-2xl flex items-center justify-between hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-sm" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-black/80 font-medium">
                      WhatsApp / Telepon
                    </span>
                    <span className="text-sm font-bold text-black group-hover:text-primary transition-colors">
                      {base.whatsappDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary underline">
                  Chat Sekarang
                </span>
              </Link>

              {/* Email Card */}
              <Link
                href={`mailto:${base.email}`}
                className="p-4 bg-white border border-primary/20 rounded-2xl flex items-center justify-between hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-black/80 font-medium">
                      Email Resmi
                    </span>
                    <span className="text-sm font-bold text-black group-hover:text-primary transition-colors">
                      {base.email}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary underline">
                  Kirim Email
                </span>
              </Link>

              {/* Location Card */}
              <div className="p-4 bg-white border border-primary/20 rounded-2xl flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <FaLocationDot className="text-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-black/80 font-medium">
                    Kantor Operasional
                  </span>
                  <span className="text-sm font-bold text-black">
                    {base.address}
                  </span>
                </div>
              </div>

              {/* Instagram Card */}
              <Link
                href={`https://instagram.com/${base.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-primary/20 rounded-2xl flex items-center justify-between hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <FaInstagram className="text-sm" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-black/80 font-medium">
                      Instagram
                    </span>
                    <span className="text-sm font-bold text-black group-hover:text-primary transition-colors">
                      @{base.instagram}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary underline">
                  Ikuti
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Panel Kanan: Form Konsultasi */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="p-8 bg-white border border-primary/20 rounded-2xl shadow-xl flex flex-col gap-4"
          >
            <h3 className="text-2xl font-bold text-black mb-2">
              Kirim Pesan Konsultasi
            </h3>
            <p className="text-sm text-black/80 mb-4">
              Isi formulir di bawah ini untuk terhubung secara instan dengan tim
              ahli kami.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-black">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-4 border border-black/10 rounded-2xl focus:outline-none focus:border-primary text-sm text-black bg-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-black">
                  Nomor WhatsApp / HP
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Contoh: 08123456789"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-4 border border-black/10 rounded-2xl focus:outline-none focus:border-primary text-sm text-black bg-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-black">
                  Kebutuhan Layanan
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="p-4 border border-black/10 rounded-2xl focus:outline-none focus:border-primary text-sm text-black bg-white"
                >
                  <option value="Pembelian Properti">Pembelian Properti</option>
                  <option value="Penyewaan Properti">Penyewaan Properti</option>
                  <option value="Pemasaran Properti Saya">
                    Pemasaran Properti Saya
                  </option>
                  <option value="Konsultasi Investasi">
                    Konsultasi Investasi
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-black">
                  Pesan Anda
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tuliskan kriteria properti atau pertanyaan Anda..."
                  value={formData.message}
                  onChange={handleChange}
                  className="p-4 border border-black/10 rounded-2xl focus:outline-none focus:border-primary text-sm text-black bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-4 bg-primary text-white font-bold text-sm rounded-full hover:bg-black transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
              >
                <FaPaperPlane className="text-xs" />
                <span>Kirim via WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
