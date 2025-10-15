import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { jlptData } from '../data/jlptData'

const VocabularyPage: React.FC = () => {
  const { level } = useParams<{ level: string }>()
  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [studyMode, setStudyMode] = useState<'flashcards' | 'quiz'>('flashcards')
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: string }>({})
  const [quizResults, setQuizResults] = useState<{ [key: number]: boolean }>({})
  const [showQuizResults, setShowQuizResults] = useState(false)
  
  const levelData = jlptData[level as keyof typeof jlptData]
  
  if (!levelData || levelData.vocabulary.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to={`/level/${level}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← Back to {level}
          </Link>
        </div>
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Vocabulary coming soon!
          </h2>
          <p className="text-gray-600">
            We're working on adding vocabulary content for {level}.
          </p>
        </div>
      </div>
    )
  }

  const vocabulary = levelData.vocabulary
  const currentWord = vocabulary[currentCard]

  const nextCard = () => {
    if (currentCard < vocabulary.length - 1) {
      setCurrentCard(currentCard + 1)
      setShowAnswer(false)
    }
  }

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
      setShowAnswer(false)
    }
  }

  const checkQuizAnswer = (index: number, answer: string) => {
    const correct = answer.toLowerCase().trim() === vocabulary[index].english.toLowerCase().trim()
    setQuizResults({ ...quizResults, [index]: correct })
    setQuizAnswers({ ...quizAnswers, [index]: answer })
  }

  const submitQuiz = () => {
    setShowQuizResults(true)
  }

  const resetQuiz = () => {
    setQuizAnswers({})
    setQuizResults({})
    setShowQuizResults(false)
  }

  const correctAnswers = Object.values(quizResults).filter(Boolean).length
  const totalAnswers = Object.keys(quizAnswers).length

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to={`/level/${level}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          ← Back to {level}
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mt-4">
          {level} Vocabulary
        </h1>
        <p className="text-gray-600 mt-2">
          Study essential vocabulary with flashcards and quizzes.
        </p>
      </div>

      {/* Mode Selection */}
      <div className="mb-8">
        <div className="flex space-x-4">
          <button
            onClick={() => {
              setStudyMode('flashcards')
              setShowAnswer(false)
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              studyMode === 'flashcards'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            📚 Flashcards
          </button>
          <button
            onClick={() => {
              setStudyMode('quiz')
              resetQuiz()
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              studyMode === 'quiz'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            ✍️ Quiz
          </button>
        </div>
      </div>

      {studyMode === 'flashcards' ? (
        /* Flashcards Mode */
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              Card {currentCard + 1} of {vocabulary.length}
            </span>
          </div>

          <div className="min-h-[300px] flex flex-col justify-center items-center">
            <div className="text-center mb-6">
              <div className="japanese-text text-3xl font-bold text-gray-900 mb-2">
                {currentWord.japanese}
              </div>
              <div className="text-lg text-gray-600 mb-4">
                {currentWord.reading}
              </div>
              
              {showAnswer ? (
                <div className="space-y-3">
                  <div className="text-xl font-semibold text-gray-900">
                    {currentWord.english}
                  </div>
                  {currentWord.example && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="japanese-text text-lg mb-1">
                        {currentWord.example.japanese}
                      </div>
                      <div className="text-sm text-gray-600">
                        {currentWord.example.english}
                      </div>
                    </div>
                  )}
                  {currentWord.dictionaryLink && (
                    <div className="text-center">
                      <a
                        href={currentWord.dictionaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
                      >
                        📖 View in Jisho Dictionary
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-gray-500">
                  Click "Show Answer" to see the meaning
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              {!showAnswer ? (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Show Answer
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setShowAnswer(false)}
                    className="px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Hide Answer
                  </button>
                  <button
                    onClick={nextCard}
                    disabled={currentCard >= vocabulary.length - 1}
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Card
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              <button
                onClick={prevCard}
                disabled={currentCard === 0}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>
              <button
                onClick={nextCard}
                disabled={currentCard >= vocabulary.length - 1}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Quiz Mode */
        <div className="space-y-6">
          {!showQuizResults ? (
            vocabulary.map((word, index) => (
              <div key={word.id} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="japanese-text text-2xl font-bold text-gray-900 mb-2">
                    {word.japanese}
                  </div>
                  <div className="text-lg text-gray-600 mb-4">
                    {word.reading}
                  </div>
                </div>
                
                <div className="mb-4">
                  <input
                    type="text"
                    value={quizAnswers[index] || ''}
                    onChange={(e) => checkQuizAnswer(index, e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Type the English meaning..."
                  />
                </div>

                {quizAnswers[index] && (
                  <div className={`p-3 rounded-lg ${
                    quizResults[index] ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className={`text-lg ${quizResults[index] ? 'text-green-600' : 'text-red-600'}`}>
                          {quizResults[index] ? '✓' : '✗'}
                        </span>
                        <span className={`ml-2 font-medium ${quizResults[index] ? 'text-green-800' : 'text-red-800'}`}>
                          {quizResults[index] ? 'Correct!' : 'Incorrect'}
                        </span>
                      </div>
                      {word.dictionaryLink && (
                        <a
                          href={word.dictionaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          📖 Dictionary
                        </a>
                      )}
                    </div>
                    {!quizResults[index] && (
                      <p className="text-sm text-gray-700 mt-1">
                        Correct answer: {word.english}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            /* Quiz Results */
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quiz Results
              </h2>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {correctAnswers}/{vocabulary.length}
              </div>
              <p className="text-lg text-gray-600 mb-6">
                You got {Math.round((correctAnswers / vocabulary.length) * 100)}% correct!
              </p>
              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {!showQuizResults && (
            <div className="text-center">
              <button
                onClick={submitQuiz}
                className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit Quiz
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default VocabularyPage
