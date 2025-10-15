import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface ProgressData {
  [level: string]: {
    grammar: { [id: string]: boolean }
    exercises: { [id: string]: boolean }
    vocabulary: { [id: string]: boolean }
  }
}

const ProgressPage: React.FC = () => {
  const [progress, setProgress] = useState<ProgressData>({})
  const [overallProgress, setOverallProgress] = useState(0)

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('jlpt-progress')
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
  }, [])

  useEffect(() => {
    // Calculate overall progress
    const levels = ['N5', 'N4', 'N3', 'N2', 'N1']
    let totalCompleted = 0
    let totalItems = 0

    levels.forEach(level => {
      const levelProgress = progress[level]
      if (levelProgress) {
        const grammarCompleted = Object.values(levelProgress.grammar || {}).filter(Boolean).length
        const exercisesCompleted = Object.values(levelProgress.exercises || {}).filter(Boolean).length
        const vocabularyCompleted = Object.values(levelProgress.vocabulary || {}).filter(Boolean).length
        
        totalCompleted += grammarCompleted + exercisesCompleted + vocabularyCompleted
        totalItems += 3 // Assuming 3 sections per level
      }
    })

    setOverallProgress(totalItems > 0 ? (totalCompleted / totalItems) * 100 : 0)
  }, [progress])

  const getLevelProgress = (level: string) => {
    const levelProgress = progress[level]
    if (!levelProgress) return 0

    const grammarCompleted = Object.values(levelProgress.grammar || {}).filter(Boolean).length
    const exercisesCompleted = Object.values(levelProgress.exercises || {}).filter(Boolean).length
    const vocabularyCompleted = Object.values(levelProgress.vocabulary || {}).filter(Boolean).length
    
    const totalCompleted = grammarCompleted + exercisesCompleted + vocabularyCompleted
    return totalCompleted
  }

  const levels = [
    { level: 'N5', name: 'N5 - Beginner', color: 'bg-green-100 text-green-800' },
    { level: 'N4', name: 'N4 - Elementary', color: 'bg-blue-100 text-blue-800' },
    { level: 'N3', name: 'N3 - Intermediate', color: 'bg-yellow-100 text-yellow-800' },
    { level: 'N2', name: 'N2 - Upper Intermediate', color: 'bg-orange-100 text-orange-800' },
    { level: 'N1', name: 'N1 - Advanced', color: 'bg-red-100 text-red-800' },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Your Progress
        </h1>
        <p className="text-gray-600 mt-2">
          Track your learning progress across all JLPT levels.
        </p>
      </div>

      {/* Overall Progress */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Overall Progress
        </h2>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
          </div>
          <div className="text-lg font-semibold text-gray-900">
            {Math.round(overallProgress)}%
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Complete all sections to master JLPT preparation
        </p>
      </div>

      {/* Level Progress */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Progress by Level
        </h2>
        
        {levels.map((level) => {
          const levelProgress = progress[level.level]
          const completedItems = getLevelProgress(level.level)
          const totalItems = 3 // grammar, exercises, vocabulary
          const progressPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0

          return (
            <div key={level.level} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${level.color}`}>
                    {level.level}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {level.name}
                  </h3>
                </div>
                <Link
                  to={`/level/${level.level}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Study →
                </Link>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{completedItems}/{totalItems} sections</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-medium text-gray-900 mb-1">Grammar</div>
                  <div className={`px-2 py-1 rounded ${
                    levelProgress?.grammar && Object.values(levelProgress.grammar).some(Boolean)
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {levelProgress?.grammar && Object.values(levelProgress.grammar).some(Boolean) ? 'Started' : 'Not started'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-gray-900 mb-1">Exercises</div>
                  <div className={`px-2 py-1 rounded ${
                    levelProgress?.exercises && Object.values(levelProgress.exercises).some(Boolean)
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {levelProgress?.exercises && Object.values(levelProgress.exercises).some(Boolean) ? 'Started' : 'Not started'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-gray-900 mb-1">Vocabulary</div>
                  <div className={`px-2 py-1 rounded ${
                    levelProgress?.vocabulary && Object.values(levelProgress.vocabulary).some(Boolean)
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {levelProgress?.vocabulary && Object.values(levelProgress.vocabulary).some(Boolean) ? 'Started' : 'Not started'}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Study Tips */}
      <div className="mt-8 bg-blue-50 rounded-lg border border-blue-200 p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          Study Tips
        </h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• Start with N5 if you're a beginner, or choose your current level</li>
          <li>• Study grammar concepts before attempting exercises</li>
          <li>• Practice vocabulary regularly with flashcards</li>
          <li>• Complete exercises to reinforce your learning</li>
          <li>• Track your progress to stay motivated</li>
        </ul>
      </div>
    </div>
  )
}

export default ProgressPage
