

import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const linkClasses = (path) =>
    `px-4 py-2 rounded hover:bg-green-100 ${
      location.pathname === path ? 'text-green-700 font-semibold' : 'text-gray-700'
    }`

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-700">GreenFork</Link>
        <div className="flex space-x-4">
          <Link to="/" className={linkClasses('/')}>Home</Link>
          <Link to="/menu" className={linkClasses('/menu')}>Menu</Link>
          <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar