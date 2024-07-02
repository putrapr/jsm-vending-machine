import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import Change from './pages/Change'

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="order" element={<Order />} />
        <Route path="change" element={<Change />} />
      </Routes>
    </BrowserRouter>
  )
}

export default router