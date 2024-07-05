import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Payment from './pages/Payment'

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="payment/:id" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default router