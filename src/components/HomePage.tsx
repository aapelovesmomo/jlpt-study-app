import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  const levels = [
    { level: 'N5', name: 'N5 - Beginner', description: 'Basic Japanese grammar and vocabulary', color: 'bg-green-100 text-green-800' },
    { level: 'N4', name: 'N4 - Elementary', description: 'Elementary Japanese grammar and vocabulary', color: 'bg-blue-100 text-blue-800' },
    { level: 'N3', name: 'N3 - Intermediate', description: 'Intermediate Japanese grammar and vocabulary', color: 'bg-yellow-100 text-yellow-800' },
    { level: 'N2', name: 'N2 - Upper Intermediate', description: 'Upper intermediate Japanese grammar and vocabulary', color: 'bg-orange-100 text-orange-800' },
    { level: 'N1', name: 'N1 - Advanced', description: 'Advanced Japanese grammar and vocabulary', color: 'bg-red-100 text-red-800' },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          JLPT Study App
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Master Japanese grammar, vocabulary, and test-taking skills for the Japanese Language Proficiency Test (JLPT).
          Choose your level and start practicing with interactive exercises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => (
          <Link
            key={level.level}
            to={`/level/${level.level}`}
            className="block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${level.color}`}>
                {level.level}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {level.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {level.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          How to Use This App
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-semibold">1</span>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Choose Your Level</h3>
            <p className="text-sm text-gray-600">Select N5 (beginner) to N1 (advanced) based on your current Japanese level.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-semibold">2</span>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Study Grammar</h3>
            <p className="text-sm text-gray-600">Learn grammar concepts with clear explanations and examples.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-semibold">3</span>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Practice Exercises</h3>
            <p className="text-sm text-gray-600">Test your knowledge with typing exercises and vocabulary quizzes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
