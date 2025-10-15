import React from 'react'
import { Link, useParams } from 'react-router-dom'

const LevelPage: React.FC = () => {
  const { level } = useParams<{ level: string }>()
  
  const levelInfo = {
    N5: { name: 'N5 - Beginner', description: 'Basic Japanese grammar and vocabulary' },
    N4: { name: 'N4 - Elementary', description: 'Elementary Japanese grammar and vocabulary' },
    N3: { name: 'N3 - Intermediate', description: 'Intermediate Japanese grammar and vocabulary' },
    N2: { name: 'N2 - Upper Intermediate', description: 'Upper intermediate Japanese grammar and vocabulary' },
    N1: { name: 'N1 - Advanced', description: 'Advanced Japanese grammar and vocabulary' },
  }

  const sections = [
    {
      title: 'Grammar',
      description: 'Learn essential grammar patterns and structures',
      link: `/level/${level}/grammar`,
      icon: '📚',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      title: 'Exercises',
      description: 'Practice with fill-in-blank and translation exercises',
      link: `/level/${level}/exercises`,
      icon: '✍️',
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      title: 'Vocabulary',
      description: 'Study essential vocabulary with flashcards',
      link: `/level/${level}/vocabulary`,
      icon: '📝',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          ← Back to Levels
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mt-4">
          {levelInfo[level as keyof typeof levelInfo]?.name}
        </h1>
        <p className="text-gray-600 mt-2">
          {levelInfo[level as keyof typeof levelInfo]?.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.title}
            to={section.link}
            className={`block rounded-lg border p-6 transition-colors ${section.color}`}
          >
            <div className="text-3xl mb-3">{section.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {section.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {section.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Study Tips for {level}
        </h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Start with grammar concepts to understand sentence structure</li>
          <li>• Practice exercises regularly to reinforce learning</li>
          <li>• Study vocabulary in context with example sentences</li>
          <li>• Track your progress to identify areas for improvement</li>
        </ul>
      </div>
    </div>
  )
}

export default LevelPage
