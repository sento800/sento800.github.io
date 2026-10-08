import Link from "next/link";

export default function Logo({ lang = "vi" }) {
  return (
    <Link href={`/${lang}`} className="group flex items-center gap-3">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 group-hover:scale-105 transition-all duration-300">
        <div className="w-full h-full bg-[#080c14] rounded-[11px] flex items-center justify-center">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 to-indigo-300 text-lg tracking-wider font-outfit">
            S
          </span>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-300 -z-10" />
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors font-outfit">
          Sento<span className="text-sky-400">.dev</span>
        </span>
        <span className="text-[10px] tracking-widest text-slate-400 font-medium uppercase -mt-1">
          Frontend Engineer
        </span>
      </div>
    </Link>
  );
}
