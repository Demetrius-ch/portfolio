import Link from 'next/link';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex container justify-between items-center p-10 bg-white ml-40 shadow-md">
      {/* Liens à gauche */}
      <div className="flex space-y-2 ml-10 space-x-4 ">
        <Link href="/Blog/" className="text-gray-700 hover:text-blue-500">
          Blog
        </Link>
        <Link href="/About" className="text-gray-700 hover:text-blue-500">
          About
        </Link>
        <Link href="/WhereToFish" className="text-gray-700 hover:text-blue-500">
          Where to Fish
        </Link>
      </div>

      {/* Texte au centre */}
      <div className="text-2xl font-bold text-gray-800 ml-10">Fillmore</div>

      {/* Icônes à droite */}
      <div className="flex space-x-4 ml-10">
        <a href="https://twitter.com" className="text-gray-700 hover:text-blue-500">
          <FaTwitter size={24} />
        </a>
        <a href="https://youtube.com" className="text-gray-700 hover:text-red-500">
          <FaYoutube size={24} />
        </a>
        <a href="https://instagram.com" className="text-gray-700 hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;