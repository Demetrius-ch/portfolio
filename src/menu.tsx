import Link from "next/link";
import { MdHome, MdEmail, MdMenu } from "react-icons/md";

export default function Menu() {
    return (
        <div className="flex justify-between items-center bg-gray-200 p-4">
            {/* Left side menu */}
            <div className="flex flex-col space-y-2">
                <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                <Link href="/about" className="hover:text-blue-600">About</Link>
                <Link href="/where-to-fish" className="hover:text-blue-600">Where to Fish</Link>
                <Link href="/gallery" className="hover:text-blue-600">Gallery</Link>
            </div>

            {/* Center text */}
            <div className="text-center font-bold text-xl">
                Your Fishing Adventure
            </div>

            {/* Right side icons */}
            <div className="flex space-x-4">
                <MdHome className="text-2xl cursor-pointer hover:text-blue-600" />
                <MdEmail className="text-2xl cursor-pointer hover:text-blue-600" />
                <MdMenu className="text-2xl cursor-pointer hover:text-blue-600" />
            </div>
        </div>
    );
}