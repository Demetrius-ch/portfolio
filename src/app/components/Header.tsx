import Link from "next/link";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center px-10 py-6 bg-white shadow-md sticky top-0 z-50">
        {/* Liens à gauche */}
        <div className="flex items-center space-x-6 ml-6"> {/* Ajout de marge à gauche */}
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
            <Link href="/pages/blog" className="text-white hover:text-blue-500">
              Log In
            </Link>
          </button>
          <Link href="/pages/About" className="text-black hover:text-blue-500">
            Portfolio
          </Link>
          <Link href="/pages/Where" className="text-gray-700 hover:text-blue-500">
            About
          </Link>
        </div>

        {/* Texte au centre */}
        <div className="text-2xl font-bold text-gray-800 absolute left-1/2 transform -translate-x-1/2">
          Technologie E-B
        </div>

        {/* Icônes à droite */}
        <div className="flex space-x-4 mr-6"> {/* Ajout de marge à droite */}
          <a href="https://twitter.com" className="text-gray-700 hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href="https://youtube.com" className="text-gray-700 hover:text-blue-500">
            <FaYoutube size={24} />
          </a>
          <a href="https://instagram.com" className="text-gray-700 hover:text-blue-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com" className="text-gray-700 hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;