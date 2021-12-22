import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './components/pages/Homepage'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Dashboard from './components/pages/Dashboard'
import Agents from './components/pages/Agents'
import Product from './components/pages/Product'
import Reward from './components/pages/Reward'
import History from './components/pages/History'
import NotFound from './components/pages/NotFound'
import Profile from './components/pages/Profile'
import PageError from './components/pages/PageError'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="agents" element={<Agents />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="reward" element={<Reward />}></Route>
        <Route path="history" element={<History />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="error" element={<PageError />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
