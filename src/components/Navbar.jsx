

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-700">
          GreenFork 🌿
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600 transition">
            Home
          </Link>
          <Link to="/menu" className="text-gray-700 hover:text-green-600 transition">
            Menu
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-green-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar