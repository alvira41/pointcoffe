import Link from "next/link";

export default function Articles() {
  const genres = [
    {
      name: "Action",
      slug: "action",
      image: "/genre-action.jpg",
      description: "Pertarungan epik dan aksi tanpa henti.",
    },
    {
      name: "Fantasy",
      slug: "fantasy",
      image: "/genre-fantasy.jpg",
      description: "Dunia sihir, monster, dan petualangan.",
    },
    {
      name: "Romance",
      slug: "romance",
      image: "/genre-romance.jpg",
      description: "Kisah cinta yang menghangatkan hati.",
    },
    {
      name: "Horror",
      slug: "horror",
      image: "/genre-horror.jpg",
      description: "Cerita misteri dan ketegangan yang mencekam.",
    },
  ];

  return (
    <section
      id="genres"
      className="bg-[#05000B] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-purple-300">
            Anime Collection
          </p>

          <h2 className="text-5xl text-white mt-4">
            Browse By Genre
          </h2>

          <p className="text-purple-200/70 mt-4">
            Temukan anime favoritmu berdasarkan genre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {genres.map((genre) => (
            <div
              key={genre.slug}
              className="rounded-3xl overflow-hidden bg-[#160129]"
            >
              <img
                src={genre.image}
                alt={genre.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl text-white">
                  {genre.name}
                </h3>

                <p className="text-purple-200/70 mt-3">
                  {genre.description}
                </p>

                <Link
                  href={`/genre/${genre.slug}`}
                  className="
                    mt-5
                    block
                    text-center
                    w-full
                    rounded-full
                    bg-[#25012B]
                    border border-purple-400/30
                    py-3
                    text-white
                  "
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}