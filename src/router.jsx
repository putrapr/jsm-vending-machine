import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="order/:id" element={<Order />} />
      </Routes>
    </BrowserRouter>
  )
}

export default router