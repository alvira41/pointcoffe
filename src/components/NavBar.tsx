import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto pb-4 pt-4 px-0 py-4 flex items-center justify-between bg-green-700 md-flex">
        <nav className="flex items-center ml-19">
        <img src="/logo-pc.png" alt="Logo" className="w-50 h-8 ml-10 mr-3 px-10" />
         </nav>
        <ul className="hidden md:flex gap-4 items-center text-sm ml-38.6 mr-50">
          <li><a href="#about" className="text-white hover:font-bold font-sans text-lg">About Us</a></li>
          <li><a href="#menu" className="text-white hover:font-bold font-sans text-lg">Menu</a></li>
          <li><a href="#promotions" className="text-white hover:font-bold font-sans text-lg">Promotions</a></li>
          <li><a href="#articles" className="text-white hover:font-bold font-sans text-lg">Articles</a></li>
          <li><a href="#mebership" className="text-white hover:font-bold font-sans text-lg">Membership</a></li>
          <li><a href="#faq" className="text-white hover:font-bold font-sans text-lg">FAQ</a></li>
        </ul>
        <div className="flex items-center gap-3 mr-20">
          <a className="ml-7 text-white text-md pb-2 pt-2 px-3 py-2 border border-gray-200 rounded-lg">Location</a>
          
        </div>
      </div>
    </nav>
  )
}
