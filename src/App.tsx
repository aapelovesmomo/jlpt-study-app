import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import LevelPage from './components/LevelPage'
import GrammarPage from './components/GrammarPage'
import ExercisePage from './components/ExercisePage'
import VocabularyPage from './components/VocabularyPage'
import ProgressPage from './components/ProgressPage'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/level/:level" element={<LevelPage />} />
          <Route path="/level/:level/grammar" element={<GrammarPage />} />
          <Route path="/level/:level/exercises" element={<ExercisePage />} />
          <Route path="/level/:level/vocabulary" element={<VocabularyPage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
