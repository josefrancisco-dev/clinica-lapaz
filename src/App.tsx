import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import HomePage from '@/pages/home'
import AgendarPage from '@/pages/agendar'

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
