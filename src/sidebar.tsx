import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Menu() {
    return (
        <div className="flex justify-between items-center">
            {/* Left side menu */}
            <div className="flex justify-between items-center p-9 ">
                <Link href="/blog" className="hover:text-blue-600 m-2">Blog</Link>
                <Link href="/about" className="hover:text-blue-600 m-2">About</Link>
                <Link href="/where-to-fish" className="hover:text-blue-600 m-2">Where to Fish</Link>
                <Link href="/gallery" className="hover:text-blue-600 m-2">Gallery</Link>
            </div>

            {/* Center text */}
            
            {/* Right side icons */}
            <div className="flex  space-x-4 items-end place-content-end">
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600 font-black" />
                <FaYoutube className="text-2xl cursor-pointer hover:text-blue-600 font-black " />


                
            </div>
        </div>
    );
}