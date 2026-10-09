import Image from "next/image.js";
import Link from "next/link.js";
import { FaBath, FaBed, FaLocationDot, FaRuler } from "react-icons/fa6";

export default function PropertiCard({ data }) {
  return (
    <div className="group flex flex-col w-full gap-4 bg-white border border-primary/20 rounded-2xl pb-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden">
      {/* Container Gambar & Info Dasar */}
      <div className="w-full h-96 rounded-t-2xl grid grid-cols-1 grid-rows-3 overflow-hidden">
        {/* Wrapper Gambar */}
        <div className="row-start-1 row-end-3 col-start-1 h-full w-full overflow-hidden bg-black relative">
          <Image
            src={`/${data.image[0]}`}
            alt={`image of ${data.name}`}
            width={800}
            height={800}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Badge Status */}
        <div className="row-start-1 col-start-1 w-full z-10">
          <p className="px-4 py-2 bg-primary text-white w-fit text-xs font-semibold uppercase tracking-wider rounded-full mx-auto mt-4 shadow-md">
            {data.status}
          </p>
        </div>

        {/* Info Konten */}
        <div className="row-start-3 col-start-1 h-full flex flex-col px-4 pt-4 gap-2 bg-white">
          <h3 className="text-black text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {data.name}
          </h3>

          <div className="flex items-center gap-2 text-black">
            <FaLocationDot className="text-primary" />
            <p className="text-sm font-medium">{data.location}</p>
          </div>

          <div className="flex items-center justify-between mt-auto pt-4 text-xs font-medium text-black border-t border-black/10">
            {data.bedroom > 0 && (
              <div className="flex items-center gap-2">
                <FaBed className="text-sm text-primary" />
                <span>{data.bedroom} Beds</span>
              </div>
            )}

            {data.bathroom > 0 && (
              <div className="flex items-center gap-2">
                <FaBath className="text-sm text-primary" />
                <span>{data.bathroom} Baths</span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <FaRuler className="text-sm text-primary" />
              <span>{data.size}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Harga & Tombol Aksi */}
      <div className="flex items-center px-4 justify-between mt-2">
        <p className="text-lg font-bold text-black">{data.price}</p>
        <Link
          href={`/properti/${data.slug}`}
          className="px-4 py-2 bg-primary text-white font-medium text-sm rounded-full hover:bg-black transition-colors duration-300 cursor-pointer shadow-sm hover:shadow-md"
        >
          Lihat detail
        </Link>
      </div>
    </div>
  );
}
