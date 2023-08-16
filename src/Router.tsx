import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Series } from './pages/Series'

export function Router() {
  // router que faz as paginas rodarem. tem que colocar o Routes por voltar do route
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/series" element={<Series />} />
    </Routes>
  )
}
