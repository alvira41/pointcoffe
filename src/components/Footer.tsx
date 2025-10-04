import { 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebookF, 
  FaXTwitter, 
  FaTiktok, 
  FaYoutube 
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-12">
      <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Kolom 1 - Logo & Copyright */}
        <div>
          <img 
            src="/logo-pc.png" 
            alt="Logo" 
            className="w-[150px] mb-3"
          />
          <p className="text-sm text-gray-200">
            ©2024 pointcoffee.id. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Kolom 2 - Product & Information */}
        <div className="flex justify-between">
          <ul className="text-md space-y-2">
            <h4 className="font-bold text-xl mb-3">Products</h4>
            <li>Coffee Series</li>
            <li>Frappe Series</li>
            <li>Milk Series</li>
            <li>Tea Series</li>
            <li>Summer Vibes</li>
            <li>#MILKINDONESIA</li>
            <li>BAWA PERGI</li>
            <li>Merchandise</li>
          </ul>

          <ul className="text-md space-y-2">
            <h4 className="font-bold text-xl mb-3">Informations</h4>
            <li>About Us</li>
            <li>Menu</li>
            <li>Promotions</li>
            <li>Articles</li>
            <li>Membership</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Kolom 3 - Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-lg mb-1">customercare@pointcoffee.id</p>
          <p className="mb-3">Click here:</p>

          <ul className="flex space-x-5 text-2xl">
            <li className="hover:text-gray-300 cursor-pointer"><FaWhatsapp /></li>
            <li className="hover:text-gray-300 cursor-pointer"><FaInstagram /></li>
            <li className="hover:text-gray-300 cursor-pointer"><FaFacebookF /></li>
            <li className="hover:text-gray-300 cursor-pointer"><FaXTwitter /></li>
            <li className="hover:text-gray-300 cursor-pointer"><FaTiktok /></li>
            <li className="hover:text-gray-300 cursor-pointer"><FaYoutube /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
