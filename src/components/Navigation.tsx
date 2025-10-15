import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation: React.FC = () => {
  const location = useLocation()

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold text-gray-800">
            JLPT Study
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              to="/progress" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/progress' 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Progress
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
