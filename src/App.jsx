import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import WorkSamplesPage from './pages/WorkSamples'
import SkillsPage from './pages/Skills'
import EducationPage from './pages/Education'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-samples" element={<WorkSamplesPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/education" element={<EducationPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

