import Link from "next/link.js";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { base } from "../data/base.js";
import Image from "next/image.js";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "Properti", href: "/properti" },
  { name: "Kontak", href: "/kontak" },
];
const CURRENT_YEAR = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 w-full">
      <div className="mx-auto flex flex-col gap-16">
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <Image
              alt={`${base.name} logo`}
              src="/assets/logo.webp"
              width={40}
              height={40}
              
            />{" "}
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {base.name}
            </h3>
            <p className="text-sm text-white/80 max-w-sm leading-relaxed">
              Platform properti eksklusif dan terpercaya. Menghadirkan hunian
              serta ruang komersial pilihan di lokasi-lokasi strategis.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Link
                href={`https://instagram.com/${base.instagram}`}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-300"
              >
                <FaInstagram className="text-sm" />
              </Link>
              <Link
                href={`https://wa.me/${base.whatsapp}`}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-300"
              >
                <FaWhatsapp className="text-sm" />
              </Link>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-white mb-2">Navigasi</h4>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-white mb-2">Kontak</h4>
            <div className="flex flex-col gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-primary shrink-0" />
                <span>{base.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary shrink-0" />
                <span>{base.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary shrink-0" />
                <span>{base.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Area */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {CURRENT_YEAR} {base.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
