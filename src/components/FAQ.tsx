import Link from 'next/link'

export default function Faq() {
  return (
    <>
      <section id="faq" className="flex flex-col md:flex-row items-center justify-center gap-8 px-10 py-8 bg-gray-100"      >
        <div className="w-full md:w-1/2 text-gray-800 flex-col">
          <h2 className="text-5xl font-semibold mb-4 font-poppins">
            FAQ (Frequently Asked Questions)
          </h2>
          <p className="text-lg text-gray-800 pt-4 pb-10">
            Point People ingin mendapatkan jawaban tanpa menunggu? Berikut beberapa daftar
            pertanyaan umum yang sering diajukan untuk membantu Point People menemukan jawaban
            dengan cepat. Yuk, cek di FAQ untuk menemukan informasi yang kamu cari!
          </p>
          <a
            href="#about"
            className="px-6 py-3 bg-green-700 text-white font-bold rounded-md font-medium w-fit">
            Lihat Selengkapnya
          </a>
        </div>

        <div className="w-full md:w-1/2 pt-8">
          <img
            src="faq1.png"
            alt="faq1"
            className="rounded-lg shadow-lg ml-3 w-full h-auto"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-10 pt-8 pb-11 bg-gray-100"
         style={{ backgroundImage: "url('/bg2.png')" }}
      > 
      <div className="w-full md:w-1/2 pt-8" >
          <img
            src="faq2.jpg"
            alt="faq2"
            className="rounded-lg shadow-lg ml-3 w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800 flex-col">
          <h2 className="text-5xl font-semibold mb-4 font-poppins pb-3">
            Dapatkan informasi tentang promo dan berita terbaru dengan mulai berlangganan newsletter
          </h2>
          <a
            href="#about"
            className="px-6 py-3 bg-green-700 text-white font-bold rounded-md font-medium w-fit"
          >
            Mulai Berlangganan NewsLetter
          </a>
        </div>
      </section>
       <section  className="flex flex-col md:flex-row items-center justify-center gap-8 px-10 pt-8 pb-40 bg-gray-100"
         style={{ backgroundImage: "url('/bg.png')" }}>
       <div>

       </div>
       </section>
    </>
  )
}
