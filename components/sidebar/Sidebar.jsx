import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="max-w-[400px] w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 text-white flex flex-col items-center shadow-lg transition-transform transform duration-300 ease-in-out hover:scale-105">
      <h2 className="text-4xl font-bold p-8 border-b border-gray-700 text-center">Sidebar</h2>
      <nav className="flex-1 flex items-center justify-center w-full">
        <ul className="mt-4 space-y-4 w-full flex flex-col items-center">
          <li className="w-full">
            <Link href="/admin" className="block w-full p-4 hover:bg-blue-600 transition-colors duration-200 rounded-md flex items-center justify-center">
              <span className="mr-3">🏠</span> Home
            </Link>
          </li>
          <li className="w-full">
            <Link href="/admin/users" className="block w-full p-4 hover:bg-blue-600 transition-colors duration-200 rounded-md flex items-center justify-center">
              <span className="mr-3">👤</span> Users
            </Link>
          </li>
          <li className="w-full">
            <Link href="/admin/settings" className="block w-full p-4 hover:bg-blue-600 transition-colors duration-200 rounded-md flex items-center justify-center">
              <span className="mr-3">⚙️</span> Sozlamalar
            </Link>
          </li>
        </ul>
      </nav>
      <footer className="p-6 border-t border-gray-700 text-center w-full">
        <p className="text-sm">© 2024 SHOHIJAHON</p>
      </footer>
    </div>
  );
};

export default Sidebar;
