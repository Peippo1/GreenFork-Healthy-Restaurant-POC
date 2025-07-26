

import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-xl font-bold">
            GreenFork 🌿
          </Link>
        </div>
        <div className="space-x-4 mb-4 md:mb-0">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/menu" className="hover:underline">
            Menu
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M7.75 2C5.126 2 3 4.126 3 6.75v10.5C3 19.874 5.126 22 7.75 22h8.5C18.874 22 21 19.874 21 17.25V6.75C21 4.126 18.874 2 16.25 2h-8.5zM12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm4.25-.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M19.633 7.997c.013.176.013.353.013.529 0 5.385-4.098 11.6-11.6 11.6-2.303 0-4.45-.676-6.25-1.837a8.18 8.18 0 0 0 6.015-1.681 4.097 4.097 0 0 1-3.825-2.84c.631.095 1.262.076 1.863-.07a4.093 4.093 0 0 1-3.283-4.017v-.051a4.12 4.12 0 0 0 1.853.521 4.092 4.092 0 0 1-1.263-5.464A11.615 11.615 0 0 0 12.1 7.38a4.63 4.63 0 0 1-.102-.938A4.092 4.092 0 0 1 16.093 2c1.179 0 2.244.497 2.992 1.294a8.123 8.123 0 0 0 2.596-.99 4.093 4.093 0 0 1-1.798 2.26 8.203 8.203 0 0 0 2.356-.639 8.785 8.785 0 0 1-2.106 2.072z"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.01 3.676 9.153 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.324 21.153 22 17.01 22 12z"/>
            </svg>
          </a>
        </div>
        <div className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} GreenFork. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer