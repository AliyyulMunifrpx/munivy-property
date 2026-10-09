"use client";

import Image from "next/image.js";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { base } from "../../data/base.js";

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh] w-full flex pt-16 flex-col bg-white">
      {/* Hero Banner */}
      <div className=" h-[260px]  lg:h-[500px] w-full relative bg-white text-white">
        <Image
          src="/assets/about/banner.webp"
          alt="banner tentang kami"
          width={2000}
          height={500}
          className="absolute inset-0 z-0"
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative absolute top-32 md:top-16 lg:top-32 z-20 text-center px-4 flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl text-black font-bold uppercase tracking-tight">
            Tentang {base.name}
          </h1>
          <p className="text-sm md:text-base text-black/80 max-w-xl">
            {base.tagline}
          </p>
        </motion.div>
      </div>

      {/* Story & Vision Section */}
      <section className="pb-16 px-4 w-full">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center p-8 bg-white border border-primary/20 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              {base.about.title}
            </h2>
            <p className="text-sm text-black/80 leading-relaxed mb-4">
              {base.about.story}
            </p>
            <p className="text-sm text-black/80 leading-relaxed">
              {base.description}
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col justify-between p-8 bg-primary text-white rounded-2xl shadow-xl"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold leading-snug">
                &quot;{base.about.vision}&quot;
              </h3>
            </div>
            <div className="pt-8 border-t border-white/10 mt-8">
              <p className="text-xs text-white/80">
                Berlokasi di {base.address}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="pb-16 px-4 bg-white w-full ">
        <div className=" mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-8 flex flex-col items-center"
          >
            <h2 className="text-3xl font-bold text-black mb-2">
              Nilai - Nilai Kami
            </h2>
            <p className="text-sm text-black/80 max-w-md">
              Pilar dasar dalam setiap interaksi dan layanan yang kami berikan
              kepada Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
            {base.about.values.map((item, index) => (
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
                className="p-8 bg-white border border-primary/20 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col gap-4 group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-black/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pb-16 px-4 bg-white w-full">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              Misi Kami dalam Industri Properti
            </h2>
            <p className="text-sm text-black/80 leading-relaxed">
              Kami terus berupaya mempermudah setiap langkah perjalanan properti
              Anda dengan standar profesionalisme tinggi.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {base.about.mission.map((misi, index) => (
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
                className="p-4 bg-white border border-primary/20 rounded-2xl flex items-center gap-4 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <FaCheck className="text-xs" />
                </div>
                <p className="text-sm font-medium text-black">{misi}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
