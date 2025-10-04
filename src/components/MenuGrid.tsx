export default function MenuGrid() {
  return (
    <section id="menu" className="max-w-6xl mx-auto px-6 pt-40 pb-5"
     style={{ backgroundImage: "url('/bg.png')" }}
    >
        <div className="w-full md:w-1/2 text-gray-900 flex-col flex-auto">
            <h2 className="text-4xl font-semibold mb-4 font-poppins pl-4">
             Menu
            </h2>
            <p className="text-2xl text-gray-500 pt-3 pb-3 pl-4 whitespace-nowrap">
            Nikmati kelezatan minuman yang Always on Point
            </p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 pl-3">
          <div className="text-center">
          <img
            src="Coffee1.png"
            alt="foto1"
            className="w-full h-48 object-cover rounded-lg shadow"
          />
          <p className="mt-2 text-lg font-medium">Coffe Series</p>
        </div>
           <div className="text-center">
          <img
            src="Coffee2.png"
            alt="foto2"
            className="w-full h-48 object-cover rounded-lg shadow"
          />
          <p className="mt-2 text-lg font-medium">Frappe Series</p>
        </div>
            <div className="text-center">
          <img
            src="Coffee3.png"
            alt="foto3"
            className="w-full h-48 object-cover rounded-lg shadow"
          />
          <p className="mt-2 text-lg font-medium">Milk Series</p>
        </div>
            <div className="text-center">
          <img
            src="Coffee4.png"
            alt="foto4"
            className="w-full h-48 object-cover rounded-lg shadow"
          />
          <p className="mt-2 text-lg font-medium">Kopi Baper Series</p>
        </div>
            <div className="text-center">
          <img
            src="Coffee5.png"
            alt="foto5"
            className="w-full h-48 object-cover rounded-lg shadow"
          />
          <p className="mt-2 text-lg font-medium">Milik Indonesia Series</p>
        </div>
            <div className="text-center">
          <img
            src="Coffee6.png"
            alt="foto6"
            className="w-full h-48 object-cover rounded-lg shadow"
          />
          <p className="mt-2 text-lg font-medium">Tea Series</p>
        </div>

      </div>

      <div className="mt-6 text-center pt-20 pb-11">
          <a href="#about" className="pl-20 pr-20 py-3 bg-green-700 text-white font-bold rounded-lg font-large w-fit">Lihat Semua Menu</a>
      </div>
    </section>
  )
}
