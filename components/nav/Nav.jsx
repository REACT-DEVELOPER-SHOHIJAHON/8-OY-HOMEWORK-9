import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">
          <p>LOGO</p>
        </div>
        <ul className="flex space-x-8">
          <li className="relative">
            <Link href="/" className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300">
              HOME
            </Link>
            <span className="absolute left-0 bottom-0 h-1 w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="relative">
            <Link href="/admin" className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300">
              ADMINISTRATOR
            </Link>
            <span className="absolute left-0 bottom-0 h-1 w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;