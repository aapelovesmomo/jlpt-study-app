import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { jlptData } from '../data/jlptData'

const ExercisePage: React.FC = () => {
  const { level } = useParams<{ level: string }>()
  const [currentExercise, setCurrentExercise] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState<number[]>([])
  
  const levelData = jlptData[level as keyof typeof jlptData]
  
  if (!levelData || levelData.exercises.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to={`/level/${level}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← Back to {level}
          </Link>
        </div>
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Exercises coming soon!
          </h2>
          <p className="text-gray-600">
            We're working on adding interactive exercises for {level}.
          </p>
        </div>
      </div>
    )
  }

  const exercise = levelData.exercises[currentExercise]
  const progress = ((completed.length + (isCorrect ? 1 : 0)) / levelData.exercises.length) * 100

  const checkAnswer = () => {
    const correct = userAnswer.trim() === exercise.answer.trim()
    setIsCorrect(correct)
    setShowResult(true)
    
    if (correct && !completed.includes(currentExercise)) {
      setScore(score + 1)
      setCompleted([...completed, currentExercise])
    }
  }

  const nextExercise = () => {
    if (currentExercise < levelData.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1)
      setUserAnswer('')
      setShowResult(false)
      setIsCorrect(false)
    }
  }

  const resetExercise = () => {
    setUserAnswer('')
    setShowResult(false)
    setIsCorrect(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to={`/level/${level}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          ← Back to {level}
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mt-4">
          {level} Exercises
        </h1>
        <p className="text-gray-600 mt-2">
          Practice with fill-in-blank and translation exercises.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Progress: {completed.length}/{levelData.exercises.length}
          </span>
          <span className="text-sm font-medium text-gray-700">
            Score: {score}/{levelData.exercises.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Exercise Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            Exercise {currentExercise + 1} of {levelData.exercises.length}
          </span>
          <span className="ml-3 inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
            {exercise.type === 'fill-blank' ? 'Fill in the Blank' : 'Translation'}
          </span>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {exercise.type === 'fill-blank' ? (
              <span className="japanese-text">{exercise.question}</span>
            ) : (
              exercise.question
            )}
          </h3>
        </div>

        <div className="mb-6">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !showResult && checkAnswer()}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            placeholder={exercise.type === 'fill-blank' ? 'Type your answer here...' : 'Type in Japanese...'}
            disabled={showResult}
          />
        </div>

        {showResult && (
          <div className={`p-4 rounded-lg mb-6 ${
            isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-center mb-2">
              <span className={`text-lg ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? '✓' : '✗'}
              </span>
              <span className={`ml-2 font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </span>
            </div>
            <div className="text-gray-700">
              <p className="mb-2">
                <strong>Correct answer:</strong> <span className="japanese-text">{exercise.answer}</span>
              </p>
              {exercise.explanation && (
                <p><strong>Explanation:</strong> {exercise.explanation}</p>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-center space-x-4">
          {!showResult ? (
            <button
              onClick={checkAnswer}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Check Answer
            </button>
          ) : (
            <>
              <button
                onClick={resetExercise}
                className="px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                Try Again
              </button>
              {currentExercise < levelData.exercises.length - 1 ? (
                <button
                  onClick={nextExercise}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next Exercise
                </button>
              ) : (
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    🎉 Congratulations!
                  </p>
                  <p className="text-gray-600 mb-4">
                    You've completed all exercises for {level}!
                  </p>
                  <Link
                    to={`/level/${level}/vocabulary`}
                    className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Study Vocabulary →
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Exercise Navigation */}
      <div className="flex justify-center">
        <div className="flex space-x-2">
          {levelData.exercises.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentExercise(index)
                setUserAnswer('')
                setShowResult(false)
                setIsCorrect(false)
              }}
              className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                index === currentExercise
                  ? 'bg-blue-600 text-white'
                  : completed.includes(index)
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExercisePage
