export default function MenuGrid() {
  return (
    <section id="mebership" className="max-w-6xl mx-auto px-6 pt-20 pb-20"
     style={{ backgroundImage: "url('/bg.png')" }}
    >
        <div className="w-full md:w-1/2 text-gray-800 flex-col flex-auto pb-4">
            <h2 className="text-4xl font-semibold mb-4 font-poppins pl-4">
             Membership
            </h2>
        </div>
          <div className="text-center pt-0"><img src="member.jpeg" alt="member" className="w-full h-full object-cover rounded-lg shadow-xl"/>
        </div>
    </section>
  )
}
