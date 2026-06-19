import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-full border border-purple-500/20 bg-[#05000B]/70 backdrop-blur-xl px-8 py-4">

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold tracking-wider bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent"
          >
            ANIMEGO
          </Link>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-10 text-purple-100">
            <li>
              <a
                href="#about"
                className="hover:text-purple-300 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#menu"
                className="hover:text-purple-300 transition"
              >
                Populer
              </a>
            </li>

            <li>
              <a
                href="#genres"
                className="hover:text-purple-300 transition"
              >
                Genre
              </a>
            </li>
          </ul>

          {/* Button */}
          <a
            href="#menu"
            className="rounded-full border border-purple-400/40 bg-[#25012B] px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:border-purple-300 hover:bg-[#3B0245]"
          >
            Explore Anime
          </a>

        </div>
      </div>
    </nav>
  );
}