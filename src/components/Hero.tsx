export default function Hero() {
  return (
    <section>
   
      <div className="aspect-w-16 aspect-h-9">
       <iframe
         src="https://www.youtube.com/embed/XobKsZAPBIk?autoplay=1&mute=1&loop=1&playlist=XobKsZAPBIk"
         title="Point Coffee Video"
         className="w-full h-full"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
        />
      </div>
      <div className="bg-black/40">
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-10 py-10 bg-gray-300" id="about"
          style={{ backgroundImage: "url('/bg.png')" }}
        >

          <div className="w-full md:w-1/2 text-gray-900 flex-col">
            <h2 className="text-6xl font-semibold mb-4 font-poppins">
              Crafted with passion, brewed with precision.
            </h2>
            <p className="text-lg text-gray-500 pt-10 pb-10">
              Point Coffee merupakan brand spesialisasi kopi dengan konsep “Made
              to Order” yang menyajikan Fresh Quality Coffee. Dengan menggunakan
              100% biji kopi asli Indonesia yang disajikan oleh barista terlatih
              dengan mesin kopi standar internasional. Berdiri sejak tahun 2016,
              dan kini sudah hadir tersedia di lebih dari 1.200 outlet di seluruh
              Indonesia untuk mempermudah Point People menjangkau Point Coffee.
            </p>
            <a
            href="#about"
            className="px-14 py-3 bg-green-700 text-white font-bold rounded-md font-medium w-fit h-full"
          >
             Lihat Selengkapnya
          </a>
          </div>
          
          <div className="w-full md:w-1/2 pt-8">
            <img
              src="pcone.png"
              alt="pcone"
              className="rounded-lg shadow-lg ml-3 w-90 h-auto"
            />
          </div>

        </section>
      </div>
    </section>
  );
}
