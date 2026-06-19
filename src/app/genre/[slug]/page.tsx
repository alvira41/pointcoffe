import Link from "next/link";
import Image from "next/image";

const animeByGenre = {
  fantasy: [
    {
      title: "Solo Leveling",
      slug: "solo-leveling",
      image: "/solevp.jpg",
      rating: "9.4",
    },
    {
      title: "Frieren",
      slug: "frieren",
      image: "/frieren.jpg",
      rating: "9.3",
    },
  ],

  action: [
    {
      title: "Demon Slayer",
      slug: "demon-slayer",
      image: "/anime1.jpg",
      rating: "9.2",
    },
    {
      title: "Attack On Titan",
      slug: "attack-on-titan",
      image: "/anime2.jpg",
      rating: "9.8",
    },
  ],

  romance: [
    {
      title: "Your Name",
      slug: "your-name",
      image: "/yourname.jpg",
      rating: "9.1",
    },
  ],

  horror: [
    {
      title: "Another",
      slug: "another",
      image: "/another.jpg",
      rating: "8.8",
    },
  ],
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GenrePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const animes =
    animeByGenre[slug as keyof typeof animeByGenre] || [];

  return (
    <section className="min-h-screen bg-[#05000B] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12 text-center">
          <p className="uppercase tracking-[0.3em] text-purple-300">
            Genre Collection
          </p>

          <h1 className="mt-4 text-5xl text-white capitalize">
            {slug} Anime
          </h1>

          <p className="mt-4 text-purple-200/70">
            Temukan anime terbaik dalam genre {slug}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {animes.map((anime) => (
            <div
              key={anime.slug}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-purple-500/20
                bg-[#160129]
                transition
                hover:-translate-y-2
              "
            >
              <div className="overflow-hidden">
                <Image
                  src={anime.image}
                  alt={anime.title}
                  width={500}
                  height={700}
                  className="
                    h-[420px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-110
                  "
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl text-white">
                    {anime.title}
                  </h2>

                  <span className="rounded-full bg-purple-700 px-3 py-1 text-sm text-white">
                    ⭐ {anime.rating}
                  </span>
                </div>

                <Link
                  href={`/anime/${anime.slug}`}
                  className="
                    mt-6
                    block
                    rounded-full
                    border
                    border-purple-400/30
                    bg-[#25012B]
                    py-3
                    text-center
                    text-white
                    transition
                    hover:bg-purple-900
                  "
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="
              rounded-full
              border
              border-purple-400/30
              bg-[#25012B]
              px-8
              py-4
              text-white
            "
          >
            ← Kembali ke Home
          </Link>
        </div>

      </div>
    </section>
  );
}