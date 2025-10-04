export default function Articles() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <section id="promotions">
          <div className="flex flex-col items-center">
            <img
              src="promosi1.jpg"
              alt="promosi1"
              className="rounded-lg shadow-lg w-[350px] h-[450px] object-cover"
            />
            <p className="mt-4 text-xl font-medium text-center">
              SHARE & WIN Taste of Indonesia by the Champion!
            </p>
          </div>
        </section>
        <section id="articles" className="flex flex-col justify-between">
          <div className="flex items-start space-x-4 p-4">
            <img
              src="artikel.jpg"
              alt="artikel"
              className="w-40 h-auto rounded-lg"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Ngopi Tanpa Ragu, Point Coffee Raih Sertifikat Halal
              </h2>
              <p className="text-sm text-gray-500">Agustus 21, 2023</p>
            </div>
          </div>
        </section>
      </div>
        <div className="mt-6 text-center pt-110 pr-30 justify-between">
            <a
              href="#"
              className="px-6 py-3 bg-green-700 text-lg font-lg text-white font-bold rounded-lg w-fit mx-auto"
            >
              Lihat Semua Artikel
            </a>
          </div>
    </div>
  );
}
