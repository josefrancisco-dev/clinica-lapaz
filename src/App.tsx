import { Routes, Route } from 'react-router-dom'
import { Header } from '@/src/components/header'
import { Footer } from '@/src/components/footer'
import HomePage from '@/src/pages/home'
import AgendarPage from '@/src/pages/agendar'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agendar" element={<AgendarPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
