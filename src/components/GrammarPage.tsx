import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { jlptData } from '../data/jlptData'

const GrammarPage: React.FC = () => {
  const { level } = useParams<{ level: string }>()
  const [selectedGrammar, setSelectedGrammar] = useState<string | null>(null)
  
  const levelData = jlptData[level as keyof typeof jlptData]
  
  if (!levelData || levelData.grammar.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to={`/level/${level}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← Back to {level}
          </Link>
        </div>
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Grammar content coming soon!
          </h2>
          <p className="text-gray-600">
            We're working on adding comprehensive grammar content for {level}.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to={`/level/${level}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          ← Back to {level}
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mt-4">
          {level} Grammar
        </h1>
        <p className="text-gray-600 mt-2">
          Learn essential grammar patterns and structures for {level}.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Grammar List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Grammar Points
          </h2>
          {levelData.grammar.map((grammar) => (
            <div
              key={grammar.id}
              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                selectedGrammar === grammar.id
                  ? 'bg-blue-50 border-blue-300'
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedGrammar(selectedGrammar === grammar.id ? null : grammar.id)}
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                {grammar.title}
              </h3>
              <p className="text-sm text-gray-600">
                {grammar.explanation}
              </p>
            </div>
          ))}
        </div>

        {/* Grammar Details */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          {selectedGrammar ? (
            (() => {
              const grammar = levelData.grammar.find(g => g.id === selectedGrammar)
              if (!grammar) return null
              
              return (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {grammar.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Explanation</h4>
                    <p className="text-gray-700">{grammar.explanation}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Examples</h4>
                    <div className="space-y-3">
                      {grammar.examples.map((example, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded">
                          <div className="japanese-text text-lg mb-1">{example.japanese}</div>
                          <div className="text-sm text-gray-600 mb-1">{example.romaji}</div>
                          <div className="text-sm text-gray-700">{example.english}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Usage</h4>
                    <p className="text-gray-700">{grammar.usage}</p>
                  </div>
                </div>
              )
            })()
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-400 text-4xl mb-4">📚</div>
              <p className="text-gray-600">
                Select a grammar point from the list to see detailed explanations and examples.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          to={`/level/${level}/exercises`}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Practice Exercises →
        </Link>
      </div>
    </div>
  )
}

export default GrammarPage
